import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import BlueLogo from "@/../public/assets/logo/blue-logo.png";
import Image from "next/image";
import { FaBehance, FaFacebook, FaInstagram, FaLinkedin, FaPinterest, FaTwitter } from "react-icons/fa";

export function FooterSocialIcons() {
    const links = [
        {
            title: "Facebook",
            icon: (
                <FaFacebook size={24} />
            ),
            href: "#",
        },

        {
            title: "Instagram",
            icon: (
                <FaInstagram size={24} />
            ),
            href: "#",
        },
        {
            title: "Behance",
            icon: (
                <FaBehance size={24} />
            ),
            href: "#",
        },
        {
            title: "Zenith Super Cars",
            icon: (
                <Image
                    src={BlueLogo}
                    width={20}
                    height={20}
                    alt="Zenith Logo"
                />
            ),
            href: "#",
        },
        {
            title: "Twitter",
            icon: (
                <FaTwitter size={24} />
            ),
            href: "#",
        },

        {
            title: "LinkedIn",
            icon: (
                <FaLinkedin size={24} />
            ),
            href: "#",
        },
        {
            title: "Pinterest",
            icon: (
                <FaPinterest size={24} />
            ),
            href: "#",
        },
    ];
    return (
        <div className="sm:flex hidden items-center justify-center w-full">
            <FloatingDock
                items={links}
            />
        </div>
    );
}
