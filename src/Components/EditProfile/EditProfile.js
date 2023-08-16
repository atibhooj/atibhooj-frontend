import React, { useRef, useState } from 'react';
import { MdAddPhotoAlternate } from 'react-icons/md';
import CustomLink from '../CustomLink/CustomLink';
import { Outlet } from 'react-router-dom';

const EditProfile = () => {
    const [imageFile, setImageFile] = useState("");
    const [imageFileTwo, setImageFileTwo] = useState("");
    console.log("One", imageFile)
    console.log("two", imageFileTwo)

    const [image, setImage] = useState(null);
    const [imageTwo, setImageTwo] = useState(null);
    const hiddenFileInputOne = useRef(null);
    const hiddenFileInputTwo = useRef(null);

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
                        setImage(file);
                    },
                    "image/jpeg",
                    0.8
                );
            };
        };
    };

    const handleProfilePic = (event) => {
        setImageFileTwo(event.target.files[0]);
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

    const handleClickOne = (event) => {
        hiddenFileInputOne.current.click();
    }

    const handleClickTwo = (event) => {
        hiddenFileInputTwo.current.click();
    }


    return (
        <div>
            <div className='grid grid-cols-5'>
                <div className='col-span-1 h-[100vh] sticky top-0 bottom-0 right-0 left-0 flex flex-col gap-4 gap-2 m-4 p-2 shadow-lg rounded-lg'>
                    <CustomLink to='/edit-profile' className='bg-secondary hover:bg-primary hover:text-white duration-300 py-3 text-neutral font-[500] rounded-lg flex justify-center'>Edit Cover Pic</CustomLink>
                    <CustomLink to='/edit-profile/edit-profile-pic' className='bg-secondary hover:bg-primary hover:text-white duration-300 py-3 text-neutral font-[500] rounded-lg flex justify-center'>Edit Profile Pic</CustomLink>
                    <CustomLink to='/edit-profile/edit-bio' className='bg-secondary hover:bg-primary hover:text-white duration-300 py-3 text-neutral font-[500] rounded-lg flex justify-center'>Edit Bio</CustomLink>
                </div>
                <div className='col-span-4'>
                    <Outlet />
                </div>
            </div>
            {/* <div className='flex flex-col gap-5 justify-center items-center'>
                <div>
                    <label htmlFor="image-upload-input" className="text-left w-full hidden">
                        <p className=''>{imageTwo ? imageTwo?.name : "Choose an image"}</p>
                    </label>
                    <div className='w-full' onClick={handleClickTwo} style={{ cursor: "pointer" }}>
                        {imageTwo ? (
                            <img src={URL.createObjectURL(imageTwo)} alt="upload image" className="h-[300px] object-cover" />
                        ) : (
                            <div className='block w-full p-3 rounded-md text-neutral cursor-pointer flex items-center gap-2'>
                                <MdAddPhotoAlternate className='text-[23px]' />
                                <p className='text-[16px] eng-font'>Choose Profile Pic</p>
                            </div>
                        )}

                        <input
                            id="image-upload-input"
                            type="file"
                            onChange={handleProfilePic}
                            ref={hiddenFileInputTwo}
                            style={{ display: "none" }}
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="image-upload-input" className="text-left w-full hidden">
                        <p className=''>{image ? image?.name : "Choose an image"}</p>
                    </label>
                    <div className='text-left w-full' onClick={handleClickOne} style={{ cursor: "pointer" }}>
                        {image ? (
                            <img src={URL.createObjectURL(image)} alt="upload image" className="h-[300px] w-1/2 object-cover" />
                        ) : (
                            <div className='block w-full p-3 rounded-md text-neutral cursor-pointer flex items-center gap-2'>
                                <MdAddPhotoAlternate className='text-[23px]' />
                                <p className='text-[16px]'>ছবি যুক্ত করুন</p>
                            </div>
                        )}

                        <input
                            id="image-upload-input"
                            type="file"
                            onChange={handleCoverPic}
                            ref={hiddenFileInputOne}
                            style={{ display: "none" }}
                        />
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default EditProfile;