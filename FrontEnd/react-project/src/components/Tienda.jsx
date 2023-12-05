import { useState } from 'react';
import ListaArticulos from './ListarArticulos';
import './Tienda.css'

function Tienda() {
  const [articulos, setArticulos] = useState([
    { id: 1, nombre: 'Artículo 1', descripcion: 'Este es el artículo 1' },
    { id: 2, nombre: 'Artículo 2', descripcion: 'Este es el artículo 2' },
    // Agrega aquí más artículos si lo deseas
  ]);

  const comprarArticulo = (articuloComprado) => {
    setArticulos(articulos.filter(articulo => articulo.id !== articuloComprado.id));
  };

  return (
    <div>
      <h1>Mi Tienda</h1>
      <ListaArticulos articulos={articulos} onComprar={comprarArticulo} />
    </div>
  );
}

export default Tienda;