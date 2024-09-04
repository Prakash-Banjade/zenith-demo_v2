import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import BlueLogo from "@/../public/assets/logo/blue-logo.png";
import WhiteLogo from "@/../public/assets/logo/white-logo.png";
import { FaFacebook, FaInstagram, FaLinkedin, FaPinterest, FaTwitter } from 'react-icons/fa'
import { Button } from '@/components/ui/button';
import { FooterSocialIcons } from './footer-social-icons';

export default function Footer() {
    return (
        <footer className="bg-slate-100 text-gray-800 py-8 sm:pt-20 px-4 md:px-8">
            <div className="container mx-auto">
                <div className="flex gap-8 justify-between">
                    <div>
                        <h3 className="font-bold mb-4">Buying & Selling</h3>
                        <ul className="space-y-2 text-muted-foreground">
                            <li><Link href="#" className="hover:underline">Find a Car</Link></li>
                            <li><Link href="#" className="hover:underline">Find a Dealer</Link></li>
                            <li><Link href="#" className="hover:underline">Listings by City</Link></li>
                            <li><Link href="#" className="hover:underline">Certified Pre-Owned</Link></li>
                            <li><Link href="#" className="hover:underline">Car Payment Calculators</Link></li>
                            <li><Link href="#" className="hover:underline">Car Reviews & Ratings</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold mb-4">Explore Our Brand</h3>
                        <ul className="space-y-2 text-muted-foreground">
                            <li><Link href="#" className="hover:underline">New Haier.com</Link></li>
                            <li><Link href="#" className="hover:underline">Dealer Rater</Link></li>
                        </ul>
                    </div>
                    <div className="col-span-1 md:col-span-2 lg:col-span-1 max-w-xl flex items-center flex-col">
                        <Image
                            src={true ? BlueLogo : WhiteLogo}
                            height={150}
                            width={350}
                            alt="Logo"
                            className="max-h-12 w-auto"
                        />
                        <p className="my-4 text-sm text-muted-foreground text-center">Zenith is one of Known Car Rental Company in dubai. We are Dealing with Luxury Cars, Sports Cars, SUV Cars and Economy Cars for Rent in Dubai. We are also provide chauffeur service.</p>
                        <FooterSocialIcons />
                        {/* <div className="flex space-x-4">
                            <Button asChild={true} variant={"outline"} size={'icon'} className='rounded-full size-12'>
                                <Link href="#" className=""><FaFacebook size={24} /></Link>
                            </Button>
                            <Button asChild={true} variant={"outline"} size={'icon'} className='rounded-full size-12'>
                                <Link href="#" className=""><FaInstagram size={24} /></Link>
                            </Button>
                            <Button asChild={true} variant={"outline"} size={'icon'} className='rounded-full size-12'>
                                <Link href="#" className=""><FaTwitter size={24} /></Link>
                            </Button>
                            <Button asChild={true} variant={"outline"} size={'icon'} className='rounded-full size-12'>
                                <Link href="#" className=""><FaLinkedin size={24} /></Link>
                            </Button>
                            <Button asChild={true} variant={"outline"} size={'icon'} className='rounded-full size-12'>
                                <Link href="#" className=""><FaPinterest size={24} /></Link>
                            </Button>
                        </div> */}
                    </div>
                    <div>
                        <h3 className="font-bold mb-4">For Dealers</h3>
                        <ul className="space-y-2 text-muted-foreground">
                            <li><Link href="#" className="hover:underline">Dealer Login</Link></li>
                            <li><Link href="#" className="hover:underline">Grow With Haier</Link></li>
                            <li><Link href="#" className="hover:underline">Fuel</Link></li>
                            <li><Link href="#" className="hover:underline">Dealer Inspire</Link></li>
                            <li><Link href="#" className="hover:underline">Dealer rater</Link></li>
                            <li><Link href="#" className="hover:underline">Accu-Trade</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold mb-4">Our Company</h3>
                        <ul className="space-y-2 text-muted-foreground">
                            <li><Link href="#" className="hover:underline">About Haier</Link></li>
                            <li><Link href="#" className="hover:underline">Contact haier</Link></li>
                            <li><Link href="#" className="hover:underline">Investor Relations</Link></li>
                            <li><Link href="#" className="hover:underline">Careers</Link></li>
                            <li><Link href="#" className="hover:underline">Licensing & Reprints</Link></li>
                            <li><Link href="#" className="hover:underline">Site Map</Link></li>
                            <li><Link href="#" className="hover:underline">Feedback</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-8 pt-8 flex flex-col md:flex-row justify-between items-center border-t border-border">
                    <p className="mb-4 md:mb-0">&copy; copyright Zenith Super Car Rental, All Rights Reserved</p>
                    <div className="flex space-x-4">
                        <a href="#" className='hover:underline hover:text-primary'>Privacy Policy</a>
                        <span className='mx-2'>•</span>
                        <a href="#" className='hover:underline hover:text-primary'>Terms of Services</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}