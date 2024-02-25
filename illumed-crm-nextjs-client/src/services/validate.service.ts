import { cookies } from 'next/headers'

export const ValidateService = {
    async validateToken() {
        const cookieStore = cookies()
        if (cookieStore.get("token")) {
            return true
        }
        else {
            return false
        }
    },
    async validateRegister() {
        const cookieStore = cookies()
        if (cookieStore.get("register")) {
            return true
        }
        else {
            return false
        }
    },

}