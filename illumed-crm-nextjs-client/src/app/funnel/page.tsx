import { DealCard } from '@/components/DealCard'
import { IDeal, IDealCreate } from '@/interfaces/deal.intefrace'
import { IFunnel } from '@/interfaces/funnel.interface'
import { FunnelService } from '@/services/funnel.service'
import { ValidateService } from '@/services/validate.service'
import { redirect } from 'next/navigation'
import Loading from './[id]/loading'
import { Suspense } from 'react'
import { MenuItem } from '@/components/MenuItem'
import { Plus, Settings } from 'lucide-react'
import { SearchInput } from '@/components/SearchInput'
import { MainArrow } from '@/components/FunnelArrows/MainArrow'
import { StartArrow } from '@/components/FunnelArrows/StartArrow'
import CreateDeal from '@/components/CreateDeal'
import { DealService } from '@/services/deal.service'

const Funnel = async () => {

    const validate = await ValidateService.validateToken()
    if (!validate) {
        redirect('/login')
    }

    const data = (await FunnelService.getAll()).sort((a: IFunnel, b: IFunnel) => {
        return a.pos - b.pos
    })

    const search = async (keyword: string) => {
        "use server"
    }

    console.log(data[0].deals[0])


    function sumOfColumn(deals: IDeal[] | []) {
        const sum = deals.reduce((accumulator, object) => {
            return accumulator + object.deal_cost
        }, 0)
        return sum + " р."
    }


    async function create(dealData : IDealCreate) {
        "use server"
        return await DealService.create(dealData)
    }

    return (
        <Suspense fallback={<Loading />}>
            <div className="text-peach text-violet-main text-orange-main w-0 h-0"></div>
            <div className="h-[130px] bg-main-side flex justify-around items-center px-10">
                <h1 className='text-sidebar-active-text-color font-black text-4xl'>Сделки</h1>
                <SearchInput search={search} />
                <div className='transition-all hover:scale-105 active:scale-95 bg-sidebar-color rounded-2xl p-4 w-[220px] flex items-center justify-center  my-4  text-sidebar-active-text-color }'>
                    <Settings width={33} height={33} />
                    <p className='ml-5 font-bold text-xl'>Настройки</p>
                </div>
                <CreateDeal create={create} />

            </div>
            <div className="flex p-16">
                {data.map(funnel => (
                    <div key={funnel.funnel_id} className="grid grid-cols-1 gap-5 w-[22%] content-start">
                        <div className="relative flex items-center justify-center">
                            <p className='absolute flex items-center justify-center text-main-primary-color font-semibold text-xl '>{funnel.name} ({funnel.deals.length})</p>
                            <MainArrow className={`" w-full ${'text-' + funnel.color} "`} />
                        </div>
                        <p className={`text-${funnel.color} font-black text-4xl text-center`}>{sumOfColumn(funnel.deals)}</p>
                        {funnel.deals?.map(deal => <DealCard cost={deal.deal_cost + " р."} date={deal.created_at.slice(0, 10)} id={deal.id} name={deal.contact[0]?.name} task='Нет задач' title={deal.name} key={deal.id} />)}
                    </div>
                ))}
            </div>
        </Suspense>
    )
}

export default Funnel