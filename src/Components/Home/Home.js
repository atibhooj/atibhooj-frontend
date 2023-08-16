import React from 'react';
import Navbar from '../Navbar/Navbar';
import ShortNav from '../ShortNav/ShortNav';
import TopBanner from '../TopBanner/TopBanner';
import PostContainer from '../PostContainer/PostContainer';
import Footer from '../Footer/Footer';
import useAdmin from '../../Hook/useAdmin';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/Firebase.init';
import ShortNavTwo from '../ShortNavTwo/ShortNavTwo';

const Home = () => {
    return (
        <div>
            <div className='border-t border-b border-b-[#ebebeb] border-t-[#ebebeb] py-3'>
                <ShortNav />
            </div>
            <TopBanner />
            {/* <ShortNavTwo /> */}
            <PostContainer />
            <Footer />
        </div>
    );
};

export default Home;