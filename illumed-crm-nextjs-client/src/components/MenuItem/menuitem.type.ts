import { icons } from 'lucide-react'

export type navLinkType = {
    id? : number,
    name : string,
    path : string,
    iconName : keyof typeof icons,
    isActive? : boolean
}