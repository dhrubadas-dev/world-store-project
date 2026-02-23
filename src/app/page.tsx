import GiftPostcard from "@/components/GiftPostcard";
import FeaturesSection from "@/components/HomeComponent/FeaturesSection";
import HeroHome from "@/components/HomeComponent/HeroHome";
import ProductsSection from "@/components/HomeComponent/ProductsSection";
import TestimonialsSection from "@/components/HomeComponent/TestimonialsSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | World Store",
  description: "Home page of World Store",
};

const page = () => {
  return (
    <>
      {/* Hero Section Start */}
      <HeroHome />
      {/* Hero Section End */}

      {/* Products Section Start */}
      <ProductsSection />
      {/* Products Section End */}

      {/* Testimonials Section Start */}
      <TestimonialsSection />
      {/* Testimonials Section End */}

      {/* Call to Action Section Start */}
      <GiftPostcard />
      {/* Call to Action Section End */}

      {/* Features Section Start */}
      <FeaturesSection />
      {/* Features Section End */}
    </>
  );
};

export default page;
