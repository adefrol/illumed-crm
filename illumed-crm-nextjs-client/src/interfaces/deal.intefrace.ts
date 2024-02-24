import { IFunnel } from './funnel.interface'

export interface IDeal {
    id: number
    name: string
    deal_cost: number
    funnel : IFunnel
    created_at: string
    updated_at: string
}