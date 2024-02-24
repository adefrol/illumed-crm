import { DealCard } from '@/components/DealCard'
import { IDeal } from '@/interfaces/deal.intefrace'
import { IFunnel } from '@/interfaces/funnel.interface'
import { FunnelService } from '@/services/funnel.service'

const Funnel = async () => {
    const data = (await FunnelService.getAll()).sort((a: IFunnel, b: IFunnel) => {
        return a.pos - b.pos
    })

    function sumOfColumn(deals: IDeal[] | []) {
        const sum = deals.reduce((accumulator, object) => {
            return accumulator + object.deal_cost;
        }, 0);
        return sum + " р."
    }

    return (
        <>
            <div className="flex justify-around">
                {data.map(funnel => (
                    <div className="grid grid-cols-1 gap-5 w-[22%] content-start">
                        <div className="bg-sidebar-active-text-color h-[50px]">{funnel.name}</div>
                        <p className='text-sidebar-active-text-color font-black text-4xl text-center'>{sumOfColumn(funnel.deals)}</p>
                        {funnel.deals?.map(deal => <DealCard cost={deal.deal_cost + " р."} date={deal.created_at.slice(0,10)} id={deal.id} name={"alexey"} task='Нет задач' title={deal.name} key={deal.id} />)}
                    </div>
                ))}
            </div>
        </>
    )
}

export default Funnel