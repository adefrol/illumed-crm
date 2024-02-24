import { IUser } from '@/interfaces/user.interface'
import axios from 'axios'

const API_URL = 'http://localhost:3001'

const TEMP_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInVzZXJuYW1lIjoibWFyaWEiLCJpYXQiOjE3MDg2OTQ3NTEsImV4cCI6MTcwOTI5OTU1MX0.mm7BnCawEHSR-XGdXrpPJZGUcquWq1t0kWjvMnq-RJc"

axios.defaults.baseURL = API_URL




export const UserService = {
    async register(regData: IUser) {
        console.log("start axios");
        
        const {data} = await axios.post<IUser, any>('/auth/register', JSON.stringify(regData),
            {
                headers: {
                    "Content-Type": 'application/json'
                }
            }
        ).catch((e:any) => {
            console.log(e.response.data.message)
            return e.response
        })
        console.log("end axios");

        return data
    }

    
}