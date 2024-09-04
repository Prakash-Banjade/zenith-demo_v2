import { Button } from "@/components/ui/button"
import { PhoneIcon } from "lucide-react"
import Image from "next/image"

export default function WhyChooseUsSection() {
    return (
        <>
            <section className="container mx-auto px-4 py-12">
                <header className="mb-8">
                    <h2 className="section-title">Why <span className="text-primary">choose us</span></h2>
                    <p className="max-w-[100ch] text-base text-muted-foreground">At Zenith Super Cars, we offer the perfect blend of luxury, affordability, and unparalleled service—designed to elevate your driving experience and ensure every journey with us is truly exceptional.</p>
                </header>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="rounded-lg overflow-hidden">
                        <Image
                            src="/assets/images/Abu-Dhabi.jpg"
                            alt="Luxury car in snowy mountains"
                            width={600}
                            height={400}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-gray-100 p-6 rounded-lg">
                            <h3 className="text-xl font-semibold mb-2">No Delays</h3>
                            <p className="text-gray-600">
                                Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                                standard dummy text ever since the 1500s.
                            </p>
                        </div>
                        <div className="bg-gray-100 p-6 rounded-lg">
                            <h3 className="text-xl font-semibold mb-2">Hight Quality</h3>
                            <p className="text-gray-600">
                                Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                industry's standard dummy text ever since the 1500s.
                            </p>
                        </div>
                        <div className="bg-gray-100 p-6 rounded-lg">
                            <h3 className="text-xl font-semibold mb-2">Premium Support</h3>
                            <p className="text-gray-600">
                                Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                                standard dummy text ever since the 1500s.
                            </p>
                        </div>
                        <div className="bg-gray-100 p-6 rounded-lg">
                            <h3 className="text-xl font-semibold mb-2">A Diverse Selection</h3>
                            <p className="text-gray-600">
                                Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                industry's standard dummy text ever since the 1500s.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-primary/90 py-12">
                <section className="container mx-auto grid md:grid-cols-2 xl:flex justify-between xl:flex-row gap-10 relative">
                    <section className="w-full sm:w-auto">
                        <div className="absolute -top-[50%] -left-[10%] xl:block hidden">
                            <Image
                                src={'/assets/banners/rolls-royce-shining.png'}
                                alt="rolls royce"
                                width={1000}
                                height={800}
                                priority
                                className=" object-cover"
                            />
                        </div>

                        <div className="flex flex-wrap w-full text-white gap-4 text-sm xl:mt-80">
                            <div className="border border-gray-500 rounded-xl md:p-6 p-4 shadow-lg grow flex gap-3 md:gap-8 items-end">
                                <p className="text-5xl font-bold">+100</p>
                                <p>Cars <br /> in stock</p>
                            </div>
                            <div className="border border-gray-500 rounded-xl md:p-6 p-4 shadow-lg grow flex gap-3 md:gap-8 items-end">
                                <p className="text-5xl font-bold">+13K</p>
                                <p>Satisfied <br /> Customers</p>
                            </div>
                            <div className="border border-gray-500 rounded-xl md:p-6 p-4 shadow-lg grow flex gap-3 md:gap-8 items-end">
                                <p className="text-5xl font-bold">+11</p>
                                <p>Years <br /> Experience</p>
                            </div>
                        </div>
                    </section>

                    <section className="flex flex-col self-center">
                        <header>
                            <h3 className="section-title !text-slate-100">Save money <br /> with our rental</h3>
                            <p className="text-slate-300">Best price in the city with full insurance included, <br /> full refund in case of cancellation</p>
                        </header>

                        <section className="flex flex-wrap xl:justify-between mt-8 gap-16">
                            <ul className="text-slate-300 space-y-2">
                                <li>✔ &nbsp;24/7 Support</li>
                                <li>✔ &nbsp;No Hidden Charges</li>
                                <li>✔ &nbsp;100% Secure</li>
                            </ul>
                            <ul className="text-slate-300 space-y-2">
                                <li>✔ &nbsp;Full Refund</li>
                                <li>✔ &nbsp;Best Price</li>
                                <li>✔ &nbsp;Insurance Cover</li>
                            </ul>
                        </section>

                        <Button title="Click to call us now" variant={'outline'} className="px-10 py-6 rounded-full text-base items-center mt-auto xl:w-full w-fit mt-10">
                            <PhoneIcon size={20} className="mr-2" />
                            Call us now
                        </Button>
                    </section>
                </section>

            </section>
        </>
    )
}