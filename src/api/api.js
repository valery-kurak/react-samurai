import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "09605360-289b-4283-a775-dcdfd3f0a2d7"
    }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    }
}

export const followAPI = {
    followUser(id = 1) {
        return instance.post(`follow/${id}`, {}).then(response => response.data)
    }
}

export const unfollowAPI = {
    unfollowUser(id = 1) {
        return instance.delete(`follow/${id}`, {}).then(response => response.data)
    }
}

export const profileAPI = {
    getProfile(userId = 1) {
        return instance.get(`profile/${userId}`).then(response => response.data)
    }
}

export const authAPI = {
    getAuth() {
        return instance.get(`auth/me`).then(response => response.data)
    }
}
