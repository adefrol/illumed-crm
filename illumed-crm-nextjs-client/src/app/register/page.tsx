import { Register } from '@/components/Register'
import { ValidateService } from '@/services/validate.service'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

/* const cookieStore = cookies()
function validateRegister() {
    if (cookieStore.get("register")) {
        return true
    }
    return false
} */

export default async function RegisterPage() {

    const validate = await ValidateService.validateToken()

    if(validate) {
        redirect("/funnel")
    }

    return (
        <div className='flex items-center justify-center min-h-svh h-full w-full'>
            <Register />
        </div>
    )
}