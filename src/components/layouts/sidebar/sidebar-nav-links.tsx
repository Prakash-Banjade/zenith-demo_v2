'use client'

import * as React from "react";
import { Cycle, motion, Variants } from "framer-motion";
// import { social_links } from "@/lib/data/social_links_data";
import { MenuItem } from "./menu-item";
import { useRoutes } from "@/hooks/useRoute";
import Image from "next/image";
import Link from "next/link";
import WhiteLogo from "@/../public/assets/logo/white-logo.png";

const variants: Variants = {
    open: {
        transition: { staggerChildren: 0.07, delayChildren: 0.2 },
        pointerEvents: "auto",
    },
    closed: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 },
        pointerEvents: "none"
    }
};

export const variants2: Variants = {
    open: {
        y: 0,
        opacity: 1,
        pointerEvents: "auto",
        transition: {
            y: { stiffness: 1000, velocity: -100 },
            delay: 0.3,
        }
    },
    closed: {
        y: 50,
        opacity: 0,
        pointerEvents: "none",
        transition: {
            y: { stiffness: 1000 }
        },
    },
};

export const Navigation = ({ toggleOpen }: { toggleOpen: Cycle }) => {
    const routes = useRoutes()

    return (
        <div className="flex flex-col h-full relative z-50 xl:px-20 sm:px-12 px-8 py-12 pt-20">
            <motion.section
                variants={variants2}
                transition={{ delay: 0.5 }}
                className='mb-12'
            >
                <Link href={"/"}>
                    <Image
                        src={WhiteLogo}
                        height={150}
                        width={350}
                        alt="Logo"
                        className="max-h-12 w-auto"
                    />
                </Link>
            </motion.section>

            <motion.section
                variants={variants2}
                transition={{ delay: 0.5 }}
                className='pb-3 border-b border-gray-400'
            >
                <p className='text-sm font-briem text-gray-400 uppercase italic'>Navigation</p>
            </motion.section>
            <motion.ul variants={variants} className="text-secondary flex flex-col !w-full mt-[10%]">
                {routes.map((route) => (
                    <MenuItem toggleOpen={toggleOpen} route={route} key={route.label} />
                ))}
            </motion.ul>
            <div className="mt-auto">
                {/* <motion.section
                    variants={variants2}
                    className='pb-5 border-b border-muted-foreground mb-12'
                >
                    <p className='text-sm font-briem text-muted-foreground uppercase italic'>socials</p>
                </motion.section> */}
                {/* <motion.section variants={variants2} className="flex gap-5 mb-10 relative">
                    {
                        social_links.map((link) => (
                            <motion.a
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                key={link.name}
                                href={link.link}
                                className='font-briem text-xl hover:text-primary transition-all text-white'
                                aria-label={link.ariaLabel}
                            >
                                <link.icon width={24} height={24} />
                            </motion.a>
                        ))
                    }
                </motion.section> */}
                <motion.section
                    variants={variants2}
                    transition={{ delay: 0.5 }}
                    className='text-sm self-start font-briem text-white'
                >
                    &copy; Made by Tradvise
                </motion.section>
            </div>
        </div>
    );
}