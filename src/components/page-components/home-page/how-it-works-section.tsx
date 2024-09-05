import { Calendar, Car, MapPin } from 'lucide-react'
import React from 'react'
import { SlArrowRight } from "react-icons/sl";

type Props = {}

export default function HowItWorksSection({ }: Props) {
    return (
        <section className='container mx-auto'>
            <header className='bg-white relative z-10 w-fit mx-auto'>
                <h2 className='section-title text-center'>How It <span className='text-primary'>Works</span></h2>
                <p className='text-center text-muted-foreground'>No efforts, no hassles, rent your dream car with Zenith Super Car Rental</p>
            </header>

            <section>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 relative">
                    <div
                        className="absolute top-[20%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[70%] h-80 border-gray-500 hidden md:block"
                        style={{
                            border: "double 2px transparent",
                            borderRadius: "50%",
                            backgroundImage: "linear-gradient(white, white), linear-gradient(to top, #777, transparent)",
                            backgroundOrigin: "border-box",
                            backgroundClip: "content-box, border-box",
                        }}
                    >
                        {/* ARROW 1 */}
                        <div className='absolute lg:top-[91.4%] top-[91.7%n] left-[22%] rotate-[18deg] transform -translate-x-1/2 -translate-y-1/2 text-[#777]'>
                            <SlArrowRight />
                        </div>
                        {/* ARROW 2 */}
                        <div className='absolute lg:top-[89.5%] top-[91%] right-[18%] rotate-[-12deg] transform -translate-x-1/2 -translate-y-1/2 text-[#777]'>
                            <SlArrowRight />
                        </div>
                    </div>
                    <div className="flex flex-col items-center text-center z-10">
                        <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-4 shadow-lg">
                            <MapPin className="w-8 h-8" />
                        </div>
                        <section className='bg-white'>
                            <h3 className="sm:text-xl text-lg text-gray-800 font-semibold mb-2">Select Your Location</h3>
                            <p className="text-sm text-muted-foreground">
                                Choose from our premium locations for the ultimate super car rental experience with Zenith
                            </p>
                        </section>
                    </div>
                    <div className="flex flex-col items-center text-center z-10 md:mt-28">
                        <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-4 shadow-lg">
                            <Calendar className="w-8 h-8" />
                        </div>
                        <section className='bg-white'>
                            <h3 className="sm:text-xl text-lg text-gray-800 font-semibold mb-2">Set Your Date</h3>
                            <p className="text-sm text-muted-foreground">
                                Pick your ideal dates for an unforgettable journey with Zenith Super Car&apos;s flexible scheduling
                            </p>
                        </section>
                    </div>
                    <div className="flex flex-col items-center text-center z-10">
                        <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-4 shadow-lg">
                            <Car className="w-8 h-8" />
                        </div>
                        <section className='bg-white'>
                            <h3 className="sm:text-xl text-lg text-gray-800 font-semibold mb-2">Reserve Your Supercar</h3>
                            <p className="text-sm text-muted-foreground">
                                Secure your dream supercar with our seamless online booking system. Your adventure begins here
                            </p>
                        </section>
                    </div>
                </div>
            </section>

        </section>
    )
}