import AboutSection from "@/components/home/about-section";
import BestSeller from "@/components/home/best-seller";
import FeaturedCollections from "@/components/home/featured-collection";
import HeroSection from "@/components/home/hero-section";
import NewsletterSection from "@/components/home/newsletter-section";
import TestimonialSection from "@/components/home/testimonial-section";

const HomePage = () => {
  return (
    <main>
      <HeroSection />
      <FeaturedCollections />
      <BestSeller />
      <AboutSection />
      <TestimonialSection />
      <NewsletterSection />
    </main>
  );
};
export default HomePage;
