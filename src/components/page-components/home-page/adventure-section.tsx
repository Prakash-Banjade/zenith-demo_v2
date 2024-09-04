import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { adventureLists } from "@/data/adventures-data";

export function AdventureSection() {
    return (
        <section className="container">
            <header className="mb-10">
                <h2 className="section-title mb-5 text-center"><span className="text-primary">Barry's Adventures</span> Activities In Dubai</h2>
                <p className="text-center text-base text-muted-foreground">Embrace the Excitement with Thrilling Desert Safaris, High-Speed Jet Skiing, Luxurious Yacht Cruises, and Off-Road Buggy Expeditions in a City of Wonders.</p>
            </header>

            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1  gap-4">
                {adventureLists.map((item) => (
                    <Item key={item.title} item={item} />
                ))}
            </div>
        </section>
    );
}
type TItem = {
    item: (typeof adventureLists)[number];
};

const Item = ({ item }: TItem) => {
    return (
        <div
            key={item.title}
            className=" bg-white rounded-3xl relative h-[320px] overflow-hidden group"
        >
            <Image
                src={item.image}
                alt="Single Car"
                height={600}
                width={600}
                className=" h-full w-full object-cover absolute inset-0 group-hover:scale-125 zen__transition__300"
            />
            <div className="absolute inset-0 h-full w-full group-hover:bg-black/30 zen__transition__500"></div>

            <div className="absolute inset-0 h-full w-full  bg-gradient-to-t from-black via-black/40 to-black/20"></div>
            <div className="absolute p-4 bottom-0 translate-y-[68%]  group-hover:translate-y-0 zen__transition__500">
                <div className="flex flex-col gap-4 text-white">
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <p className="">{item.description}</p>
                    <Link
                        href={'/'}
                        className="text-secondary zen__transition__300 hover:text-white gap-1 flex items-center font-semibold animate__icon"
                    >
                        <span>Book Now</span>

                        <FaArrowRight className=" zen__transition__300 icon" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

// const CoverImage = ({ source }: { source: StaticImageData }) => (
//     <Image
//         src={source}
//         alt="adventure cover"
//         className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl object-cover"
//         height={400}
//         width={800}
//         priority
//     />
// );


// export const adventureLists = [
//     {
//         title: "Buggy Tours",
//         description:
//             "Our post-construction services gives you peace of mind knowing that we are still here for you even after",
//         header: <CoverImage source={BuggyImage} />,
//     },
//     {
//         title: "Yachts Rental",
//         description:
//             "Our post-construction services gives you peace of mind knowing that we are still here for you even after",
//         header: <CoverImage source={YachtRental} />,
//     },
//     {
//         title: "Jet Car Rental",
//         description:
//             "Our post-construction services gives you peace of mind knowing that we are still here for you even after",
//         header: <CoverImage source={JetCar} />,
//     },
//     {
//         title: "Jetski Service",
//         description:
//             "Our post-construction services gives you peace of mind knowing that we are still here for you even after",
//         header: <CoverImage source={JetSki} />,
//     },
//     {
//         title: "Desert Safari",
//         description:
//             "Experience the thrill of dune bashing and explore the vast desert landscape with our Desert Safari adventure.",
//         header: <CoverImage source={DesertSafariImage} />,
//     },
//     {
//         title: "Helicopter Tour",
//         description:
//             "Soar above the city and take in breathtaking views with our Helicopter Tour service.",
//         header: <CoverImage source={HelicopterImage} />,
//     },
//     {
//         title: "Zip Line Adventure",
//         description:
//             "Feel the adrenaline rush as you zip line across stunning landscapes in this thrilling adventure.",
//         header: <CoverImage source={ZipLineImage} />,
//     },
//     {
//         title: "Sky Dive",
//         description:
//             "Take the plunge and experience the ultimate thrill of free-falling from the skies with our Sky Dive service.",
//         header: <CoverImage source={SkyDiveImage} />,
//     },
//     {
//         title: "Ticket Service in Dubai",
//         description:
//             "Secure your spot at top events in Dubai with our reliable ticket service, offering the best seats for concerts, sports, and more.",
//         header: <CoverImage source={TicketServiceImage} />,
//     },
// ];

// // Top Picks Section
// export const TopPicks = () => (
//     <div className="mt-8 p-6 bg-gray-100 rounded-lg">
//         <h3 className="text-2xl font-semibold text-gray-800 mb-4">Top Picks</h3>
//         <div className="flex flex-wrap -mx-4 md:gap-0 gap-4">
//             <div className="w-full md:w-1/3 px-4">
//                 <div className="bg-white p-4 rounded-lg shadow">
//                     <CoverImage source={DesertSafariImage} />
//                     <h4 className="mt-4 text-lg font-medium text-gray-700">Desert Safari</h4>
//                     <p className="mt-2 text-gray-600 line-clamp-2">
//                         Experience the thrill of dune bashing with our highly-rated Desert Safari adventure.
//                     </p>
//                 </div>
//             </div>
//             <div className="w-full md:w-1/3 px-4">
//                 <div className="bg-white p-4 rounded-lg shadow">
//                     <CoverImage source={HelicopterImage} />
//                     <h4 className="mt-4 text-lg font-medium text-gray-700">Helicopter Tour</h4>
//                     <p className="mt-2 text-gray-600 line-clamp-2">
//                         Soar above Dubai's iconic skyline with our best-selling Helicopter Tour.
//                     </p>
//                 </div>
//             </div>
//             <div className="w-full md:w-1/3 px-4">
//                 <div className="bg-white p-4 rounded-lg shadow">
//                     <CoverImage source={SkyDiveImage} />
//                     <h4 className="mt-4 text-lg font-medium text-gray-700">Sky Dive</h4>
//                     <p className="mt-2 text-gray-600 line-clamp-2">
//                         Feel the adrenaline as you free-fall from the skies with our most thrilling Sky Dive experience.
//                     </p>
//                 </div>
//             </div>
//         </div>
//     </div>
// );


// // Feature or Package Section
// export const FeaturePackage = () => (
//     <div className="mt-8 p-6 bg-gray-100 rounded-lg">
//         <h3 className="text-2xl font-semibold text-gray-800 mb-4">Featured Package: Ultimate Dubai Adventure</h3>
//         <div className="flex flex-col md:flex-row -mx-4">
//             <div className="w-full md:w-1/2 px-4 mb-6 md:mb-0">
//                 <CoverImage source={UltimateAdventureImage} />
//             </div>
//             <div className="w-full md:w-1/2 px-4 flex flex-col justify-center">
//                 <p className="text-gray-600 mb-4">
//                     Discover Dubai like never before with our exclusive adventure package. This package includes:
//                 </p>
//                 <ul className="list-disc list-inside text-gray-600 mb-4">
//                     <li>Desert Safari with BBQ Dinner</li>
//                     <li>Helicopter Tour over the city</li>
//                     <li>Private Yacht Rental</li>
//                     <li>Sky Dive experience</li>
//                 </ul>
//                 <button className="self-start px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition">
//                     Book Now
//                 </button>
//             </div>
//         </div>
//     </div>
// );
