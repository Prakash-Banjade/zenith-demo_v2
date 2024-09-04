import { usePathname } from "next/navigation"

export const useRoutes = () => {
    const pathname = usePathname()

    return [
        {
            label: "Home",
            link: '/',
            active: pathname === "/",
        },
        {
            label: "About",
            link: '/about',
            active: pathname === "/about",
        },
        {
            label: "Models",
            link: '/models',
            active: pathname === "/models",
        },
        {
            label: "Services",
            link: '/services',
            active: pathname === "/services",
        },
        {
            label: "Adventures",
            link: '/',
            active: pathname === "/adventures",
        },
        {
            label: "Contact",
            link: '/',
            active: pathname === "/contact",
        }
    ]
}