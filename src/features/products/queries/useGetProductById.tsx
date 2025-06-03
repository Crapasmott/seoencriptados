import { useQuery } from "@tanstack/react-query";
import { getAllProducts } from "../services";
import { Product } from "@/features/products/types/AllProductsResponse";


// export const useGetProductById = (id: string) => {
//   const query = useQuery({
//     queryKey: PRODUCT_BY_ID_QUERY_KEY,
//     queryFn: () => getProductById(id),
//   });

//   return query;
// };

export function useGetProductByIdUpdate(
  productId: string,
  categoryId: number
) {
  return useQuery<
    Product [], 
    Error,            
    Product | null,       
    [string, number]  
  >({
    queryKey: ["allProducts", categoryId],
    queryFn: async () => {
      const arr = await getAllProducts(categoryId);
      console.log("📦 getAllProducts devolvió:", arr);
      return arr;
    },
    select: (allProducts: Product[]) => {
      const pid = parseInt(productId, 10);
      console.log("🔍 allProducts en select:", allProducts);
      console.log("🔍 buscando ID:", pid);
      return allProducts.find((p) => p.id === pid) || null;
    },
    enabled: !!productId,
  });
}