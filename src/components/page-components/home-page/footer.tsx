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
        <footer className="bg-slate-100 text-gray-800 py-8 sm:pt-20">
            <div className="container">
                <div className="xl:flex hidden gap-8 justify-between">
                    <section className='flex gap-8 justify-between'>
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
                                <li><Link href="#" className="hover:underline">New Zenith.com</Link></li>
                                <li><Link href="#" className="hover:underline">Dealer Rater</Link></li>
                            </ul>
                        </div>
                    </section>

                    <div className="max-w-xl flex items-center flex-col">
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

                    <section className='flex gap-8'>
                        <div>
                            <h3 className="font-bold mb-4">For Dealers</h3>
                            <ul className="space-y-2 text-muted-foreground">
                                <li><Link href="#" className="hover:underline">Dealer Login</Link></li>
                                <li><Link href="#" className="hover:underline">Grow With Zenith</Link></li>
                                <li><Link href="#" className="hover:underline">Fuel</Link></li>
                                <li><Link href="#" className="hover:underline">Dealer Inspire</Link></li>
                                <li><Link href="#" className="hover:underline">Dealer rater</Link></li>
                                <li><Link href="#" className="hover:underline">Accu-Trade</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold mb-4">Our Company</h3>
                            <ul className="space-y-2 text-muted-foreground">
                                <li><Link href="#" className="hover:underline">About Zenith</Link></li>
                                <li><Link href="#" className="hover:underline">Contact zenith</Link></li>
                                <li><Link href="#" className="hover:underline">Investor Relations</Link></li>
                                <li><Link href="#" className="hover:underline">Careers</Link></li>
                                <li><Link href="#" className="hover:underline">Licensing & Reprints</Link></li>
                                <li><Link href="#" className="hover:underline">Site Map</Link></li>
                                <li><Link href="#" className="hover:underline">Feedback</Link></li>
                            </ul>
                        </div>
                    </section>
                </div>

                {/* below xl */}
                <div className="flex xl:hidden gap-8 justify-between flex-col items-center">
                    <div className="max-w-xl flex items-center flex-col">
                        <Image
                            src={true ? BlueLogo : WhiteLogo}
                            height={150}
                            width={350}
                            alt="Logo"
                            className="max-h-12 w-auto"
                        />
                        <p className="my-4 text-sm text-muted-foreground text-center">Zenith is one of Known Car Rental Company in dubai. We are Dealing with Luxury Cars, Sports Cars, SUV Cars and Economy Cars for Rent in Dubai. We are also provide chauffeur service.</p>
                        <FooterSocialIcons />
                        <div className="flex sm:hidden space-x-4">
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
                        </div>
                    </div>

                    <section className='flex gap-8 justify-between sm:flex-row flex-col'>
                        <section className='flex gap-8 justify-between'>
                            <div>
                                <h3 className="font-bold mb-4">Buying & Selling</h3>
                                <ul className="sm:space-y-2 space-y-1 text-muted-foreground">
                                    <li><Link href="#" className="hover:underline md:text-base text-sm">Find a Car</Link></li>
                                    <li><Link href="#" className="hover:underline md:text-base text-sm">Find a Dealer</Link></li>
                                    <li><Link href="#" className="hover:underline md:text-base text-sm">Listings by City</Link></li>
                                    <li><Link href="#" className="hover:underline md:text-base text-sm">Certified Pre-Owned</Link></li>
                                    <li><Link href="#" className="hover:underline md:text-base text-sm">Car Payment Calculators</Link></li>
                                    <li><Link href="#" className="hover:underline md:text-base text-sm">Car Reviews & Ratings</Link></li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-bold mb-4">Explore Our Brand</h3>
                                <ul className="sm:space-y-2 space-y-1 text-muted-foreground">
                                    <li><Link href="#" className="hover:underline md:text-base text-sm">New Zenith.com</Link></li>
                                    <li><Link href="#" className="hover:underline md:text-base text-sm">Dealer Rater</Link></li>
                                </ul>
                            </div>
                        </section>



                        <section className='flex gap-8 justify-between'>
                            <div>
                                <h3 className="font-bold mb-4">For Dealers</h3>
                                <ul className="sm:space-y-2 space-y-1 text-muted-foreground">
                                    <li><Link href="#" className="hover:underline md:text-base text-sm">Dealer Login</Link></li>
                                    <li><Link href="#" className="hover:underline md:text-base text-sm">Grow With Zenith</Link></li>
                                    <li><Link href="#" className="hover:underline md:text-base text-sm">Fuel</Link></li>
                                    <li><Link href="#" className="hover:underline md:text-base text-sm">Dealer Inspire</Link></li>
                                    <li><Link href="#" className="hover:underline md:text-base text-sm">Dealer rater</Link></li>
                                    <li><Link href="#" className="hover:underline md:text-base text-sm">Accu-Trade</Link></li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-bold mb-4">Our Company</h3>
                                <ul className="sm:space-y-2 space-y-1 text-muted-foreground">
                                    <li><Link href="#" className="hover:underline md:text-base text-sm">About Zenith</Link></li>
                                    <li><Link href="#" className="hover:underline md:text-base text-sm">Contact zenith</Link></li>
                                    <li><Link href="#" className="hover:underline md:text-base text-sm">Investor Relations</Link></li>
                                    <li><Link href="#" className="hover:underline md:text-base text-sm">Careers</Link></li>
                                    <li><Link href="#" className="hover:underline md:text-base text-sm">Licensing & Reprints</Link></li>
                                    <li><Link href="#" className="hover:underline md:text-base text-sm">Site Map</Link></li>
                                    <li><Link href="#" className="hover:underline md:text-base text-sm">Feedback</Link></li>
                                </ul>
                            </div>
                        </section>
                    </section>
                </div>

                {/* bottom footer */}
                <div className="sm:mt-8 sm:pt-8 mt-4 pt-4 flex flex-col md:flex-row justify-between items-center border-t border-border sm:text-sm text-xs">
                    <div className='flex sm:gap-10 sm:flex-row flex-col'>
                        <p className="mb-4 md:mb-0 text-center sm:text-left">&copy; Copyright Zenith Super Car Rental, All Rights Reserved</p>
                        <div className="flex space-x-4 justify-center">
                            <a href="#" className='hover:underline hover:text-primary'>Privacy Policy</a>
                            <span className='mx-2'>•</span>
                            <a href="#" className='hover:underline hover:text-primary'>Terms of Services</a>
                        </div>
                    </div>

                    <div className='mt-4 sm:mt-0'>
                        <p className='text-secondary'>Made by Tradvise</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}