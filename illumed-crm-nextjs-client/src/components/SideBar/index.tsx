'use client'

import { usePathname } from 'next/navigation'
import { MenuItem } from '../MenuItem'
import { icons } from 'lucide-react'
import { navLinkType } from '../MenuItem/menuitem.type'


const navLinks : navLinkType[] = [
    { id: 1, name: 'Рабочий стол', path: '/', iconName: 'LayoutGrid'},
    { id: 2, name: 'Сделки', path: '/funnel', iconName: 'DollarSign'}
]

export const SideBar = () => {

    const pathName = usePathname();
    const isActive = (path : string) => path === pathName;

    return (
        <aside className='bg-sidebar-color w-[20%] h-full p-11'>
            {navLinks.map(link => <MenuItem key={link.id} path={link.path} isActive={isActive(link.path)} iconName={link.iconName} name={link.name}/>)}
        </aside>
    )
}