"use client"

import { brandsList } from '@/data/brands-data';
import Image from 'next/image';
import React from 'react'
import Marquee from "react-fast-marquee";

type Props = {}

export default function BrandsSection({ }: Props) {
    return (
        <section>
            <Marquee pauseOnHover gradient>
                {
                    brandsList.map((brand, i) => (
                        <div className="bg-white sm:mx-10 mx-5" key={i}>
                            <div className="flex items-center justify-center">
                                <Image
                                    src={brand.image}
                                    alt={brand.name}
                                    height={100}
                                    width={100}
                                    className='w-auto sm:max-h-[100px] max-h-[50px] object-contain'
                                />
                            </div>
                            {/* <h3 className="text-lg font-medium text-center">{brand.name}</h3> */}
                        </div>
                    ))
                }
            </Marquee>
        </section>
    )
}