import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import { Link } from 'react-router-dom';

const ShortNav = () => {
    return (
        <div className='w-full'>
            <div className='w-[93%] mx-auto'>
                <Swiper
                    spaceBetween={20}
                    slidesPerView={3}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    breakpoints={{
                        700: {
                            slidesPerView: 3,
                        },
                        850: {
                            slidesPerView: 3,
                        },
                        980: {
                            slidesPerView: 4,
                        },
                        1080: {
                            slidesPerView: 4,
                        },
                        1280: {
                            slidesPerView: 4,
                        },
                        1440: {
                            slidesPerView: 4,
                        },
                        1720: {
                            slidesPerView: 4,
                        }
                    }}
                >

                    <SwiperSlide className='bg-primary text-white font-[500] p-[5px] rounded-md cursor-pointer'><Link to='/' className='flex justify-center items-center text-[12px] md:text-[16px]'>অতিভূজ</Link></SwiperSlide>
                    <SwiperSlide className='bg-secondary text-neutral font-[500] p-[5px] rounded-md cursor-pointer'><Link to='/magazine-page' className='flex justify-center items-center text-[12px] md:text-[16px]'>অতিসৃজন</Link></SwiperSlide>
                    <SwiperSlide className='bg-secondary text-neutral font-[500] p-[5px] rounded-md cursor-pointer'><Link to='/teamAtibhooj-page' className='flex justify-center items-center text-[12px] md:text-[16px]'>টিম অতিভূজ</Link></SwiperSlide>
                    <SwiperSlide className='bg-secondary text-neutral font-[500] p-[5px] rounded-md cursor-pointer'><Link to='/atibhooj-mentors' className='flex justify-center items-center text-[12px] md:text-[16px]'>অতিভূজ মেন্টরস</Link></SwiperSlide>
                    <SwiperSlide className='bg-secondary text-neutral font-[500] p-[5px] rounded-md cursor-pointer'><Link className='flex justify-center items-center text-[12px] md:text-[16px]'>জয়েন টিম অতিভূজ</Link></SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default ShortNav;