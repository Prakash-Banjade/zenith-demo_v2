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
                    brandsList.map(brand => (
                        <div className="bg-white mx-10">
                            <div className="!min-h-[50px] flex items-center justify-center">
                                <Image
                                    src={brand.image}
                                    alt={brand.name}
                                    height={100}
                                    width={100}
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