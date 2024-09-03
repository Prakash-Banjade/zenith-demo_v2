"use client"

import { Button } from '@/components/ui/button'
import { TooltipWrapper } from '@/components/ui/tooltip'
import { ArrowLeftIcon, ArrowRight, CheckIcon } from 'lucide-react'
import Image from 'next/image'
import React, { useRef, useState } from 'react'
import { BsFillFuelPumpFill } from "react-icons/bs";
import Slider from "react-slick";
import { allCarsList } from '@/data/car-list-data'
import { GiCarWheel } from "react-icons/gi";
import { TbManualGearboxFilled } from "react-icons/tb";
import { FaWhatsapp } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

type Props = {}

export default function PopularCarsSection({ }: Props) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const sliderRef = useRef<Slider>(null);

    const car_list_settings = {
        dots: false,
        arrows: false,
        speed: 500,
        slidesToShow: 3,
        swipeToSlide: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        adaptiveHeight: true,
        centerPadding: "50px",
        beforeChange: (oldIndex: number, newIndex: number) =>
            setCurrentSlide(newIndex),

        responsive: [
            {
                breakpoint: 1240,
                settings: {
                    arrows: false,
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                },
            },
        ],
    };


    return (
        <section className='bg-[#f7f7f7] py-12'>
            <section className='container grid grid-cols-4 gap-5 mx-auto'>

                <section>
                    <h3 className='section-title'>Explore our <br /> Popular Cars</h3>
                    <p className='text-muted-foreground'>We offer a wide range of cars to choose from, catering to your specific needs and preferences.</p>

                    <Button variant={'outline'} className='mt-12 rounded-full' size={'lg'}>
                        Explore all
                    </Button>

                    <section className='space-x-5 mt-20'>
                        <Button type="button" variant={'outline'} className='rounded-full size-12' size={'icon'} onClick={() => sliderRef.current?.slickPrev()}>
                            <ArrowLeftIcon size={16} />
                        </Button>
                        <Button type="button" variant={'outline'} className='rounded-full size-12' size={'icon'} onClick={() => sliderRef.current?.slickNext()}>
                            <ArrowRight size={16} />
                        </Button>
                    </section>
                </section>

                <section className='col-span-3 w-full'>
                    <div className=''>
                        <Slider {...car_list_settings} ref={sliderRef}>
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
                    </div>
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
        <div className="hover:bg-white mx-2 basis-1/3 bg-gray-50 delay-75 hover:shadow-lg group border-slate-100 transition-all shadow-sm border border-border rounded-md p-4 space-y-6">
            <h2 className='text-2xl font-bold text-gray-900 mb-2'>{title}</h2>
            <div className="h-[120px] !w-full relative">
                <Image src={image} alt={title} fill objectFit="contain" className="scale-110" />
            </div>
            <div className="grid grid-cols-4 gap-2 px-3 py-2 rounded-md bg-slate-100">
                <div className="flex gap-1 flex-col items-center justify-center">
                    <Image src="/seat.svg" alt="car-wheel" width={20} height={20} className="w-4 h-4" />
                    <span className="font-medium text-gray-400 text-sm">4 Seater</span>
                </div>
                <div className="flex gap-1 flex-col items-center justify-center">
                    <GiCarWheel className="text-primary" />
                    <span className="font-medium text-gray-400 text-sm">{power}</span>
                </div>
                <div className="flex gap-1 flex-col items-center justify-center">
                    <TbManualGearboxFilled className="text-primary" />
                    <span className="font-medium text-gray-400 text-sm">Automatic</span>
                </div>
                <div className="flex gap-1 flex-col items-center justify-center">
                    <BsFillFuelPumpFill className="text-primary" />
                    <span className="font-medium text-gray-400 text-sm">{fuelType}</span>
                </div>
            </div>

            <section className='flex justify-between gap-2 items-center'>
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

                <TooltipWrapper label={`Customer Reviews: ${rating} out of 5`}>
                    <section>
                        <div className="flex items-center gap-1">
                            <FaStar size={16} fill='orange' />
                            <FaStar size={16} fill='orange' />
                            <FaStar size={16} fill='orange' />
                            <FaStar size={16} fill='orange' />
                            <FaStar size={16} fill='orange' />
                        </div>
                        <p className='text-muted-foreground text-right'>({rating})</p>
                    </section>
                </TooltipWrapper>
            </section>

            <div className="flex gap-2 justify-between items-center">
                <p className='text-lg'>
                    AED {price.toLocaleString()}/day
                </p>

                <TooltipWrapper label={`Click to whatsapp for booking ${title}`}>
                    <Button className="bg-[#25D366] text-white hover:bg-green-600">
                        <FaWhatsapp className="size-6 mr-2" />
                        WhatsApp
                    </Button>
                </TooltipWrapper>
            </div>
        </div>
    );
};