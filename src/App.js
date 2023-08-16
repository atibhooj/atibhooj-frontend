import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './Components/Home/Home';
import PostDetails from './Components/PostDetails/PostDetails';
import UserProfile from './Components/UserProfile/UserProfile';
import Magazine from './Components/Magazine/Magazine';
import TeamAtibhooj from './Components/TeamAtibhooj/TeamAtibhooj';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';
import AtibhoojMentors from './Components/AtibhoojMentors/AtibhoojMentors';
import AdminDashBoard from './Components/AdminDashBoard/AdminDashBoard';
import AllUsers from './Components/AllUsers/AllUsers';
import MegazineUpload from './Components/MegazineUpload/MegazineUpload';
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute';
import EditProfile from './Components/EditProfile/EditProfile';
import EditCoverPic from './Components/EditCoverPic/EditCoverPic';
import EditProfilePic from './Components/EditProfilePic/EditProfilePic';
import EditBio from './Components/EditBio/EditBio';
import Navbar from './Components/Navbar/Navbar';
import TopBannerUpload from './Components/TopBannerUpload/TopBannerUpload';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/postD/:postID' element={<PostDetails></PostDetails>}></Route>
        <Route path='/userprofile/:gmailId' element={<UserProfile></UserProfile>}></Route>
        <Route path='/magazine-page' element={<Magazine></Magazine>}></Route>
        <Route path='/teamAtibhooj-page' element={<TeamAtibhooj></TeamAtibhooj>}></Route>
        <Route path='/login-page' element={<Login></Login>}></Route>
        <Route path='/signup-page' element={<SignUp></SignUp>}></Route>
        <Route path='/atibhooj-mentors' element={<AtibhoojMentors></AtibhoojMentors>}></Route>
        <Route path='/admin-dashboard' element={
          <ProtectedRoute>
            <AdminDashBoard></AdminDashBoard>
          </ProtectedRoute>
        }>
          <Route index element={<AllUsers />}></Route>
          <Route path='megazine-upload' element={<MegazineUpload />}></Route>
          <Route path='topBanner-upload' element={<TopBannerUpload></TopBannerUpload>}></Route>
        </Route>
        <Route path='/edit-profile' element={
          <ProtectedRoute>
            <EditProfile></EditProfile>
          </ProtectedRoute>
        }>
          <Route index element={<EditCoverPic></EditCoverPic>}></Route>
          <Route path='edit-profile-pic' element={<EditProfilePic></EditProfilePic>}></Route>
          <Route path='edit-bio' element={<EditBio></EditBio>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
