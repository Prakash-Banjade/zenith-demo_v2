import React from 'react'
import BlueLogo from "@/../public/assets/logo/blue-logo.png";
import WhiteLogo from "@/../public/assets/logo/white-logo.png";
import Image from 'next/image';
import Link from 'next/link';
import DesktopNavLinks from './desktop-nav-links';
import { TooltipWrapper } from '../ui/tooltip';
import { SearchIcon } from 'lucide-react';
import { Button } from '../ui/button';
import { Sidebar } from './sidebar/sidebar';

type Props = {}

export default function DesktopNav({ }: Props) {
    return (
        <nav className=''>
            <section className='container mx-auto py-5 flex justify-between items-center'>
                <Link href={"/"}>
                    <Image
                        src={true ? BlueLogo : WhiteLogo}
                        height={150}
                        width={350}
                        alt="Logo"
                        className="max-h-12 w-auto"
                    />
                </Link>

                <DesktopNavLinks />

                <section className='flex gap-5 items-center'>
                    <TooltipWrapper label="Search">
                        <Button className='!size-11 rounded-full' variant={"outline"} size={'icon'}>
                            <SearchIcon size={16} />
                        </Button>
                    </TooltipWrapper>

                    {/* <ThemeToggleBtn /> */}
                    <Sidebar />
                </section>
            </section>
        </nav>
    )
}