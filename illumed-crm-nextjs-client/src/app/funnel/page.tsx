import { DealCard } from '@/components/DealCard'
import { IDeal } from '@/interfaces/deal.intefrace'
import { FunnelService } from '@/services/funnel.service'

const Funnel = async () => {
    const data = await FunnelService.getAll()

    function sumOfColumn(deals: IDeal[] | []) {
        const sum = deals.reduce((accumulator, object) => {
            return accumulator + object.deal_cost;
        }, 0);
        return sum + " р."
    }

    return (
        <>
            <div className="flex justify-around">
                <div className="grid grid-cols-1 gap-5 w-[22%] content-start">
                    <div className="bg-sidebar-active-text-color h-[50px]">123</div>
                    <p className='text-sidebar-active-text-color font-black text-4xl text-center '>123 000 р.</p>
                    <DealCard id={1} cost={"125 000 р."} date='27.01.2004' name='Алексей' task='Нет задач' title='Товар 1' key={1} />
                </div>
                
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