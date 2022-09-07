import NavBar from './componentes/NavBar/NavBar';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import './App.css';

function App() {

  return (
    <div className="App">
          <NavBar/>
          <ItemDetailContainer />
          <ItemListContainer/>
    </div>
  );
}

export default App;
