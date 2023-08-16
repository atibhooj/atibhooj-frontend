import React from 'react';
import { Outlet } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';

const AdminDashBoard = () => {
    return (
        <div>
            <div className='grid xl:grid-cols-5 grid-cols-1'>
                <div className='col-span-1 xl:h-[100vh] xl:sticky top-0 bottom-0 right-0 left-0 flex flex-col gap-4 gap-2 m-4 p-2 shadow-lg rounded-lg'>
                    <CustomLink to='/admin-dashboard' className='bg-secondary hover:bg-primary hover:text-white duration-300 py-3 text-neutral font-[500] rounded-lg flex justify-center'>Users</CustomLink>
                    <CustomLink to='/admin-dashboard/megazine-upload' className='bg-secondary hover:bg-primary hover:text-white duration-300 py-3 text-neutral font-[500] rounded-lg flex justify-center'>Megazine Upload</CustomLink>
                    <CustomLink to='/admin-dashboard/topBanner-upload' className='bg-secondary hover:bg-primary hover:text-white duration-300 py-3 text-neutral font-[500] rounded-lg flex justify-center'>Banner Upload</CustomLink>
                </div>
                <div className='col-span-4'>
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default AdminDashBoard;