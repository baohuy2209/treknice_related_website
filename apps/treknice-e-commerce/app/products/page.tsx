import { getAllProducts } from "@/actions/product";
import { getAllProductCategories } from "@/actions/productCategory";
import Products from "@/components/product/product";

async function ProductsPage() {
  const allproducts = await getAllProducts();
  const productCategories = await getAllProductCategories();
  return (
    <Products
      listProducts={allproducts}
      listProductCategories={productCategories}
    />
  );
}

export default ProductsPage;
