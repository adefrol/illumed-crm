import { IContact } from './contact.interface'
import { IFunnel } from './funnel.interface'

export interface IDeal {
    id: number
    name: string
    deal_cost: number
    funnel: IFunnel
    contact: IContact[]
    created_at: string
    updated_at: string
}

export interface IDealCreate {
    name: string
    deal_cost: number
    funnel: IFunnel
}