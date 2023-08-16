import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import { Link } from 'react-router-dom';

const ShortNavTwo = () => {
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
                            slidesPerView: 4,
                        },
                        850: {
                            slidesPerView: 4,
                        },
                        980: {
                            slidesPerView: 5,
                        },
                        1080: {
                            slidesPerView: 5,
                        },
                        1280: {
                            slidesPerView: 5,
                        },
                        1440: {
                            slidesPerView: 5,
                        },
                        1720: {
                            slidesPerView: 5,
                        }
                    }}
                >
                    {/* গল্প, কবিতা, উপন্যাস, প্রবন্ধ, ফিচার, নিউজ */}
                    <SwiperSlide className='bg-primary text-white font-[500] p-[5px] rounded-md cursor-pointer'><Link to='/' className='flex justify-center items-center text-[12px] md:text-[16px]'>গল্প</Link></SwiperSlide>
                    <SwiperSlide className='bg-secondary text-neutral font-[500] p-[5px] rounded-md cursor-pointer'><Link to='/magazine-page' className='flex justify-center items-center text-[12px] md:text-[16px]'>কবিতা</Link></SwiperSlide>
                    <SwiperSlide className='bg-secondary text-neutral font-[500] p-[5px] rounded-md cursor-pointer'><Link to='/teamAtibhooj-page' className='flex justify-center items-center text-[12px] md:text-[16px]'>উপন্যাস</Link></SwiperSlide>
                    <SwiperSlide className='bg-secondary text-neutral font-[500] p-[5px] rounded-md cursor-pointer'><Link to='/atibhooj-mentors' className='flex justify-center items-center text-[12px] md:text-[16px]'>প্রবন্ধ</Link></SwiperSlide>
                    <SwiperSlide className='bg-secondary text-neutral font-[500] p-[5px] rounded-md cursor-pointer'><Link className='flex justify-center items-center text-[12px] md:text-[16px]'>ফিচার</Link></SwiperSlide>
                    <SwiperSlide className='bg-secondary text-neutral font-[500] p-[5px] rounded-md cursor-pointer'><Link className='flex justify-center items-center text-[12px] md:text-[16px]'>নিউজ</Link></SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default ShortNavTwo;