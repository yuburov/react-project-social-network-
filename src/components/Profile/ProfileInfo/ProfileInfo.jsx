import React from 'react';
import s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from './ProfileStatus'


const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader/>
  }
  return (
      <div>
        {/*<div>*/}
        {/*  <img src='https://regnum.ru/uploads/pictures/news/2019/07/30/regnum_picture_156449490179687_normal.jpg'/>*/}
        {/*</div>*/}
        <div className={s.descriptionBlock}>
          <img src={props.profile.photos.large}/>
          <ProfileStatus status={props.status}
                          updateStatus={props.updateStatus}/>
          {/*<div>*/}
          {/*  <p><b>About me:</b> {props.profile.aboutMe}</p>*/}
          {/*  <p><b>Instagram:</b> {props.profile.contacts.instagram}</p>*/}
          {/*  <p><b>Описание о поиске работы:</b> {props.profile.lookingForAJobDescription}</p>*/}
          {/*</div>*/}
        </div>
      </div>
  )
}

export default ProfileInfo