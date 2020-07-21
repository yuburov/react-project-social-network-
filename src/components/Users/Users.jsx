import React from "react";
import s from './Users.module.css'

let Users = (props) => {
  if (props.users.length === 0) {
    props.setUsers([
          {
            id: 1, photoUrl: 'https://tmssl.akamaized.net/images/portrait/originals/49821-1579985258.jpg',
            followed: false, fullName: 'Aziz', status: 'Just do it', location: {city: 'Bishkek', country: 'Kyrgyzstan'}
          },
          {
            id: 2, photoUrl: 'https://tmssl.akamaized.net/images/portrait/originals/49821-1579985258.jpg',
            followed: true, fullName: 'Vitalya', status: 'Be yourself', location: {city: 'Astana', country: 'Kazakhstan'}
          },
          {
            id: 3, photoUrl: 'https://tmssl.akamaized.net/images/portrait/originals/49821-1579985258.jpg',
            followed: false, fullName: 'Diana', status: 'Happy', location: {city: 'Bishkek', country: 'Kyrgyzstan'}
          },
        ]
    )
  }
  return <div>
    {
      props.users.map(u => <div key={u.id}>
        <span>
          <div>
            <img className={s.photo} src={u.photoUrl} />
          </div>
          <div>
            {u.followed ? <button onClick={() => {props.unfollow(u.id)}}>Unfollow</button>
                : <button onClick={() => {props.follow(u.id)}}>Follow</button>}
          </div>
        </span>
        <span>
          <span>
            <div>{u.fullName}</div>
            <div>{u.status}</div>
          </span>
          <span>
            <div>{u.location.country}</div>
            <div>{u.location.city}</div>
          </span>
        </span>
      </div>)
    }
  </div>
}

export default Users