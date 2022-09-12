import NavBar from './componentes/NavBar/NavBar';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
      <NavBar />
        <Routes>
        <Route path="/" element={<ItemListContainer/>} /> 
        <Route path="/genero/:categoryId" element={<ItemListContainer/>} /> 
        <Route path="/detail" element={<ItemDetailContainer/>} /> 
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
