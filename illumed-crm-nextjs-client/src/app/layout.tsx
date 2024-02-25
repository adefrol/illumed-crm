import type { Metadata } from "next"
import { Inter, Varela_Round } from "next/font/google"
import "@/styles/globals.css"
import { SideBar } from '@/components/SideBar'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { CookieListItem } from 'next/dist/compiled/@edge-runtime/cookies'
import { ReadonlyRequestCookies } from 'next/dist/server/web/spec-extension/adapters/request-cookies'
import Router, { useRouter } from 'next/navigation'
import { UserService } from '@/services/user.service'

const inter = Inter({ subsets: ["latin"] })


export const metadata: Metadata = {
  title: "illumedCRM",
  description: "A progressive new CRM system",
}

const delay = (ms : number) => new Promise(
  resolve => setTimeout(resolve, ms)
)


async function exit() {
  "use server"
  await UserService.deleteToken()
}


async function validateToken(cookieStore: ReadonlyRequestCookies) {
  if (cookieStore.get("token")) {
    return true
  }
  else {
    return false
  }
}



export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {

  const cookieStore = cookies()
  const validate = await validateToken(cookieStore)



  return (
    <html lang="ru">
      <body className={inter.className + " flex bg-sidebar-color"}>
        {
          validate ? (<><SideBar exit={exit} /><main>{children}</main></>) : (<main className='bg-sidebar-color rounded-none ml-0'>{children}</main>)
        }
      </body>
    </html>
  )
}
