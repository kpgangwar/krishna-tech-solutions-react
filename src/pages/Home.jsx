import Hero from "../components/Hero";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Pricing from "../components/Pricing";
import { Helmet } from "react-helmet";

export default function Home() {
  return (
    <>
    <Helmet>
  <title>Krishna Tech | Website Developer in Bareilly</title>
  <meta name="description" content="Krishna Tech website, app aur digital marketing services Bareilly me provide karta hai." />
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