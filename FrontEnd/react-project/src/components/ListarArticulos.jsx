import Articulo from "./Articulo";

function ListarArticulos ({articulos, onComprar}) {
    return (
        <div>
            {articulos.map((articulo) => (
                <Articulo key={articulo.id} articulo={articulo} onComprar={onComprar}/>
            ))}
        </div>
    )
}

export default ListarArticulos;