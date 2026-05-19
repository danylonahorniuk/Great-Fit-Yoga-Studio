import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Classes from "@/components/Classes";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import Contacts from "@/components/Contacts";
import FAQ from "@/components/FAQ";
import Membership from "@/components/Membership";
import Footer from "@/components/Footer";
import { ModalProvider } from "@/components/modals/ModalContext";
import BookingModal from "@/components/modals/BookingModal";
import ContactModal from "@/components/modals/ContactModal";
import ServiceModal from "@/components/modals/ServiceModal";

export default function Home() {
  return (
    <ModalProvider>
      <Navbar />
      <Hero />
      <Services />
      <Classes />
      <Pricing />
      <Testimonials />
      <Team />
      <Contacts />
      <FAQ />
      <Membership />
      <Footer />
      <BookingModal />
      <ContactModal />
      <ServiceModal />
    </ModalProvider>
  );
}
