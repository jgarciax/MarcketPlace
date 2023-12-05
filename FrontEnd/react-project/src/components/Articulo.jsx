import './Articulo.css'

function Articulo({ articulo, onComprar }) {
    return (
      <div>
        <h2>{articulo.nombre}</h2>
        <p>{articulo.descripcion}</p>
        <button onClick={() => onComprar(articulo)}>Comprar</button>
      </div>
    );
  }

  export default Articulo