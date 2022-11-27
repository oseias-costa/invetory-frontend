import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Menu } from './components/Menu';
import ProductProvider from './context/ProductContext';
import { Dasboard } from './pages/Dashboard';
import { Inventory } from './pages/Inventory';
import { StockMovement } from './pages/StockMovement';
import { ProductManager } from './pages/ProductManager';
import { AppStyle } from './styles/global/AppStyle';
import { GlobalTheme } from './styles/global/GlobalTheme'

function App() {
  
  return (
    <AppStyle>
      <ProductProvider>
        <BrowserRouter>
          <GlobalTheme />
          <Menu />
          <Routes>
            <Route path='/' element={<Dasboard />} />
            <Route path='/Produtos' element={<ProductManager />} />
            <Route path='/Estoque/*' element={<Inventory />} />
            <Route path='/Vendas/*' element={<StockMovement />} />
          </Routes>
        </BrowserRouter>
      </ProductProvider>
    </AppStyle>
  );
}

export default App
