import {useState, useEfecct} from 'react';
import axios from 'axios'
import ListarArticulos from './ListarArticulos';

function Tienda(){
    const [articulos, setArticulos] = useState([]);

    useEfecct(() => {
        const obtenerArticulos = async () => {
            try {
                const respuesta = await axios.get('./apiEJEMPLOARTICULOS')
                setArticulos(respuesta.data);
            }catch (error) {
                console.log(error);
            }
        };

        obtenerArticulos();
    }, []);

    const comprarArticulo = async (articuloComprado) => {
        try{
            await axios.post('/apiEJEMPLOCOMPRAR', {id: articuloComprado.id});
            setArticulos(articulos.filter(articulo => articulo.id !== articuloComprado.id));
        }catch(error) {
            console.log(error);
        }
    };

    return (
        <div>
            <h1>Mi Tienda</h1>
            <ListarArticulos articulos={articulos} onComprar={comprarArticulo}/>
        </div>
    )
}

export default Tienda;