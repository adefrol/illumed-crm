import { IDeal } from './deal.intefrace'

export interface IFunnel {
    funnel_id : number
    name : string
    color: string
    pos: number
    deals: IDeal[] | []
}

export interface IFunnelData {
    funnel : IFunnel[]
}