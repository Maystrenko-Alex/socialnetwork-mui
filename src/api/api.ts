import axios from "axios";


const instanse = axios.create(
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
        const response = await instanse.get(`users?page=${currentPage}&count=${pageSize}`);
        return response.data;
    },

    async isFollow(userId: number) {
        const response = await instanse.get(`follow/${userId}`);
        return response.data;
    },

    async follow(userId: number) {
        const response = await instanse.post(`follow/${userId}`)
        return response.data;
    },

    async unfollow(userId: number) {
        const response = await instanse.delete(`follow/${userId}`)
        return response.data;
    }
}