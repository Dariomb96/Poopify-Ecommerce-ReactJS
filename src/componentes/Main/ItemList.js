import './style.css';
import tapa from '../../recursos/img/tapa1.jpg';
import ItemCount from '../ItemCount/ItemCount'

const ItemList = ({producto}) => {

    const {titulo, imagen, precio} = producto;

    return(
        <div className="lista-items">
            <img src={tapa} className="cover" alt="tapa producto" /> {/* aca intente asignarle la prop abstracta imagen para llamarla */}
            <h2>{titulo}</h2>                                        {/* desde la propiedad del objeto ejemplo pero no logro hacerla funcionar */}
            <span>{precio} $</span>
            <ItemCount stock={10} initial={1}/>
        </div> 
    )
}

export default ItemList;