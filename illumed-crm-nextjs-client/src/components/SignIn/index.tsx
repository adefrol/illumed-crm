import { IUser } from '@/interfaces/user.interface'
import { UserService } from '@/services/user.service'
import React from 'react'
import { SignInClientSide } from './SignInClientSide'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import Logo from '../Logo'

const signIn = async (regData: IUser) => {
    "use server"
    const data = await UserService.signIn(regData)
    console.log(data)
    return data
}

const setToken = async (access_token: string) => {
    "use server"
    const cookieStore = cookies()
    cookieStore.set("token", access_token)
    redirect("/funnel")
}



export const SignIn = () => {
    return (
        <div className='flex flex-col'>
            <Logo styleProps='p-16' />
            <div className='flex items-center justify-center w-[550px] h-[550px] bg-main-side rounded-[40px]'>
                <SignInClientSide passData={signIn} setToken={setToken} />
            </div>
        </div>
    )
}
