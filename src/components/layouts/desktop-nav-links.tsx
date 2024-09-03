"use client"

import { useRoutes } from '@/hooks/useRoute'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'

type Props = {}

export default function DesktopNavLinks({ }: Props) {
    const routes = useRoutes()

    return (
        <ul className='flex gap-12 items-center'>
            {
                routes.map((route, index) => (
                    <li
                        key={index}
                    >
                        <Link
                            href={route.link}
                            className={cn(
                                "relative group text-lg font-medium text-muted-foreground transition-all px-2",
                                route.active && "text-secondary"
                            )}
                        >
                            <span className={`absolute -bottom-2 left-0 w-0 h-[2px] bg-muted-foreground ${route.active ? "w-full !bg-secondary" : "group-hover:w-full"} transition-all duration-300`}></span>
                            {route.label}
                        </Link>
                    </li>
                ))
            }
        </ul>
    )
}