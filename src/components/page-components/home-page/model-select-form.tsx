import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { DatePickerWithRange } from '@/components/ui/date-range-picker'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select'
import React from 'react'

type Props = {}

export default function ModelSelectForm({ }: Props) {
    return (
        <Card className="w-full max-w-4xl mx-auto">
            <CardContent className="p-6">
                <form className="flex flex-wrap gap-6">
                    <div className="space-y-2 grow">
                        <label htmlFor="date" className="sm:text-base text-sm font-medium text-gray-700 uppercase">
                            <span className='text-muted-foreground'>01</span> WHEN
                        </label>
                        <DatePickerWithRange />
                    </div>
                    <div className="space-y-2 grow">
                        <label htmlFor="make" className="sm:text-base text-sm font-medium text-gray-700 uppercase">
                            <span className='text-muted-foreground'>02</span> SELECT MAKE
                        </label>
                        <Select>
                            <SelectTrigger className="sm:text-base text-sm">
                                <SelectValue placeholder="Select a Car type" className='sm:text-base text-sm' />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>All</SelectLabel>
                                    <SelectItem value="audi">Audi</SelectItem>
                                    <SelectItem value="lamborghini">Lamborghini</SelectItem>
                                    <SelectItem value="rolls-royce">Rolls Royce</SelectItem>
                                    <SelectItem value="tesla">Tesla</SelectItem>
                                    <SelectItem value="bentley">Bentley</SelectItem>
                                    <SelectItem value="ferrari">Ferrari</SelectItem>
                                    <SelectItem value="bmw">BMW</SelectItem>
                                    <SelectItem value="mercedes">Mercedes</SelectItem>
                                    <SelectItem value="kia">Kia</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="space-y-2 grow">
                        <label htmlFor="model" className="sm:text-base text-sm font-medium text-gray-700 uppercase">
                            <span className='text-muted-foreground'>03</span> SELECT A MODEL
                        </label>
                        <Select>
                            <SelectTrigger className="sm:text-base text-sm">
                                <SelectValue placeholder="Select Model" className='sm:text-base text-sm' />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>All</SelectLabel>
                                    <SelectItem value="audi">Audi R8</SelectItem>
                                    <SelectItem value="lamborghini">Lamborghini Aventador</SelectItem>
                                    <SelectItem value="rolls-royce">Rolls Royce Phantom</SelectItem>
                                    <SelectItem value="tesla">Tesla Model 3</SelectItem>
                                    <SelectItem value="bentley">Bentley Continental GT</SelectItem>
                                    <SelectItem value="ferrari">Ferrari 488 GTB</SelectItem>
                                    <SelectItem value="bmw">BMW M5</SelectItem>
                                    <SelectItem value="mercedes">Mercedes AMG GT</SelectItem>
                                    <SelectItem value="kia">Kia Sportage</SelectItem>
                                    <SelectItem value="porsche">Porsche 911</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="flex items-end">
                        <Button className='sm:h-10 sm:rounded-md sm:px-8'>
                            SEARCH
                        </Button>
                    </div>
                </form>
            </CardContent>
        </Card>
    )
}