import Button from '@/components/Button'
import { Register } from '@/components/Register'
import { SignIn } from '@/components/SignIn'
import { UserService } from '@/services/user.service'
import { ValidateService } from '@/services/validate.service'
import { cookies } from 'next/headers'
import Image from "next/image"
import { redirect } from 'next/navigation'


export default async function Home() {


  const validate = await ValidateService.validateToken()

  if (!validate) {
    redirect("/login")
  }
  

  return (
    <div className='font-bold flex items-center justify-center h-full min-h-svh text-sidebar-active-text-color text-3xl'>Страница дешборда</div>
  )
}
