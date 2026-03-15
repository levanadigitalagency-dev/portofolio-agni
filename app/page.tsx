import HeroSection from "@/Components/HeroSection";
import ProjectsSection from "@/Components/ProjectsSection";
import OurClientsSection from "@/Components/OurClientsSection";
import TestimonialSection from "@/Components/testimonialSection";
import BlogSection from "@/Components/BlogSection";
import FAQSection from "@/Components/FAQSection";
import Footer from "@/Components/Footer";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ProjectsSection />
      <TestimonialSection />
      <BlogSection />
      {/* <FAQSection /> */}
      <Footer />
    </main>
  );
}
