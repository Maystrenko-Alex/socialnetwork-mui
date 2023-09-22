import axios from "axios";


const instance = axios.create(
    {
        baseURL: 'https://social-network.samuraijs.com/api/1.0/',
        withCredentials: true,
        headers: {
            'API-KEY': 'fc90e319-a20b-418d-9648-645c6c049dd5'
        }
    }
)

export const usersAPI = {

    async getUsers(currentPage: number = 1, pageSize: number = 16) {
        const response = await instance.get(`users?page=${currentPage}&count=${pageSize}`);
        return response.data;
    },

    async isFollow(userId: number) {
        const response = await instance.get(`follow/${userId}`);
        return response.data;
    },

    async follow(userId: number) {
        const response = await instance.post(`follow/${userId}`)
        return response.data;
    },

    async unfollow(userId: number) {
        const response = await instance.delete(`follow/${userId}`)
        return response.data;
    }
}

export const profileApi = {
    async getProfile(userId: number) {
        const response = await instance.get(`profile/${userId}`);
        return response.data;
    }
}

export const authApi = {
    async me() {
        const res = await instance.get(`auth/me`);
        return res.data;
    }
}