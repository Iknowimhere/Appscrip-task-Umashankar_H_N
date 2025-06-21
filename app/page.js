import DiscoverSection from "@/components/DiscoverSection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProductListing from "@/components/ProductListing";

async function getProducts() {
  try {
    const res = await fetch('https://fakestoreapi.com/products', { 
      next: { revalidate: 3600 },
      headers: {
        'Accept': 'application/json',
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=7200'
      }
    });
    
    if (!res.ok) {
      throw new Error(`Failed to fetch products: ${res.status}`);
    }
    
    return res.json();
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
}

export default async function Home() {
  const products = await getProducts();
  
  return (
     <>
      <Navbar />
      <DiscoverSection/>
      <ProductListing initialProducts={products}/>
      <Footer/>
    </>
  );
}
