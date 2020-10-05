import {profileApi, usersApi} from "../api/api";
import {stopSubmit} from "redux-form";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE  = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS'
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS'

let initialState = {
  posts: [
    {id: 1, message: "It's my first post"},
    {id: 2, message: 'Hello world'},
  ],
  profile: null,
  status: ''
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 4,
        message: action.newPostText
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
      };
    }
    case SET_STATUS: {
      return  {
        ...state,
        status: action.status
      }
    }
    case SET_USER_PROFILE: {
      return  {
        ...state, profile: action.profile
      }
    }
    case SAVE_PHOTO_SUCCESS: {
      return  {
        ...state, profile: {...state.profile, photos: action.photos}
      }
    }

    default:
      return state
  }
}

export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})
export const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos})
export const getUserProfile = (userId) => async (dispatch) => {
  let response = await usersApi.getProfile(userId)
    dispatch(setUserProfile(response.data))
}
export const getStatus = (userId) => async (dispatch) => {
  let response = await profileApi.getStatus(userId)
        dispatch(setStatus(response.data))
}
export const updateStatus = (status) => async (dispatch) => {
  let response = await profileApi.updateStatus(status)
        if (response.data.resultCode === 0) {
          dispatch(setStatus(status))
        }
}
export const savePhoto = (file) => async (dispatch) => {
  let response = await profileApi.savePhoto(file)
  if (response.data.resultCode === 0) {
    dispatch(savePhotoSuccess(response.data.data.photos))
  }
}
export const saveProfile = (profile) => async (dispatch, getState) => {
  const userId = getState().auth.userId
  const response = await profileApi.saveProfile(profile)
  if (response.data.resultCode === 0) {
    dispatch(getUserProfile(userId))
  } else {
    dispatch(stopSubmit('edit-profile', {_error: response.data.messages[0]}))  //Указывается редакс-форма
    return Promise.reject(response.data.messages[0])
  }
}

export default profileReducer