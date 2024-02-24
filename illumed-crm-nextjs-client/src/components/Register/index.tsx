

import { IUser } from '@/interfaces/user.interface'
import { UserService } from '@/services/user.service'
import React from 'react'
import { RegisterClient } from './registerClientSide'
import { cookies } from 'next/headers'

const register = async (regData: IUser) => {
    "use server"
    console.log(regData)
    const data = await UserService.register(regData)
    console.log(data);
    return data
}

const validateRegister = async() => {
    "use server"
    const cookieStore = cookies()
    cookieStore.set("register", "true")
}

export const Register = async () => {

    return (
        <div className='flex items-center justify-center w-[550px] h-[850px] bg-main-side rounded-[40px]'>
            <RegisterClient passData={register} validateRegister={validateRegister} />
        </div>
    )
}
