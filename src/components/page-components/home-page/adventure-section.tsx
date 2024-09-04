import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import Image, { StaticImageData } from "next/image";
import BuggyImage from "@/../public/assets/images/buggy.jpg";
import YachtRental from "@/../public/assets/images/yacht-rental.jpeg";
import JetCar from "@/../public/assets/images/jet-car.jpg";
import JetSki from "@/../public/assets/images/jet-ski.png";
import DesertSafariImage from '@/../public/assets/adventures/desertSafari.jpg'
import HelicopterImage from '@/../public/assets/adventures/helicopter.jpg'
import ZipLineImage from '@/../public/assets/adventures/zipline.jpg'
import SkyDiveImage from '@/../public/assets/adventures/skydive.webp'
import TicketServiceImage from '@/../public/assets/adventures/ticket.avif'
import UltimateAdventureImage from '@/../public/assets/adventures/ultimate_adventure.png'

export function AdventureSection() {
    return (
        <section className="flex gap-10 container mx-auto flex-wrap xl:flex-nowrap">
            <section>
                <header className="p-4 md:p-0">
                    <h2 className="section-title mb-8"><span className="text-primary">Barry's Adventures</span> Activities In Dubai</h2>
                    <p>Embrace the Excitement with Thrilling Desert Safaris, High-Speed Jet Skiing, Luxurious Yacht Cruises, and Off-Road Buggy Expeditions in a City of Wonders.</p>
                </header>

                <TopPicks />
                <FeaturePackage />
            </section>

            <BentoGrid className="max-w-5xl">
                {adventureLists.map((item, i) => (
                    <BentoGridItem
                        key={i}
                        title={item.title}
                        description={item.description}
                        header={item.header}
                        // icon={item.icon}
                        className={i === 3 || i === 6 ? "md:col-span-2" : ""}
                    />
                ))}
            </BentoGrid>
        </section>
    );
}
const CoverImage = ({ source }: { source: StaticImageData }) => (
    <Image
        src={source}
        alt="adventure cover"
        className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl object-cover"
        height={400}
        width={800}
        priority
    />
);


export const adventureLists = [
    {
        title: "Buggy Tours",
        description:
            "Our post-construction services gives you peace of mind knowing that we are still here for you even after",
        header: <CoverImage source={BuggyImage} />,
    },
    {
        title: "Yachts Rental",
        description:
            "Our post-construction services gives you peace of mind knowing that we are still here for you even after",
        header: <CoverImage source={YachtRental} />,
    },
    {
        title: "Jet Car Rental",
        description:
            "Our post-construction services gives you peace of mind knowing that we are still here for you even after",
        header: <CoverImage source={JetCar} />,
    },
    {
        title: "Jetski Service",
        description:
            "Our post-construction services gives you peace of mind knowing that we are still here for you even after",
        header: <CoverImage source={JetSki} />,
    },
    {
        title: "Desert Safari",
        description:
            "Experience the thrill of dune bashing and explore the vast desert landscape with our Desert Safari adventure.",
        header: <CoverImage source={DesertSafariImage} />,
    },
    {
        title: "Helicopter Tour",
        description:
            "Soar above the city and take in breathtaking views with our Helicopter Tour service.",
        header: <CoverImage source={HelicopterImage} />,
    },
    {
        title: "Zip Line Adventure",
        description:
            "Feel the adrenaline rush as you zip line across stunning landscapes in this thrilling adventure.",
        header: <CoverImage source={ZipLineImage} />,
    },
    {
        title: "Sky Dive",
        description:
            "Take the plunge and experience the ultimate thrill of free-falling from the skies with our Sky Dive service.",
        header: <CoverImage source={SkyDiveImage} />,
    },
    {
        title: "Ticket Service in Dubai",
        description:
            "Secure your spot at top events in Dubai with our reliable ticket service, offering the best seats for concerts, sports, and more.",
        header: <CoverImage source={TicketServiceImage} />,
    },
];

// Top Picks Section
export const TopPicks = () => (
    <div className="mt-8 p-6 bg-gray-100 rounded-lg">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Top Picks</h3>
        <div className="flex flex-wrap -mx-4 md:gap-0 gap-4">
            <div className="w-full md:w-1/3 px-4">
                <div className="bg-white p-4 rounded-lg shadow">
                    <CoverImage source={DesertSafariImage} />
                    <h4 className="mt-4 text-lg font-medium text-gray-700">Desert Safari</h4>
                    <p className="mt-2 text-gray-600 line-clamp-2">
                        Experience the thrill of dune bashing with our highly-rated Desert Safari adventure.
                    </p>
                </div>
            </div>
            <div className="w-full md:w-1/3 px-4">
                <div className="bg-white p-4 rounded-lg shadow">
                    <CoverImage source={HelicopterImage} />
                    <h4 className="mt-4 text-lg font-medium text-gray-700">Helicopter Tour</h4>
                    <p className="mt-2 text-gray-600 line-clamp-2">
                        Soar above Dubai's iconic skyline with our best-selling Helicopter Tour.
                    </p>
                </div>
            </div>
            <div className="w-full md:w-1/3 px-4">
                <div className="bg-white p-4 rounded-lg shadow">
                    <CoverImage source={SkyDiveImage} />
                    <h4 className="mt-4 text-lg font-medium text-gray-700">Sky Dive</h4>
                    <p className="mt-2 text-gray-600 line-clamp-2">
                        Feel the adrenaline as you free-fall from the skies with our most thrilling Sky Dive experience.
                    </p>
                </div>
            </div>
        </div>
    </div>
);


// Feature or Package Section
export const FeaturePackage = () => (
    <div className="mt-8 p-6 bg-gray-100 rounded-lg">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Featured Package: Ultimate Dubai Adventure</h3>
        <div className="flex flex-col md:flex-row -mx-4">
            <div className="w-full md:w-1/2 px-4 mb-6 md:mb-0">
                <CoverImage source={UltimateAdventureImage} />
            </div>
            <div className="w-full md:w-1/2 px-4 flex flex-col justify-center">
                <p className="text-gray-600 mb-4">
                    Discover Dubai like never before with our exclusive adventure package. This package includes:
                </p>
                <ul className="list-disc list-inside text-gray-600 mb-4">
                    <li>Desert Safari with BBQ Dinner</li>
                    <li>Helicopter Tour over the city</li>
                    <li>Private Yacht Rental</li>
                    <li>Sky Dive experience</li>
                </ul>
                <button className="self-start px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition">
                    Book Now
                </button>
            </div>
        </div>
    </div>
);
