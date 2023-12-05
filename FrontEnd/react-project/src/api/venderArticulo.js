import axios from 'axios';

async function venderArticulo(articulo) {
    try{
        await axios.post('/api/vender', articulo);
    }catch (error) {
        console.log(error);
    }
}

export default venderArticulo;