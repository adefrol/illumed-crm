import React from 'react'

export const StartArrow = ({width, height, className} : {width?: string, height?: string, className: string}) => {
    return (
        <svg  className={className} viewBox="0 0 349 71" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 28C0 12.536 12.536 0 28 0H315.333L349 28L315.333 56H28C12.536 56 0 43.464 0 28V28Z" fill="currentColor" />
        </svg>
    )
}
