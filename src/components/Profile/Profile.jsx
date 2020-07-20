import React from 'react';
import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import store from "../../redux/redux-store";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


const Profile = (props) => {

  return <div className={s.content}>
    <ProfileInfo/>
    <MyPostsContainer store={store}/>
  </div>
}

export default Profile