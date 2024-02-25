import { RotateCw } from 'lucide-react'

export default function Loading() {
    return (
        <div className="flex items-center justify-center w-full min-h-svh">
            <RotateCw className='animate-spin text-sidebar-active-text-color absolute' width={100} height={100} />
        </div>
    )
}