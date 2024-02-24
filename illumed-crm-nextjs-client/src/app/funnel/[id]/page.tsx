import { DealService } from '@/services/deal.service'
import { CircleUserRound, Mail, Paperclip, Phone, Plus, Send } from 'lucide-react'
import React from 'react'

export default async function Deal({ params }: { params: { id: string } }) {

    const data = await DealService.getById(params.id)

    return (
        <div className="flex">
            <div className='bg-main-side w-[40%] h-svh relative rounded-l-[80px]'>
                <div className="w-[80%] mx-auto">
                    <h1 className="font-extrabold text-5xl py-4 pt-10  text-sidebar-active-text-color">Сделка №{params.id}</h1>
                    <div className="flex items-center">
                        <div className='bg-main-primary-color p-3 py-1 w-fit text-sidebar-text-color text-lg rounded-2xl'>важный клиент</div>
                        <div className='bg-main-primary-color p-3 py-1 mx-2 w-fit text-sidebar-text-color text-lg rounded-2xl'>
                            <div className="flex items-center">
                                <Plus className='mx-1' />
                                <div className="mr-1">
                                    теги
                                </div>
                            </div>
                        </div>


                    </div>
                    <div className="flex">
                        <div className="w-[50%]">
                            <p className='text-sidebar-text-color text-xl font-bold py-2 pt-10'>Ответственный</p>
                            <p className='text-sidebar-text-color text-xl font-bold py-2'>Бюджет</p>
                            <p className='text-sidebar-text-color text-xl font-bold py-2'>Поле 1</p>
                            <p className='text-sidebar-text-color text-xl font-bold py-2'>Поле 2</p>
                            <p className='text-sidebar-text-color text-xl font-bold py-2'>Поле 3</p>
                        </div>
                        <div className="w-[50]">
                            <p className='text-priority text-xl font-bold py-2 pt-10'>Иванов Иван</p>
                            <p className='text-priority text-xl font-bold py-2'>{data.deal_cost} р.</p>
                            <p className='text-priority text-xl font-bold py-2'>2501 шт.</p>
                            <p className='text-priority text-xl font-bold py-2'>Продукт</p>
                            <p className='text-priority text-xl font-bold py-2'>Да</p>
                        </div>
                    </div>
                    <div className="text-sidebar-active-text-color font-bold py-1 pt-10 text-xl">Контакт</div>
                    <div className="flex items-center">
                        <div className="text-sidebar-text-color">
                            <div className="py-2 flex items-center">
                                <CircleUserRound />
                                <p className='text-priority px-4 text-xl font-bold'>Васильев Василий</p>
                            </div>
                            <div className="py-2 flex items-center">
                                <Phone />
                                <p className='text-priority px-4 text-xl font-bold'>+7 924 999 99 99</p>

                            </div>
                            <div className="py-2 flex items-center">
                                <Mail />
                                <p className='text-priority px-4 text-xl font-bold'>vasily@gmail.com</p>

                            </div>
                        </div>
                        <div className="">

                        </div>
                    </div>
                </div>
            </div>
            <div className="w-[60%] h-svh flex flex-col">
                <div className="h-[15%]"></div>
                <div className="h-[75%]"></div>
                <div className="h-[10%] flex items-center">
                    <div className="w-[95%]  rounded-xl relative inset-x-0 bottom-0 bg-main-side h-[65px] mx-auto flex items-center justify-between">
                        <div className="flex items-center w-[90%]">
                            <p className='text-xl text-priority font-bold pl-7 underline w-[20%]'>Для всех:</p>
                            <input type="text" className='outline-none text-sidebar-text-color font-bold text-xl bg-transparent w-[75%] py-5 placeholder:text-sidebar-text-color/35' placeholder='Введите текст...' />
                        </div>
                        <div className="flex items-center text-priority">
                            <div className="p-2">
                                <Paperclip />
                            </div>
                            <div className="p-2 pr-6">
                                <Send />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
