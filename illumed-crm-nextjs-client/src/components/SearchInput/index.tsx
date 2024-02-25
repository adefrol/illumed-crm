"use client"
import { IFunnel } from '@/interfaces/funnel.interface'
import React, { useEffect, useState } from 'react'

export const SearchInput = ({ search }: { search: Function }) => {

    const [string, setString] = useState("")

    return (
        <div className="flex items-center w-[50%] bg-transparent rounded-3xl border-4 border-sidebar-color">
            <input type="text" onChange={(e) => setString(e.target.value)} className='outline-none text-sidebar-text-color font-bold text-xl bg-transparent w-[75%] ml-4 py-5 placeholder:text-sidebar-text-color/35' placeholder='Поиск...' />
        </div>
    )
}
