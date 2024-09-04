import DesktopNav from "@/components/layouts/desktop-nav";
import { AdventureSection } from "@/components/page-components/home-page/adventure-section";
import BrandsSection from "@/components/page-components/home-page/brands-section";
import { CarsListSection } from "@/components/page-components/home-page/cars-list-section";
import Footer from "@/components/page-components/home-page/footer";
import HeroSection from "@/components/page-components/home-page/hero-section";
import HowItWorksSection from "@/components/page-components/home-page/how-it-works-section";
import ModelSelectForm from "@/components/page-components/home-page/model-select-form";
import PopularCarsSection from "@/components/page-components/home-page/popular-cars-section";
import { RentalLocationsSection } from "@/components/page-components/home-page/rental-location-section";
import ServicesSection from "@/components/page-components/home-page/services-section";
import WhyChooseUsSection from "@/components/page-components/home-page/why-choose-us-section";
import { luxuryCars, sportCars, suvCarList } from "@/data/car-list-data";

export default function HomePage() {
  return (
    <>
      <DesktopNav />
      <div className="h-12"></div>
      <HeroSection />
      <div className="h-20"></div>
      <ModelSelectForm />
      <div className="h-36"></div>
      <BrandsSection />
      <div className="h-36"></div>
      <PopularCarsSection />
      <div className="h-36"></div>
      <HowItWorksSection />
      <div className="h-36"></div>
      <CarsListSection
        carsList={sportCars}
        title={<><span className="text-primary">Sport Cars</span> for Rent</>}
      />
      <CarsListSection
        carsList={luxuryCars}
        title={<><span className="text-primary">Luxury Cars</span> for Rent</>}
      />
      <CarsListSection
        carsList={suvCarList}
        title={<><span className="text-primary">SUV Cars</span> for Rent</>}
      />
      <div className="h-36"></div>
      <ServicesSection />
      <div className="h-36"></div>
      <AdventureSection />
      <div className="h-36"></div>
      <WhyChooseUsSection />
      <div className="h-36"></div>
      <RentalLocationsSection />
      <Footer />
    </>
  );
}
