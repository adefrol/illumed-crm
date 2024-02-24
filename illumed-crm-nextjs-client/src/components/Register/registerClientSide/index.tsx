"use client"

import { IUser } from '@/interfaces/user.interface'
import { RotateCw } from 'lucide-react'
import React, { useState } from 'react'

export const RegisterClient = ({ passData, validateRegister }: { passData: Function, validateRegister: Function }) => {

    const [password, setPassword] = useState("")
    const [acceptedPassword, setAcceptedPassword] = useState(true)

    const [repeat, setRepeat] = useState("")
    const [acceptedRepeat, setAcceptedRepeat] = useState(true)

    const [email, setEmail] = useState("")
    const [acceptedEmail, setAcceptedEmail] = useState(true)

    const [name, setName] = useState("")
    const [username, setUsername] = useState("")

    const [isLoading, setIsLoading] = useState(false)

    const [result, setResult] = useState()

    const regData: IUser = {
        email: email,
        password: password,
        name: name,
        username: username,
    }

    function validateEmail(email: string) {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        return emailRegex.test(email)
    }

    function validatePassword(password: string) {
        if (password.length >= 8) {
            return true
        }
        return false
    }

    function validateRepeat(repeat: string, password: string) {
        if (repeat == password) {
            return true
        }
        return false
    }

    async function accept() {
        if (!validateEmail(email)) {
            setAcceptedEmail(false)
        }
        else {
            setAcceptedEmail(true)
        }
        if (!validatePassword(password)) {
            setAcceptedPassword(false)
        }
        else {
            setAcceptedPassword(true)
        }
        if (!validateRepeat(repeat, password)) {
            setAcceptedRepeat(false)
        }
        else {
            setAcceptedRepeat(true)
        }
        setIsLoading(true)
        await pass()
        setIsLoading(false)

    }

    async function pass() {
        if (validateEmail(email) && validatePassword(password) && validateRepeat(repeat, password)) {
            const data = await passData(regData)
            setResult(data)
            console.log(data);
            if(data.statusCode == 200) {
                validateRegister()
            }
            if(data.statusCode == 409) {
                console.log("conflict");
            }
        }
    }



    return (
        <>
            <div className="w-full flex flex-col items-center justify-center">
                <h1 className='font-extrabold text-4xl text-priority py-4'>Регистрация</h1>
                <p className='text-sidebar-text-color text-center w-[85%] py-2 font-bold'>Уже зарегистированы? <span className='text-sidebar-active-text-color underline cursor-pointer'>Войти</span></p>
                {result == "Пользователь с таким e-mail или логином уже существует" ? <div className='text-red-500 text-center'>Аккаунт с таким логином или e-mail уже существует</div> : <></>}

                <div className="m-4 w-[85%]">
                    <input type="text" onChange={(e) => setName(e.target.value)} className='outline-none w-full p-6  font-bold bg-sidebar-color rounded-3xl text-sidebar-text-color' placeholder='ФИО *' />

                </div>
                <div className="m-4 w-[85%]">
                    <input type="text" onChange={(e) => setUsername(e.target.value)} className='outline-none  p-6 w-full  font-bold bg-sidebar-color rounded-3xl text-sidebar-text-color' placeholder='Логин *' />
                </div>
                <div className="m-4 w-[85%]">
                    <input type="email" onChange={(e) => setEmail(e.target.value)} className={`outline-none ${acceptedEmail ? "" : "border-red-500 border-solid border-2"} w-full p-6  font-bold bg-sidebar-color rounded-3xl text-sidebar-text-color`} placeholder='E-mail *' />
                    {acceptedEmail ? <></> : <div className='text-red-500 text-center'>E-mail не соответствует формату</div>}
                </div>
                <div className="m-4 w-[85%]">
                    <input type="password" onChange={(e) => setPassword(e.target.value)} className={`outline-none ${acceptedPassword ? "" : "border-red-500 border-solid border-2"} w-full p-6  font-bold bg-sidebar-color rounded-3xl text-sidebar-text-color`} placeholder='Пароль *' />
                    {acceptedPassword ? <></> : <div className='text-red-500 text-center'>Пароль должен содержать минимум 8 символов</div>}
                </div>
                <div className="m-4 w-[85%]">
                    <input type="password" onChange={(e) => setRepeat(e.target.value)} className={`outline-none ${acceptedRepeat ? "" : "border-red-500 border-solid border-2"} w-full p-6  font-bold bg-sidebar-color rounded-3xl text-sidebar-text-color`} placeholder='Повтор пароля *' />
                    {acceptedRepeat ? <></> : <div className='text-red-500 text-center'>Пароли не совпадают</div>}

                </div>
                <p className='text-sidebar-text-color text-center w-[85%] font-bold'>Нажимая зарегистрироваться, вы принимаете <span className='text-sidebar-active-text-color underline'>пользовательское соглашение</span></p>
                <div onClick={async () => accept()} className='cursor-pointer text-sidebar-color bg-sidebar-active-text-color rounded-3xl mt-10 font-extrabold p-4'>Зарегистрироваться</div>
                <button onClick={() => console.log(result)}>123</button>
                {isLoading ? <RotateCw className='animate-spin text-sidebar-active-text-color absolute' width={100} height={100} /> : <></>}
            </div>
        </>
    )
}
