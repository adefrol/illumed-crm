import { IFunnel } from '@/interfaces/funnel.interface'
import axios, { AxiosHeaders } from 'axios'
import { UserService } from './user.service'

const API_URL = 'https://illumed-crm-backend.onrender.com'

axios.defaults.baseURL = API_URL

export const FunnelService = {
    async getAll() {
        const { data } = await axios.get<IFunnel[]>('/purchase-funnel', {
            headers: {
                'Authorization': `Bearer ${await UserService.getToken()}`,
            },
            
        })
        return data
    },
    async getByKeyword(keyword : string) {
        const { data } = await axios.get<IFunnel[]>(`/purchase-funnel/query?=${keyword}`, {
            headers: {
                'Authorization': `Bearer ${await UserService.getToken()}`,
            },
            
        })
        return data
    },
}