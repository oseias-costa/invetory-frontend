import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Menu } from './components/Menu';
import { Dasboard } from './pages/Dashboard';
import { ProductManager } from './pages/ProductManager';


function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
      <Menu />
        <Routes>
          <Route path='/' element={<Dasboard />} />
          <Route path='/Produtos' element={<ProductManager />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
