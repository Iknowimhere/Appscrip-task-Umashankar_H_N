import DiscoverSection from "@/components/DiscoverSection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProductListingPage from "@/pages/product-listing";


export default function Home() {
  return (
     <>
      <Navbar />
      <DiscoverSection/>
      <ProductListingPage/>
      <Footer/>
    </>
  );
}
