import Button from '@/components/Button'
import { Register } from '@/components/Register'
import { cookies } from 'next/headers'
import Image from "next/image";

export default function Home() {


  const cookieStore = cookies()
  function validateRegister () {
    if (cookieStore.get("register")) {
      return true
    }
    return false
  }


  
  console.log(validateRegister());
  

  return (
    <div className='flex items-center justify-center min-h-svh h-full w-full'>  
      {validateRegister() ? <Button/> : <Register/>} 
    </div>
  );
}
