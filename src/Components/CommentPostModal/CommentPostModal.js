import React from 'react';

const CommentPostModal = ({ handleForm, handleComment }) => {

    return (
        <div>
            <input type="checkbox" id="comment-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box sm:w-[80%] md:w-[70%] lg:w-1/2 max-w-5xl">
                    <label htmlFor="comment-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form onSubmit={handleForm} className='px-4 flex gap-12 items-end mt-8 text-neutral text-[14px] flex flex-col gap-4'>
                        <input onBlur={handleComment} type="text" placeholder='কমেন্ট বিস্তারিত...' className='w-full border-b focus:outline-0 p-2' />
                        <input className='btn btn-primary hover:bg-primary focus:outline-none hover:border-0 text-white font-300' type="submit" value='POST' />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CommentPostModal;