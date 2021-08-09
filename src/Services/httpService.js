import { API_URL } from "../Constants/API_URL";
import axios from 'axios';
export function httpServices(){

}
export async function getPokemons(url){
    try{
        const finalUrl = `${API_URL}pokemon?offset=$0&limit=20`
        const response = await axios({
            method: "GET",
            url: finalUrl,
            headers: {
                Authorization: "Bearer " + '',
            }
        });
    return {data:response.data,err:null};
    }
    catch(err){
    }
}

export async function getPokemonDetails(url){
    try{
        const response = await axios ({
            method: "GET",
            url: url,
            headers: {
                Authorization: "Bearer " + '',
            }
        });
        return {data:response,err:null};
    }
    catch(err){

    }
}