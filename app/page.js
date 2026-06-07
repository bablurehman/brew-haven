import Hero from "@/components/sections/Hero";
import AboutSection from "@/components/sections/AboutSection";
import FeaturedMenu from "@/components/sections/FeaturedMenu";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import GallerySection from "@/components/sections/GallerySection";
import Testimonials from "@/components/sections/Testimonials";
import ReservationSection from "@/components/sections/ReservationSection";


export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <WhyChooseUs />
      <FeaturedMenu />
      <GallerySection />
      <Testimonials />
      <ReservationSection />
    </>
  );
}