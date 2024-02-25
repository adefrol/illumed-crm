"use client"
import Link from 'next/link'
import React, { MouseEventHandler } from 'react'

export const DealCard = ({ id, name, date, title, cost, task, handleSubmit }: { id: number, name: string, date: string, title: string, cost: string, task: string, handleSubmit?: MouseEventHandler<HTMLDivElement> }) => {

    return (
        <Link href={`/funnel/${id}`} className='w-[85%] mx-auto'>
            <div className="transition-all hover:scale-105 active:scale-95 grid grid-cols-2 bg-sidebar-block-color rounded-3xl h-[100px] px-4 py-2 text-center text-sidebar-text-color" onClick={handleSubmit}>
                <p className='text-start'>{name}</p>
                <p className='text-end'>{date}</p>
                <p className='text-start text-sidebar-active-text-color col-span-2 font-bold'>{title}</p>
                <p className='text-start'>{cost}</p>
                <p className='text-end text-sidebar-active-text-color'>{task}</p>
            </div>
        </Link>
    )
}
