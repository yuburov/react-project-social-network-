import React from 'react';
import s from './ProfileInfo.module.css'


const ProfileInfo = () => {
  return (
      <div>
        <div>
          <img src='https://regnum.ru/uploads/pictures/news/2019/07/30/regnum_picture_156449490179687_normal.jpg'/>
        </div>
        <div className={s.descriptionBlock}>
          ava + description
        </div>
      </div>
  )
}

export default ProfileInfo