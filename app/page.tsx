import HeroSection from "@/Components/HeroSection";
import ProjectsSection from "@/Components/ProjectsSection";
import OurClientsSection from "@/Components/OurClientsSection";
import TestimonialSection from "@/Components/testimonialSection";
import BlogSection from "@/Components/BlogSection";
import FAQSection from "@/Components/FAQSection";
import Footer from "@/Components/Footer";
import ProjectSection from "@/Components/ProjectSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ProjectSection />
      <TestimonialSection />
      {/* <FAQSection /> */}
      <Footer />
    </main>
  );
}
