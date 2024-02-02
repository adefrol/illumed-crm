import { MenuItem } from '../MenuItem'

export const SideBar = () => {
    return (
        <aside className='bg-slate-300 w-[20%] h-full p-11'>
            <div className='w-[80%] mx-auto'>
                <MenuItem/>
            </div>
        </aside>
    )
}