import { createContext } from "react";
import { useGetAll } from "../hooks/useGetAll";

export const ProductContext = createContext()

export default function ProductProvider({children}){
    const [category, setCategory] = useGetAll('/api/category/')
    const [subcategory, setSubcategory] = useGetAll('/api/subcategory/')
    const [product, setProduct] = useGetAll('/api/product/')
    const [inventory, setInventory] = useGetAll('/api/inventory/')

    return(
        <ProductContext.Provider value={{
            category, setCategory, 
            subcategory, setSubcategory, 
            product, setProduct,
            inventory, setInventory
        }}>
            {children}
        </ProductContext.Provider>
    )
}
    