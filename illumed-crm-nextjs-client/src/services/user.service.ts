import { IUser } from '@/interfaces/user.interface'
import axios from 'axios'
import { cookies } from 'next/headers'

const API_URL = 'https://illumed-crm-backend.onrender.com'

const TEMP_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInVzZXJuYW1lIjoibWFyaWEiLCJpYXQiOjE3MDg2OTQ3NTEsImV4cCI6MTcwOTI5OTU1MX0.mm7BnCawEHSR-XGdXrpPJZGUcquWq1t0kWjvMnq-RJc"

axios.defaults.baseURL = API_URL




export const UserService = {
    async register(regData: IUser) {
        const { data } = await axios.post<IUser, any>('/auth/register', JSON.stringify(regData),
            {
                headers: {
                    "Content-Type": 'application/json'
                }
            }
        ).catch((e: any) => {
            console.log(e.response.data.message)
            return e.response
        })
        return data
    },

    async signIn(regData: IUser) {
        const { data } = await axios.post<IUser, any>('/auth/login', JSON.stringify(regData),
            {
                headers: {
                    "Content-Type": 'application/json'
                }
            }
        ).catch((e: any) => {
            console.log(e.response.data.message)
            return e.response
        })
        return data
    },
    async getToken() {
        const cookieStore = cookies()
        return cookieStore.get("token")?.value
    },

    async deleteToken() {
        cookies().delete("token")
    }


}