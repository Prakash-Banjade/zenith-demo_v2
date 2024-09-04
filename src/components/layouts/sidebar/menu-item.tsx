import * as React from "react";
import { Cycle, motion, Variants } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const menuItemVariants: Variants = {
    open: {
        y: 0,
        opacity: 1,
        pointerEvents: "auto",
        transition: {
            y: { stiffness: 1000, velocity: -100 }
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

export const MenuItem = ({ route, toggleOpen }: {
    route: {
        label: string;
        link: string;
        active: boolean;
    },
    toggleOpen: Cycle,
}) => {

    return (
        <motion.li
            variants={menuItemVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className='group relative w-fit mb-10'
        >
            <Link
                href={route.link}
                className={cn(
                    "transition-all xl:text-4xl text-3xl font-normal text-white",
                    route.active ? "text-secondary font-semibold" : "",
                )}
                onClick={() => toggleOpen()}
            >
                {route.label}
            </Link>
            <span className={`absolute -bottom-1 left-0 w-0 h-[2px] bg-secondary ${route.active ? "w-full" : "group-hover:w-full"} transition-all duration-300`}></span>
        </motion.li>
    );
};
