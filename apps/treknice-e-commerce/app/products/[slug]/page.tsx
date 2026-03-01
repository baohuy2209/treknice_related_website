import { getProductById } from "@/actions/product";
import { getSizeById } from "@/actions/sizeProductVariant";
import ProductDetail from "@/components/product/product-detail";
type ProductSizeRef = {
  _key: string;
  _ref: string;
  _type: string;
};
async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = await getProductById(slug);
  if (product.sizes) {
    const listSize = await Promise.all(
      product.sizes.map(async (size: ProductSizeRef) => {
        return getSizeById(size._ref);
      }),
    );
    product.sizes = listSize;
  }

  return <ProductDetail product={product} />;
}

export default ProductDetailPage;
