import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import Sharjah from "@/../public/assets/images/sharjah.png";
import Dubai from "@/../public/assets/images/dubai.png";
import AbuDhabi from "@/../public/assets/images/Abu-Dhabi.jpg";
import Ras_AlAin from "@/../public/assets/images/ras_al_khaimah.jpg";

export const locations = [
    {
        title: "Sharjah",
        image: Sharjah,
        price: "450",
        totalCars: 37,
    },

    {
        title: "Dubai",
        image: Dubai,
        price: "350",
        totalCars: 28,
    },
    {
        title: "Abu Dhabi",
        image: AbuDhabi,
        price: "320",
        totalCars: 34,
    },
    {
        title: "Ras Al Khimah",
        image: Ras_AlAin,
        price: "420",
        totalCars: 24,
    },
] as const;


export const RentalLocationsSection = () => {
    return (
        <section className="container grid">
            <section className="bg-white lg:py-32 md:py-24 py-16">
                <div className="container mx-auto space-y-10">
                    <div className="lg:max-w-[50%] mx-auto  md:mb-10 mb-6">
                        <h3 className="section-title">
                            <span className="text-primary">Rental</span> Locations
                        </h3>
                        <p className="text-center  text-muted-foreground text-sm">
                            We offer a wide range of rental locations across Dubai. From luxury
                            villas to budget-friendly homes, our selection caters to every
                            preference.
                        </p>
                    </div>
                    <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
                        {locations.map((item, index) => (
                            <Item key={index} {...item} />
                        ))}
                    </div>
                </div>
            </section>
        </section>
    );
};

type TItem = {
    title: string;
    image: StaticImageData;
    totalCars: number;
    price: string;
};

const Item = ({ title, image }: TItem) => {
    return (
        <div className="p-2 relative">
            <div className="relative group overflow-hidden">
                <Image
                    src={image}
                    alt="Single Car"
                    height={600}
                    width={1000}
                    priority={false}
                    className="w-full h-[250px] object-cover rounded-t border group-hover:rotate-1 zen__transition__300 overflow-hidden group-hover:scale-105"
                />
                <Link
                    href={"/"}
                    className="absolute inset-0 w-full h-full bg-black/40 group-hover:bg-blue-500/20 zen__transition__300"
                ></Link>
            </div>

            <div className="flex flex-col gap-2 p-6 border border-gray-200 rounded-lg rounded-t-none">
                <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-primary text-center">{title}</h3>
                </div>
            </div>
        </div>
    );
};
