'use client'

import * as React from "react";
import { useRef } from "react";
import { motion, useCycle, Variants } from "framer-motion";
import { useDimensions } from "@/hooks/useDimensions";
import { MenuToggle } from "./menu-toggle";
import './hamburger.css'
import { usePathname } from "next/navigation";
import { Navigation } from "./sidebar-nav-links";

const sidebar: Variants = {
    open: (width = 1000) => ({
        clipPath: `circle(${width * 2 + 200}px at calc(100% - 40px) 40px)`,
        transition: {
            type: "spring",
            stiffness: 20,
            restDelta: 2
        }
    }),
    closed: {
        clipPath: "circle(30px at calc(100% - 40px) 40px)",
        transition: {
            delay: 0.5,
            type: "spring",
            stiffness: 400,
            damping: 40
        }
    }
};

export const Sidebar = () => {
    const [isOpen, toggleOpen] = useCycle(false, true);
    const containerRef = useRef(null);
    const { height } = useDimensions(containerRef);
    const pathname = usePathname()
    const [scrolled, setScrolled] = React.useState(false);

    React.useEffect(() => {
        if (isOpen) toggleOpen();
    }, [pathname])

    React.useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }
    }, [isOpen])

    React.useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 80;
            setScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`relative ${scrolled ? 'opacity-100 pointer-events-auto' : 'lg:opacity-0 lg:pointer-events-none opacity-100 pointer-events-auto'}  transition-all`}>
            <motion.aside
                initial={false}
                animate={isOpen ? "open" : "closed"}
                custom={height}
                ref={containerRef}
                id="sidebar"
                className={`container sm:!w-[640px] !w-full ${!isOpen && 'pointer-events-none'}`}
            >
                <motion.div className="background z-50" variants={sidebar} />
                <Navigation toggleOpen={toggleOpen} />
                <MenuToggle toggle={toggleOpen} />
            </motion.aside>
        </div>
    );
};
