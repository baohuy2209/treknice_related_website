import { getTopSellingProducts } from "@/actions/product";
import HomePage from "@/components/home";

export default async function Home() {
  const products = await getTopSellingProducts();
  return <HomePage products={products} />;
}
