import DesktopNav from "@/components/layouts/desktop-nav";
import BrandsSection from "@/components/page-components/home-page/brands-section";
import HeroSection from "@/components/page-components/home-page/hero-section";
import ModelSelectForm from "@/components/page-components/home-page/model-select-form";
import PopularCarsSection from "@/components/page-components/home-page/popular-cars-section";
import ServicesSection from "@/components/page-components/home-page/services-section";

export default function HomePage() {
  return (
    <>
      <DesktopNav />
      <div className="h-12"></div>
      <HeroSection />
      <div className="h-20"></div>
      <ModelSelectForm />
      <div className="h-20"></div>
      <BrandsSection />
      <div className="h-20"></div>
      <PopularCarsSection />
      <div className="h-20"></div>
      <ServicesSection />
      <div className="h-20"></div>
    </>
  );
}
