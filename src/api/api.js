import * as axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    "API-KEY": "117e4583-ecfc-47e1-9f09-2a40ac7daf48"
  }
})

export const usersApi = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => {
          return response.data
        });
  },
  follow(userId) {
    return instance.post(`follow/${userId}`)
  },
  unfollow(userId) {
    return instance.delete(`follow/${userId}`)
  },
  getProfile(userId) {
    return profileApi.getProfile(userId)
  }
}
export const profileApi = {
  getProfile(userId) {
    return instance.get(`profile/` + userId)
  },
  getStatus(userId) {
    return instance.get(`profile/status/` + userId)
  },
  updateStatus(status) {
    return instance.put(`profile/status/`, {status})
  },
  savePhoto(photoFile) {
    const formData = new FormData();
    formData.append('image', photoFile)
    return instance.put(`profile/photo/`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
  },
  saveProfile(profile) {
    return instance.put(`profile`, profile)
  }
}
export const authApi = {
  me() {
    return instance.get(`auth/me`
    )
  },
  login(email, password, rememberMe = false, captcha = null) {
    return instance.post(`auth/login`, {email, password, rememberMe, captcha})
  },
  logout() {
    return instance.delete(`auth/login`)
  }
}
export const securityApi = {
  getCaptchaUrl() {
    return instance.get(`security/get-captcha-url`)
  }
}