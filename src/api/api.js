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
  }
}
export const getUsers2 = (currentPage=1, pageSize=10) => {
  return instance.get(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => {
        return response.data
      })
}
