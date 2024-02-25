import { SignIn } from '@/components/SignIn'
import { UserService } from '@/services/user.service'
import { ValidateService } from '@/services/validate.service'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'



export default async function LoginPage() {

    const validate = await ValidateService.validateToken()

/*     if (validate) {
        redirect("/funnel")
    } */


    

    return (
        <div className='flex items-center justify-center min-h-svh h-full w-full'>
            <SignIn/>
        </div>
    )
}
