"use client"
import { IUser } from '@/interfaces/user.interface'
import { RotateCw } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'

export const SignInClientSide = ({ passData, setToken }: { passData: Function, setToken: Function }) => {

    const [password, setPassword] = useState("")
    const [username, setUsername] = useState("")

    const [isLoading, setIsLoading] = useState(false)

    const [result, setResult] = useState({
        status: "",
        error: false
    })

    const regData: IUser = {
        password: password,
        username: username,
    }

    async function accept() {
        setIsLoading(true)
        const data = await passData(regData)
        console.log(data)
        setIsLoading(false)
        if (data.statusCode == 401) {
            setResult({
                status: "Неправильный логин или пароль",
                error: true
            })
        }
        if (data.statusCode == 200) {
            setToken(data.access_token)
        }


    }
    return (
        <div className="w-full flex flex-col items-center justify-center">
            <h1 className='font-extrabold text-4xl text-priority py-4'>Вход</h1>
            <p className='text-sidebar-text-color text-center w-[85%] py-2 font-bold'>Не имеете аккаунта? <Link href={"/register"}><span className='text-sidebar-active-text-color underline cursor-pointer'>Зарегистрироваться</span></Link></p>
            {!result.error ? <></> : <div className='text-red-500 text-center'>{result.status}</div>}
            <div className="m-4 w-[85%]">
                <input type="text" onChange={(e) => setUsername(e.target.value)} className={`outline-none w-full p-6 ${result.error ? "border-red-500 border-solid border-2" : ""}  font-bold bg-sidebar-color rounded-3xl text-sidebar-text-color`} placeholder='Логин *' />
            </div>
            <div className="m-4 w-[85%]">
                <input type="password" onChange={(e) => setPassword(e.target.value)} className={`outline-none  w-full p-6 ${result.error ? "border-red-500 border-solid border-2" : ""}   font-bold bg-sidebar-color rounded-3xl text-sidebar-text-color`} placeholder='Пароль *' />
                {/* acceptedPassword ? <></> : <div className='text-red-500 text-center'>Пароль должен содержать минимум 8 символов</div> */}
            </div>
            <p className='text-sidebar-text-color text-center w-[85%] font-bold'>Забыли пароль?</p>
            <div onClick={async () => accept()} className='cursor-pointer transition-all hover:scale-105 active:scale-95 text-sidebar-color bg-sidebar-active-text-color rounded-3xl mt-10 font-extrabold p-4 px-10'>Войти</div>
            {isLoading ? <RotateCw className='animate-spin text-sidebar-active-text-color absolute' width={100} height={100} /> : <></>}
        </div>
    )
}
