"use client"

import { Button } from '@/components/ui/button'
import { TooltipWrapper } from '@/components/ui/tooltip'
import { ArrowLeftIcon, ArrowRight, CheckIcon, MessageCircleIcon, PhoneIcon } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { BsFillFuelPumpFill } from "react-icons/bs";
import Slider from "react-slick";
import { car_list_settings } from './car-list-carousel-setting'
import { allCarsList } from '@/data/car-list-data'
import { GiCarWheel } from "react-icons/gi";
import { TbManualGearboxFilled } from "react-icons/tb";

type Props = {}

export default function PopularCarsSection({ }: Props) {
    return (
        <section className='bg-[#f7f7f7] py-12'>
            <section className='container grid grid-cols-4 gap-5 mx-auto'>

                <section>
                    <h3 className='2xl:text-5xl lg:text-6xl sm:text-5xl text-4xl font-extrabold mb-4 text-gray-900'>Explore our <br /> Popular Cars</h3>
                    <p className='text-muted-foreground'>We offer a wide range of cars to choose from, catering to your specific needs and preferences.</p>

                    <Button variant={'outline'} className='mt-12 rounded-full' size={'lg'}>
                        Explore all
                    </Button>

                    <section className='space-x-5 mt-20'>
                        <Button variant={'outline'} className='rounded-full size-12' size={'icon'}>
                            <ArrowLeftIcon size={16} />
                        </Button>
                        <Button variant={'outline'} className='rounded-full size-12' size={'icon'}>
                            <ArrowRight size={16} />
                        </Button>
                    </section>
                </section>

                <section className='lg:cols-span-3 sm:col-span-2 col-span-full w-full grid grid-cols-3'>
                    <Slider {...car_list_settings}>
                        {allCarsList.map((item, index) => {
                            return (
                                <Item
                                    key={index}
                                    title={item.title}
                                    acceleration={item.acceleration}
                                    fuelType={item.fuelType}
                                    image={item.image}
                                    path={item.path}
                                    power={item.power}
                                    price={item.price}
                                    rating={item.rating}
                                />
                            );
                        })}
                    </Slider>
                </section>

            </section>
        </section>
    )
}

type TItem = {
    title: string;
    acceleration: string;
    fuelType: string;
    power: string;
    price: number;
    rating: number;
    path: string;
    image: string;
};

const Item = ({
    title,
    acceleration,
    fuelType,
    power,
    price,
    rating,
    path,
    image,
}: TItem) => {
    return (
        <div className="hover:bg-white basis-1/3 bg-gray-50 delay-75 hover:shadow-lg group border-slate-100 zen__transition__300 shadow-sm border border-border rounded-md p-4 space-y-6">
            <div className="font-makro flex justify-between items-center">
                <span className="font-semibold">AED {price.toLocaleString()} <span className="text-gray-400 text-sm font-light">/ day</span></span>
                <span className="text-sm text-gray-800">250 KM</span>
            </div>
            <div className="h-[120px] !w-full relative">
                <Image src={image} alt={title} fill objectFit="contain" className="scale-110" />
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>
            <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex gap-3">
                    <Image src="/seat.svg" alt="car-wheel" width={20} height={20} className="w-4 h-4" />
                    <span className="font-medium text-gray-400 text-sm">4 Seater</span>
                </div>
                <div className="flex gap-3">
                    <GiCarWheel className="text-primary" />
                    <span className="font-medium text-gray-400 text-sm">{power}</span>
                </div>{" "}
                <div className="flex gap-3">
                    <TbManualGearboxFilled className="text-primary" />
                    <span className="font-medium text-gray-400 text-sm">Manual</span>
                </div>{" "}
                <div className="flex gap-3">
                    <BsFillFuelPumpFill className="text-primary" />
                    <span className="font-medium text-gray-400 text-sm">{fuelType}</span>
                </div>
            </div>

            <ul className="flex flex-col gap-1 text-sm">
                <TooltipWrapper label="No Deposit Required">
                    <li className="flex gap-1 items-center text-gray-800 hover:underline w-fit">
                        <CheckIcon size={16} /> No Deposit
                    </li>
                </TooltipWrapper>
                <TooltipWrapper label={`Full insurance included when you rent ${title}`}>
                    <li className="flex gap-1 items-center text-gray-800 hover:underline w-fit">
                        <CheckIcon size={16} /> Insurance Included
                    </li>
                </TooltipWrapper>
            </ul>

            <div className="flex space-x-2">
                <TooltipWrapper label={`Click to call for booking ${title}`}>
                    <Button className="flex-1 bg-gray-100 text-gray-800 hover:bg-gray-200" variant="outline">
                        <PhoneIcon className="w-4 h-4 mr-2" />
                        Call
                    </Button>
                </TooltipWrapper>
                <TooltipWrapper label={`Click to whatsapp for booking ${title}`}>
                    <Button className="flex-1 bg-green-500 text-white hover:bg-green-600">
                        <MessageCircleIcon className="w-4 h-4 mr-2" />
                        WhatsApp
                    </Button>
                </TooltipWrapper>
            </div>
        </div>
    );
};