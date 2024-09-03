import { Headphones, CreditCard, Handshake, CheckCircle, ArrowRight } from "lucide-react"
import Image from "next/image"
import serviceBackground from '@/public/assets/banners/banner-3.jpg'

export default function Component() {
    return (
        <div className="relative bg-gray-900 text-white py-16 overflow-hidden">
            <Image
                src={serviceBackground}
                alt="service-background"
                width={1920}
                height={1080}
                className="absolute -top-40 inset-0 w-full h-auto object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/90"></div>
            <div className="container mx-auto relative px-4 sm:px-6 lg:px-8 flex">
                <div>
                    <h2 className="text-5xl font-bold mb-2">Our Services</h2>
                    <p className="text-secondary mb-6">Looking to Save More on Your rental car?</p>
                    <p className="mb-8 text-gray-300">
                        Discover unparalleled luxury and convenience with EuroElite Cars' premium car rental services.
                        From sleek sedans to spacious SUVs, our meticulously curated fleet ensures you'll travel in style
                        and comfort. With flexible rental options, seamless booking, and exceptional customer service,
                        we're your trusted partner for unforgettable journeys.
                    </p>
                    <div className="space-y-6">
                        <ServiceItem
                            title="Chauffeur Services"
                            description="Enjoy the luxury of a personal chauffeur, ensuring you reach your destination in comfort and style."
                        />

                        <ServiceItem
                            title="Cheap Car For Rent"
                            description="Affordable car rental options tailored to fit your budget, without compromising on quality."
                        />

                        <ServiceItem
                            title="7 Seater Car Rental"
                            description="Perfect for family trips or group travel, our 7-seater vehicles offer ample space and comfort."
                        />

                        <ServiceItem
                            title="Dubai Airport Terminal 1"
                            description="Convenient car rental services at Dubai Airport Terminal 1, making your travel hassle-free from the moment you land."
                        />

                        <ServiceItem
                            title="Dubai Airport Terminal 3"
                            description="Quick and easy car rentals available at Dubai Airport Terminal 3, designed to get you on the road swiftly."
                        />

                        <ServiceItem
                            title="Al Maktoum Int Airport"
                            description="Reliable car rental services at Al Maktoum International Airport, ensuring seamless transitions from air to road."
                        />

                        <ServiceItem
                            title="Monthly Car Rental"
                            description="Flexible and cost-effective monthly car rental plans, ideal for extended stays or long-term needs."
                        />

                    </div>
                </div>
            </div>
        </div>
    )
}

function ServiceItem({ title, description }: {
    title: string,
    description: string
}) {
    return (
        <div className="flex items-start">
            <div className="flex-shrink-0 bg-primary/10 rounded-lg p-3 mr-4">
                <ArrowRight className="h-6 w-6 text-primary" />
            </div>
            <div>
                <h3 className="text-lg font-semibold mb-1">{title}</h3>
                <p className="text-sm text-gray-400">{description}</p>
            </div>
        </div>
    )
}