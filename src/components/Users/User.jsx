import React from "react";
import s from "./Users.module.css";
import userPhoto from "../../assets/images/171-1717870_stockvader-predicted-cron-for-may-user-profile-icon-png.png";
import {NavLink} from "react-router-dom";

let User = ({user, followingInProgress, unfollow, follow}) => {
  return (
      <div>
        <span>
          <div>
            <NavLink to={'/profile/' + user.id}>
              <img className={s.photo} src={user.photos.small != null ? user.photos.small : userPhoto}/>
            </NavLink>
          </div>
          <div>
            {user.followed
                ? <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                  unfollow(user.id)
                }}>Unfollow</button>
                : <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                 follow(user.id)
                }}>Follow</button>}
          </div>
        </span>
        <span>
          <span>
            <div>{user.name}</div>
            <div>{user.status}</div>
          </span>
          <span>
            <div>{"user.location.country"}</div>
            <div>{"user.location.city"}</div>
          </span>
        </span>
      </div>
  )
}

export default User