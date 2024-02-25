import { Varela_Round } from 'next/font/google'

const varela = Varela_Round({ subsets: ["latin"], weight: '400' })

export default function Logo({styleProps} : {styleProps? : string}) {
    return (
        <div className={`flex items-center justify-center p-5 ${styleProps} `}>
            <p className={`text-center text-white  text-4xl ${varela.className}`}>illumed</p>
            <p className={`text-center text-sidebar-active-text-color text-4xl ${varela.className}`}>CRM</p>
        </div>
    )
}
