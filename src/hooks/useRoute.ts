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
            link: '/',
            active: pathname === "/about",
        },
        {
            label: "Models",
            link: '/',
            active: pathname === "/models",
        },
        {
            label: "Services",
            link: '/',
            active: pathname === "/services",
        },
        {
            label: "Contact",
            link: '/',
            active: pathname === "/contact",
        }
    ]
}