import NavBar from './componentes/NavBar/NavBar';
import ItemList from './componentes/Main/ItemList'
import './App.css';

function App() {

  const ejemplo = {
    titulo: "BLEACHED PUNK - KAOS07",
    imagen: './recursos/img/tapa1.jpg',
    precio: '6500',
  }

  return (
    <div className="App">
          <NavBar/>
          <ItemList producto={ejemplo}/>
    </div>
  );
}

export default App;
