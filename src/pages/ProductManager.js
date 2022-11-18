import { useState } from 'react';
import { useGetAll } from '../hooks/useGetAll';
import { Category } from '../components/Category';
import { Subcategory } from '../components/Subcategory';
import { Product } from '../components/Product';
import { Section } from '../styles/ProductsManager/ProductManagerStyle';

export const ProductManager = () => {
    
    const [category, setCategory] = useGetAll('/api/category/')
    const [subcategory, setSubcategory] = useGetAll('/api/subcategory/')
    const [product, setProduct] = useGetAll('/api/product/')
    const [chosen, setChosen] = useState({category:'', subcategory:'', product:''})
    
    return (
      <Section>
        <Category 
          category={category} setCategory={setCategory} 
          chosen={chosen} setChosen={setChosen}
        />
        <Subcategory 
          subcategory={subcategory} setSubcategory={setSubcategory}
          chosen={chosen} setChosen={setChosen}
        />
        <Product 
          product={product} setProduct={setProduct}
          chosen={chosen} setChosen={setChosen}
        />
      </Section>
    );
    
   
}