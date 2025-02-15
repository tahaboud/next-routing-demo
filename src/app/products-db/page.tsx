import { getProducts } from "@/prisma-db";
import { ProductDetails } from "./product-details";

type Product = {
    id: number;
    title: string;
    price: number;
    description: string | null;
}

const ProductsDBPage = async ({searchParams}: {searchParams: Promise<{query?: string}>}) => {
    const {query} = await searchParams;
    const products: Product[] = await getProducts(query);

    return <ProductDetails products={products} />
}

export default ProductsDBPage;