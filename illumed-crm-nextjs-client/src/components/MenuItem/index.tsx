import Link from 'next/link'
import { icons } from 'lucide-react'
import { FC } from 'react'
import { navLinkType } from './menuitem.type'

export const MenuItem:FC<navLinkType> = ({path, isActive, name, iconName} : navLinkType) => {

    const Icon = icons[iconName]

    return (
        <Link href={path} className=' '>
            <div className={`rounded-2xl p-4 w-[90%] flex items-center  my-4 mx-auto ${isActive ? 'text-sidebar-active-text-color bg-sidebar-block-color' : 'text-sidebar-text-color'}`}>
                <Icon width={33} height={33} />
                <p className='ml-5 font-bold'>{name}</p>
            </div>
        </Link>
    )
}