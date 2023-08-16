import React, { useRef, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { MdAddPhotoAlternate } from 'react-icons/md';
import auth from '../../Firebase/Firebase.init';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';

const EditCoverPic = () => {
    const [cuser, cloading, cerror] = useAuthState(auth);
    const [imageFile, setImageFile] = useState("");
    const [imageTwo, setImageTwo] = useState(null);
    const hiddenFileInputTwo = useRef(null);
    const navigate = useNavigate();
    const [serverStatus, setServerStatus] = useState(200);
    const handleSignOut = () => {
        signOut(auth);
        navigate("/login-page");
        // toast.success("Something is wrong login again!");
    };

    const handleCoverPic = (event) => {
        setImageFile(event.target.files[0]);
        const file = event.target.files[0];
        const imgname = event.target.files[0].name;
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            const img = new Image();
            img.src = reader.result;
            img.onload = () => {
                const canvas = document.createElement("canvas");
                const maxSize = Math.max(img.width, img.height);
                canvas.width = maxSize;
                canvas.height = maxSize;
                const ctx = canvas.getContext("2d");
                ctx.drawImage(
                    img,
                    (maxSize - img.width) / 2,
                    (maxSize - img.height) / 2
                );
                canvas.toBlob(
                    (blob) => {
                        const file = new File([blob], imgname, {
                            type: "image/png",
                            lastModified: Date.now(),
                        });

                        console.log(file);
                        setImageTwo(file);
                    },
                    "image/jpeg",
                    0.8
                );
            };
        };
    };

    const handleClickTwo = (event) => {
        hiddenFileInputTwo.current.click();
    }

    const handleForm = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('image', imageFile);
        if (imageFile) {
            fetch('https://api.imgbb.com/1/upload?key=a17fed125c9608497b88a6c1242f16f2', {
                method: 'POST',
                body: formData
            })
                .then(response => response.json())
                .then(data => {
                    if (data.success) {
                        fetch(`http://test.atibhooj.com/userCover/${cuser?.email}`, {
                            method: 'PUT',
                            headers: {
                                'content-type': 'application/json',
                                authorization: `${cuser?.email} ${localStorage.getItem('accessToken')}`
                            },
                            body: JSON.stringify({
                                userCoverPic: data.data.url
                            })
                        })
                            .then(res => {
                                setServerStatus(res.status);
                                if (res.status === 401 || res.status === 403) {
                                    handleSignOut();
                                }
                                return res.json()
                            })
                            .then(data => console.log(data))
                    }
                })
        }
    }
    return (
        <div className=''>
            <form onSubmit={handleForm}>
                <label htmlFor="image-upload-input" className="text-left w-full hidden">
                    <p className=''>{imageTwo ? imageTwo?.name : "Choose an image"}</p>
                </label>
                <div className='w-full' onClick={handleClickTwo} style={{ cursor: "pointer" }}>
                    {imageTwo ? (
                        <img src={URL.createObjectURL(imageTwo)} alt="upload image" className="h-[300px] w-[500px] mx-auto object-cover" />
                    ) : (
                        <div className='block w-full p-3 rounded-md text-neutral cursor-pointer flex items-center justify-center mt-6 gap-2 border p-16'>
                            <MdAddPhotoAlternate className='text-[23px]' />
                            <p className='text-[16px] eng-font'>Choose Cover Pic</p>
                        </div>
                    )}

                    <input
                        id="image-upload-input"
                        type="file"
                        onChange={handleCoverPic}
                        ref={hiddenFileInputTwo}
                        style={{ display: "none" }}
                    />
                </div>
                <input className='mt-6 btn rounded-sm border-0 btn-primary hover:bg-primary focus:outline-none hover:border-0 text-white font-300' type="submit" value='UPDATE' />
            </form>
        </div>
    );
};

export default EditCoverPic;