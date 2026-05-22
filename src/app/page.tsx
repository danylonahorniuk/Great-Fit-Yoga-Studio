import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Classes from "@/components/Classes";
import Team from "@/components/Team";
import Gallery from "@/components/Gallery";
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
import { LanguageProvider } from "@/contexts/LanguageContext";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SportsActivityLocation",
  name: "Great Fit Yoga Studio",
  description: "Студія йоги у Києві для будь-якого рівня підготовки. Хатха, флай-йога, інь-йога, аштанга, зумба.",
  url: "https://greatfit.ua",
  telephone: "+380441234567",
  email: "info@greatfit.ua",
  image: "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?w=1200&q=85",
  address: {
    "@type": "PostalAddress",
    streetAddress: "вул. Хрещатик, 22, офіс 5",
    addressLocality: "Київ",
    postalCode: "01001",
    addressCountry: "UA",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 50.4501,
    longitude: 30.5234,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "21:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "09:00",
      closes: "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Sunday"],
      opens: "09:00",
      closes: "17:00",
    },
  ],
  priceRange: "$$",
  currenciesAccepted: "UAH",
  paymentAccepted: "Cash, Credit Card",
};

export default function Home() {
  return (
    <LanguageProvider>
    <ModalProvider>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <Hero />
      <Services />
      <Classes />
      <Pricing />
      <Testimonials />
      <Team />
      <Gallery />
      <Contacts />
      <FAQ />
      <Membership />
      <Footer />
      <BookingModal />
      <ContactModal />
      <ServiceModal />
    </ModalProvider>
    </LanguageProvider>
  );
}
