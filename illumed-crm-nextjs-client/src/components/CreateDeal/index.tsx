"use client"
import { useState } from 'react'
import { Plus } from 'lucide-react'

export default function CreateDeal({ create }: { create: Function }) {
    const [showModal, setShowModal] = useState(false)

    const [name, setName] = useState("")
    const [cost, setCost] = useState(1)
    const [funnel, setFunnel] = useState(1)

    const dealData = {
        name: name,
        deal_cost: cost,
        funnel: funnel
    }

    async function createDeal() {

        const data = await create(dealData)
        console.log(data);
        setShowModal(false)
    }

    return (
        <>
            <div className='transition-all hover:scale-105 active:scale-95 bg-sidebar-active-text-color rounded-2xl p-4 w-[250px] flex items-center justify-center  my-4 text-sidebar-color cursor-pointer }' onClick={() => setShowModal(true)}>
                <Plus width={33} height={33} />
                <p className='ml-5 font-bold text-xl'>Новая сделка</p>
            </div>
            {showModal ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-main-side outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between p-5 rounded-t">
                                    <h3 className="text-3xl font-semibold text-center text-sidebar-active-text-color">
                                        Создание сделки
                                    </h3>
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setShowModal(false)}
                                    >
                                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                            ×
                                        </span>
                                    </button>
                                </div>
                                {/*body*/}
                                <div className="relative p-6 flex-auto">
                                    <p className="my-4 text-blueGray-500 text-lg leading-relaxed flex items-center flex-col">
                                        <div className="m-4 w-[500px]">
                                            <input type="text" onChange={(e) => setName(e.target.value)} className={`outline-none w-full p-6  font-bold bg-sidebar-color rounded-3xl text-sidebar-text-color`} placeholder='Наименование' />
                                        </div>
                                        <div className="m-4 w-[500px]">
                                            <input type="text" onChange={(e) => setCost(Number(e.target.value))} className={`outline-none w-full p-6  font-bold bg-sidebar-color rounded-3xl text-sidebar-text-color`} placeholder='Стоимость' />
                                        </div>
                                        <div className="m-4 w-[500px]">
                                            <input type="text" onChange={(e) => setFunnel(Number(e.target.value))} className={`outline-none w-full p-6  font-bold bg-sidebar-color rounded-3xl text-sidebar-text-color`} placeholder='Стадия' />
                                        </div>
                                    </p>
                                </div>
                                {/*footer*/}
                                <div className="flex items-center justify-end p-6 rounded-b">
                                    <button
                                        className="text-sidebar-active-text-color background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Закрыть
                                    </button>
                                    <button
                                        className="bg-sidebar-active-text-color text-sidebar-color transition-all hover:scale-105 active:scale-95 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => createDeal()}
                                    >
                                        Создать
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-80 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    )
}
