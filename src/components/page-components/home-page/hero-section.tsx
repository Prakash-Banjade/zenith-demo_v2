"use client"

import Image from "next/image"
import { ArrowRight, PlayIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import SportCar from "@/../public/assets/icons/Sports-white.svg";
import LuxuryCar from "@/../public/assets/icons/Luxury-black.svg";
import SUV from "@/../public/assets/icons/suv-black.svg";
import Convertible from "@/../public/assets/icons/convertible-black.svg";
import Business from "@/../public/assets/icons/business-black.svg";
import { Separator } from "@/components/ui/separator";
import HeroCar from '@/../public/assets/banners/hero-car.png'
import { motion } from 'framer-motion'
import { TooltipWrapper } from "@/components/ui/tooltip";
import { BsWhatsapp } from "react-icons/bs";

export default function HeroSection() {
    return (
        <div className="sm:min-h-[80vh] relative">
            <div className="container mx-auto px-4 py-8 relative z-10">
                <div className="lg:grid md:grid-cols-2 gap-8 items-center">
                    <div className="lg:block hidden">
                        <div className="flex space-x-6 mb-8">
                            <button className="p-3 bg-[#111] rounded-full border border-border">
                                <Image src={SportCar} alt="Sport" width={50} height={50} />
                            </button>
                            <button className="p-3 bg-white rounded-full border border-border">
                                <Image src={LuxuryCar} alt="Luxury" width={50} height={50} />
                            </button>
                            <button className="p-3 bg-white rounded-full border border-border">
                                <Image src={SUV} alt="SUV" width={50} height={50} />
                            </button>
                            <button className="p-3 bg-white rounded-full border border-border">
                                <Image src={Convertible} alt="Convertible" width={50} height={50} />
                            </button>
                            <button className="p-3 bg-white rounded-full border border-border">
                                <Image src={Business} alt="Business" width={50} height={50} />
                            </button>
                        </div>

                        <div className="mb-8">
                            <div className="flex items-center space-x-2 text-sm text-gray-600 mb-2">
                                <span>SEE+</span>
                                <span>8 PERFORMANCE</span>
                                <ArrowRight className="h-4 w-4" />
                            </div>
                            <div className="text-lg mb-2">AVENTADOR LP 780-4 ULTIMAE</div>
                            <button className="border border-black rounded-full px-4 py-1 text-sm">+ Aventador</button>
                        </div>

                        <section className="p-8 rounded-xl w-fit bg-white/20 backdrop-blur-sm shadow-md">
                            <div className="mb-8">
                                <div className="text-sm text-gray-600 mb-1">Rent Aventador</div>
                                <div className="flex items-center">
                                    <p className="text-5xl font-bold mb-4"><span className="text-gray-900 text-3xl font-semibold">AED</span> 6,999</p>
                                    <p>/day</p>
                                </div>
                            </div>

                            <div className="flex gap-2 justify-between">
                                <TooltipWrapper label="Whatsapp for booking">
                                    <Button variant={'outline'} size="icon" className="rounded-full size-12 text-xl bg-[#25D366] text-white hover:bg-green-500 hover:text-white">
                                        <BsWhatsapp />
                                    </Button>
                                </TooltipWrapper>
                                <TooltipWrapper label="View Details">
                                    <Button variant={'outline'} size="icon" className="rounded-full size-12">
                                        <ArrowRight className="h-6 w-6" />
                                    </Button>
                                </TooltipWrapper>
                            </div>
                        </section>
                    </div>

                    <div>
                        <h1 className="2xl:text-8xl lg:text-6xl sm:text-5xl text-4xl font-extrabold mb-4 text-right text-gray-800 tracking-tighter">Drive the dream in one click</h1>
                        <p className="text-xl mb-6 text-right"><span className="font-semibold text-secondary">Zenith</span> Super Car Rental</p>
                        <p className="mb-2 text-right font-medium text-xl tracking-tighter">The most trusted rental car company in Dubai</p>
                        <p className="mb-6 text-right">
                            2023 for comprehensive cover-up 22 % a year earlier
                            <br />
                            90@ 2022 abd the highest since the abi started
                            collecting this data (2024)
                        </p>
                        <div className="flex space-x-4 justify-end">
                            <button className="bg-black text-white px-6 py-3 rounded-full flex items-center">
                                Explore Now <ArrowRight className="ml-2 h-5 w-5" />
                            </button>
                            <Button variant={'outline'} className="!px-6 !py-6 rounded-full text-base">
                                Watch Video <PlayIcon size={18} className="ml-2" />
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="sm:h-[300px] h-[200px]"></div>

                <div className="grid sm:grid-cols-3 gap-8 mt-16">
                    <div className="flex sm:mr-5">
                        <section>
                            <h2 className="lg:text-6xl md:text-4xl sm:text-3xl text-2xl font-bold mb-4 text-gray-900">7+ Years</h2>
                            <p className="text-muted-foreground">In the rental market, premium cars redefine luxury travel experiences</p>
                        </section>
                        <Separator orientation="vertical" className="ml-5 sm:block hidden" />
                    </div>
                    <div className="flex sm:mr-5">
                        <section>
                            <h2 className="lg:text-6xl md:text-4xl sm:text-3xl text-2xl font-bold mb-4 text-gray-900">111+ Cars</h2>
                            <p className="text-muted-foreground">Premium cars redefine luxury travel with unmatched style and sophistication</p>
                        </section>
                        <Separator orientation="vertical" className="ml-5 sm:block hidden" />
                    </div>
                    <div>
                        <h2 className="lg:text-6xl md:text-4xl sm:text-3xl text-2xl font-bold mb-4 text-gray-900">846+ Clients</h2>
                        <p className="text-muted-foreground">Our clients have trusted us with their luxury car needs</p>
                    </div>
                </div>
            </div>
            <section
                className="absolute lg:top-[55%] top-[40%] lg:left-[40%] left-[50%] -translate-x-1/2 -translate-y-[40%] sm:-translate-y-1/2 inset-0 w-full h-full grid place-items-center"
            >
                <motion.section
                    initial={{ opacity: 0, x: "-100%" }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                        delay: 0.5,
                        duration: 1,
                        ease: [0.25, 1, 0.5, 1],
                    }}
                >
                    <Image
                        src={HeroCar}
                        alt="Hero Car"
                        width={1800}
                        height={1000}
                        priority
                        className="hero-car"
                    />
                </motion.section>
            </section>
        </div>
    )
}