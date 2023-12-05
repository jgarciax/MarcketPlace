import axios from 'axios';

async function comprarArticulo(id) {
    try{
        await axios.post('/api/comprar', {id});
    }catch(error) {
        console.log(error);
    }
}

export default comprarArticulo;