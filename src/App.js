import CartContainer from './componentes/CartContainer/CartContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css';
import NavBar from './componentes/NavBar/NavBar';
import CartProvider from './context/CartContext';

function App() {

  return (
    <CartProvider>
    <BrowserRouter>
      <div className="App">
      <NavBar />
        <Routes>
        <Route path="/" element={<ItemListContainer/>} /> 
        <Route path="/genero/:categoryId" element={<ItemListContainer/>} /> 
        <Route path="/item/:productId" element={<ItemDetailContainer/>} /> 
        <Route path ="/cart" element={<CartContainer/>}/>
        </Routes>
      </div>
    </BrowserRouter>
    </CartProvider>
  );
}

export default App;
