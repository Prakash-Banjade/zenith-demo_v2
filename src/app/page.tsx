import DesktopNav from "@/components/layouts/desktop-nav";
import BrandsSection from "@/components/page-components/home-page/brands-section";
import Footer from "@/components/page-components/home-page/footer";
import HeroSection from "@/components/page-components/home-page/hero-section";
import HowItWorksSection from "@/components/page-components/home-page/how-it-works-section";
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
      <div className="h-36"></div>
      <BrandsSection />
      <div className="h-36"></div>
      <PopularCarsSection />
      <div className="h-36"></div>
      <HowItWorksSection />
      <div className="h-36"></div>
      <ServicesSection />
      <div className="h-36"></div>
      <Footer />
    </>
  );
}
