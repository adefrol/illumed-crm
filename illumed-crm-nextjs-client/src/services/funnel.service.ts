import { IFunnel } from '@/interfaces/funnel.interface'
import axios, { AxiosHeaders } from 'axios'

const API_URL = 'http://localhost:3001'

const TEMP_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInVzZXJuYW1lIjoibWFyaWEiLCJpYXQiOjE3MDg2OTQ3NTEsImV4cCI6MTcwOTI5OTU1MX0.mm7BnCawEHSR-XGdXrpPJZGUcquWq1t0kWjvMnq-RJc"

axios.defaults.baseURL = API_URL

export const FunnelService = {
    async getAll() {
        const { data } = await axios.get<IFunnel[]>('/purchase-funnel', {
            headers: {
                'Authorization': `Bearer ${TEMP_TOKEN}`
            }
        })
        return data
    }
}