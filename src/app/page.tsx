import DesktopNav from "@/components/layouts/desktop-nav";
import { AdventureSection } from "@/components/page-components/home-page/adventure-section";
import BrandsSection from "@/components/page-components/home-page/brands-section";
import { CarsListSection } from "@/components/page-components/home-page/cars-list-section";
import FAQSection from "@/components/page-components/home-page/faq-section";
import Footer from "@/components/page-components/home-page/footer";
import HeroSection from "@/components/page-components/home-page/hero-section";
import HowItWorksSection from "@/components/page-components/home-page/how-it-works-section";
import ModelSelectForm from "@/components/page-components/home-page/model-select-form";
import PopularCarsSection from "@/components/page-components/home-page/popular-cars-section";
import { RentalLocationsSection } from "@/components/page-components/home-page/rental-location-section";
import ServicesSection from "@/components/page-components/home-page/services-section";
import WhyChooseUsSection from "@/components/page-components/home-page/why-choose-us-section";
import { allCarsList, luxuryCars, sportCars, suvCarList } from "@/data/car-list-data";

export default function HomePage() {
  return (
    <>
      <div className="md:h-12 h-5"></div>
      <HeroSection />
      <div className="h-20"></div>
      <ModelSelectForm />
      <div className="md:h-36 h-20"></div>
      <BrandsSection />
      <div className="md:h-36 h-20"></div>
      <PopularCarsSection />
      <div className="md:h-36 h-20"></div>
      <HowItWorksSection />
      <div className="md:h-36 h-20"></div>
      <CarsListSection
        carsList={[...allCarsList, ...sportCars, ...luxuryCars, ...suvCarList]}
        title={<><span className="text-primary">Premium Cars</span> for Rent</>}
      />
      <div className="md:h-36 h-20"></div>
      <ServicesSection />
      <div className="md:h-36 h-20"></div>
      <AdventureSection />
      <div className="md:h-36 h-20"></div>
      <WhyChooseUsSection />
      <div className="md:h-36 h-20"></div>
      <RentalLocationsSection />
      <div className="md:h-36 h-20"></div>
      <FAQSection />
      <div className="h-10"></div>
    </>
  );
}
