'use client'
import { usePathname } from 'next/navigation'
import { MenuItem } from '../MenuItem'
import { navLinkType } from '../MenuItem/menuitem.type'
import Logo from '../Logo'
import { cookies } from 'next/headers'
import { ReadonlyRequestCookies } from 'next/dist/server/web/spec-extension/adapters/request-cookies'


const navLinks: navLinkType[] = [
    { id: 1, name: 'Рабочий стол', path: '/', iconName: 'LayoutGrid' },
    { id: 2, name: 'Сделки', path: '/funnel', iconName: 'DollarSign' },
    { id: 3, name: 'Аналитика', path: '/analytics', iconName: 'LineChart' },
    { id: 4, name: 'Задачи', path: '/tasks', iconName: 'ListTodo' },
    { id: 5, name: 'Почта', path: '/mail', iconName: 'Mail' },
    { id: 6, name: 'Настройки', path: '/settings', iconName: 'Settings' }
]

export const SideBar = ({exit} : {exit : Function}) => {

    const pathName = usePathname()
    const isActive = (path: string) => path === pathName

    async function reload() {
        await exit()
        window.location.reload()
    }

    return (
        <aside className='fixed flex flex-col bg-sidebar-color w-[325px] h-full p-11'>
            <Logo />
            {navLinks.map(link => <MenuItem key={link.id} path={link.path} isActive={isActive(link.path)} iconName={link.iconName} name={link.name} />)}
            <div onClick={async() => await reload()} className='cursor-pointer transition-all hover:scale-105 active:scale-95 bg-sidebar-block-color text-center rounded-2xl p-4 w-[220px] flex items-center justify-center  my-4  text-sidebar-active-text-color }'>
                <p className='font-bold text-xl'>Выйти</p>
            </div>
        </aside>
    )
}