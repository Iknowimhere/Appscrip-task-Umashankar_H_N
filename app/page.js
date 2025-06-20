import DiscoverSection from "@/components/DiscoverSection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProductListing from "@/components/ProductListing";

export default function Home() {
  return (
     <>
      <Navbar />
      <DiscoverSection/>
      <ProductListing/>
      <Footer/>
    </>
  );
}
