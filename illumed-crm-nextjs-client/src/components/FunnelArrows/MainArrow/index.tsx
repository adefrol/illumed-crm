import React from 'react'

export const MainArrow = ({width, height, className} : {width?: string, height?: string, className: string}) => {
    return (
        <svg  className={className} viewBox="0 0 368 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0H332.5L368 28L332.5 56H0L36 28L0 0Z" fill="currentColor" />
        </svg>
    )
}
