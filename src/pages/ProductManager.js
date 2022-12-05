import { useState } from 'react';
import { Category } from '../components/Category';
import { Subcategory } from '../components/Subcategory';
import { Product } from '../components/Product';
import { ProductColumns, Section } from '../styles/ProductsManager/ProductManagerStyle';
import { GiSofa } from 'react-icons/gi';
import { TopPage } from '../styles/global/components/TopPage';

export const ProductManager = () => {
    const [chosen, setChosen] = useState({category:'', subcategory:'', product:''})
    
    return (
      <Section>
        <TopPage>
         <GiSofa />
         <h2>Produtos</h2>
        </TopPage> 
        <ProductColumns>
          <Category 
            chosen={chosen} 
            setChosen={setChosen}
          />
          <Subcategory 
            chosen={chosen}
            setChosen={setChosen}
          />
          <Product 
            chosen={chosen} 
            setChosen={setChosen}
          />
      </ProductColumns>
      </Section>
    );
    
   
}