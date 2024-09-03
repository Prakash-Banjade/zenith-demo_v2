import Audi from "@/public/assets/brands/audi.svg";
import Bentley from "@/public/assets/brands/bentley.svg";
import BMW from "@/public/assets/brands/bmw.svg";
import Cadillac from "@/public/assets/brands/cadillac.svg";
import Chevrolet from "@/public/assets/brands/chevrolet.svg";
import Ferrari from "@/public/assets/brands/ferrari.svg";
import LandRover from "@/public/assets/brands/land-rover.svg";
import McLaren from "@/public/assets/brands/mclaren.svg";
import Tesla from "@/public/assets/brands/tesla.svg";
import RollsRoyce from "@/public/assets/brands/rolls-royce.svg";
import Mercedes from "@/public/assets/brands/mercedes.svg";
import Porsche from "@/public/assets/brands/porsche.svg";
import Kia from "@/public/assets/brands/kia.svg";
import GMC from "@/public/assets/brands/gmc.svg";
import Lamborghini from "@/public/assets/brands/lamborghini.svg";

export type BrandList = {
    id: number;
    name: string;
    image: string;
    totalCars: number;
};

export const brandsList: BrandList[] = [
    {
        id: 16,
        name: "Rolls-Royce",
        image: RollsRoyce,
        totalCars: 10,
    },
    {
        id: 1,
        name: "Audi",
        image: Audi,
        totalCars: 16,
    },
    {
        id: 11,
        name: "Bentley",
        image: Bentley,
        totalCars: 6,
    },
    {
        id: 2,
        name: "BMW",
        image: BMW,
        totalCars: 8,
    },
    {
        id: 12,
        name: "Cadillac",
        image: Cadillac,
        totalCars: 4,
    },
    {
        id: 13,
        name: "Chevrolet",
        image: Chevrolet,
        totalCars: 6,
    },
    {
        id: 3,
        name: "Ferrari",
        image: Ferrari,
        totalCars: 9,
    },
    {
        id: 14,
        name: "GMC",
        image: GMC,
        totalCars: 4,
    },
    {
        id: 15,
        name: "Kia",
        image: Kia,
        totalCars: 13,
    },
    {
        id: 5,
        name: "Lamborghini",
        image: Lamborghini,
        totalCars: 15,
    },
    {
        id: 4,
        name: "Land Rover",
        image: LandRover,
        totalCars: 4,
    },
    {
        id: 10,
        name: "McLaren",
        image: McLaren,
        totalCars: 3,
    },
    {
        id: 9,
        name: "Mercedes",
        image: Mercedes,
        totalCars: 16,
    },
    {
        id: 6,
        name: "Porsche",
        image: Porsche,
        totalCars: 7,
    },
    {
        id: 7,
        name: "Tesla",
        image: Tesla,
        totalCars: 6,
    },
]