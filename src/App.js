import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Menu } from './components/Menu';
import { Dasboard } from './pages/Dashboard';
import { ProductManager } from './pages/ProductManager';
import { GlobalTheme } from './styles/global/GlobalTheme'

function App() {
  
  return (
    <GlobalTheme>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path='/' element={<Dasboard />} />
          <Route path='/Produtos' element={<ProductManager />} />
        </Routes>
      </BrowserRouter>
    </GlobalTheme>
  );
}

export default App
