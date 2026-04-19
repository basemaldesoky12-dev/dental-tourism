import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/landing/Hero";
import HowItWorks from "@/components/landing/HowItWorks";
import SavingsComparison from "@/components/landing/SavingsComparison";
import Accommodation from "@/components/landing/Accommodation";
import Testimonials from "@/components/landing/Testimonials";
import CtaBanner from "@/components/landing/CtaBanner";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <HowItWorks />
      <SavingsComparison />
      <Accommodation />
      <Testimonials />
      <CtaBanner />
      <Footer />
    </>
  );
}
