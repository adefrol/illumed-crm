"use client"
import { IDeal } from '@/interfaces/deal.intefrace'

export const DeleteDeal = ({ data, deleteDeal }: { data: IDeal, deleteDeal: Function }) => {

    async function deleteDealLoad() {
        await deleteDeal()
    }

    return (
        <>
            <div onClick={() => deleteDealLoad()} className={` cursor-pointer transition-all hover:scale-105 active:scale-95  p-4 bg-${data.funnel.color} w-[35%] text-center rounded-xl font-bold my-10`}>Удалить сделку</div>
        </>
    )
}