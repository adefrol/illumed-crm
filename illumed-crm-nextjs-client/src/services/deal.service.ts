
import { IDeal, IDealCreate } from '@/interfaces/deal.intefrace'
import axios from 'axios'
import { UserService } from './user.service'

const API_URL = 'http://localhost:3001'

const TEMP_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInVzZXJuYW1lIjoibWFyaWEiLCJpYXQiOjE3MDg2OTQ3NTEsImV4cCI6MTcwOTI5OTU1MX0.mm7BnCawEHSR-XGdXrpPJZGUcquWq1t0kWjvMnq-RJc"


export const DealService = {
    async getById(id: string) {
        const { data } = await axios.get<IDeal>(`${API_URL}/deal/${id}`, {
            headers: {
                'Authorization': `Bearer ${await UserService.getToken()}`
            }
        })
        return data
    },
    async create(dealData: IDealCreate) {
        const { data } = await axios.post<IDealCreate, any>(`${API_URL}/deal/`, JSON.stringify(dealData),
            {
                headers: {
                    "Content-Type": 'application/json',
                    'Authorization': `Bearer ${await UserService.getToken()}`
                }
            }
        ).catch((e: any) => {
            console.log(e.response.data.message)
            return e.response
        })
        return data
    },

    async delete(id: string) {
        const { data } = await axios.delete<IDeal>(`${API_URL}/deal/${id}`, {
            headers: {
                'Authorization': `Bearer ${await UserService.getToken()}`
            }
        })
        return data
    },
}