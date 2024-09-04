import { Button } from "@/components/ui/button";
import { TooltipWrapper } from "@/components/ui/tooltip";
import { CarList } from "@/data/car-list-data";
import { ArrowRightIcon, CheckIcon } from "lucide-react";
import Image from "next/image";
import React from "react";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { FaStar, FaWhatsapp } from "react-icons/fa";
import { GiCarWheel } from "react-icons/gi";
import { TbManualGearboxFilled } from "react-icons/tb";

export const CarsListSection = ({ carsList, title, subTitle }: { carsList: CarList[], title?: React.ReactNode, subTitle?: React.ReactNode }) => {
    return (
        <section className="bg-gradient-to-r from-gray-200 to-gray-200 via-slate-100  lg:py-20 md:py-16 py-10">
            <div className="container mx-auto space-y-10">
                <header className="md:mb-10 mb-6 flex justify-between items-center gap-5 flex-wrap">
                    <h3 className="lg:text-4xl md:text-3xl text-2xl text-left md:font-bold font-semibold md:mb-6 mb-4">
                        {title || <>
                            <span className="text-primary">Cars</span> Collection
                        </>}
                    </h3>
                    <button className="group hover:bg-primary/5 rounded-md text-base text-primary font-medium flex items-center gap-2 transition-all px-3 py-2">
                        See all
                        <span className="group-hover:translate-x-[2px] transition-all duration-300 ease-in">
                            <ArrowRightIcon size={18} />
                        </span>
                    </button>
                </header>

                <div className="grid  lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-4">
                    {carsList.map((item, index) => {
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
                </div>
            </div>
            {subTitle && <p className="container text-center text-muted-foreground text-sm mt-5">
                {subTitle}
            </p>}
        </section>
    );
};

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
            <div className="h-[120px] !w-full relative hover:scale-110 transition-all duration-300 ease-in" title={title}>
                <Image src={image} alt={title} fill className="scale-110 object-contain" />
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
