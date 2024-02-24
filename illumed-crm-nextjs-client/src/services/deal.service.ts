
import { IDeal } from '@/interfaces/deal.intefrace'
import axios from 'axios'

const API_URL = 'http://localhost:3001'

const TEMP_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInVzZXJuYW1lIjoibWFyaWEiLCJpYXQiOjE3MDg2OTQ3NTEsImV4cCI6MTcwOTI5OTU1MX0.mm7BnCawEHSR-XGdXrpPJZGUcquWq1t0kWjvMnq-RJc"

axios.defaults.baseURL = API_URL

export const DealService = {
    async getById(id: string) {
        const { data } = await axios.get<IDeal>(`/deal/${id}`, {
            headers: {
                'Authorization': `Bearer ${TEMP_TOKEN}`
            }
        })
        return data
    }
}