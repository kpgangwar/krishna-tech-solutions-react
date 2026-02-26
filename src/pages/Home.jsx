import Hero from "../components/Hero";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Pricing from "../components/Pricing";
import { Helmet } from "react-helmet-async"

export default function Home() {
  return (
    <>
   [6:36 pm, 26/02/2026] Artificialflower: <Helmet>
  <title>Services | Website & App Development Bareilly</title>
  <meta name="description" content="Krishna Tech web development, app development, digital marketing aur Google Ads services provide karta hai." />
</Helmet>
[6:37 pm, 26/02/2026] Artificialflower: <Helmet>
  <title>Website & App Development Services in Bareilly | Krishna Tech Solution</title>

  <meta
    name="description"
    content="Krishna Tech Solution Bareilly me website development, mobile app development, SEO, digital marketing aur Google Ads services provide karta hai business growth ke liye."
  />

  <meta
    name="keywords"
    content="Website Development Bareilly, App Development Bareilly, SEO Services Bareilly, Digital Marketing Bareilly, Krishna Tech Solution"
  />
</Helmet>
      <Hero />
        <Services />
        <Portfolio />
        <Pricing />
        <Contact />
        <Footer />
    </>
  );
}