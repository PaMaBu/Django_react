import axios from 'axios';  

const apiUrl = axios.create({baseURL:"http://192.168.100.4:80/api/"})
const apiPokemon = axios.create({baseURL:"https://pokeapi.co/api/v2/pokemon"})
export const get_lista =() => {
    // return axios.get("http://192.168.100.4/api/monedas/")
    return apiUrl.get("/monedas/");
}

export const get_detalle =(id) => {
    // return axios.get("http://192.168.100.4/api/monedas/")
    return apiUrl.get("/monedas/"+id+"/");
}

export const create_reg =(moneda) => {
    // return axios.post("http://192.168.100.4/api/monedas/")
    return apiUrl.post("/monedas/",moneda);
}

export const delete_reg =(id) => {
    // return axios.post("http://192.168.100.4/api/monedas/")
    return apiUrl.delete("/monedas/"+id+"/");
}


export const update_reg =(id, moneda) => {
    // return axios.post("http://192.168.100.4/api/monedas/")
    return apiUrl.put("/monedas/"+id+"/",moneda);
}

export const get_list_proyectos =() => {
    // return axios.post("http://192.168.100.4/api/monedas/")
    return apiUrl.get("/proyectos/");
}

export const get_apiPokemon =() => {
    // return axios.get("http://192.168.100.4/api/monedas/")
    return apiPokemon.get("/");
}

export const get_apiPokemon_detail=(id_pokemon) => {
    // return axios.get("http://192.168.100.4/api/monedas/")
    return apiPokemon.get("/"+id_pokemon+"/");
}


// API_KEY gifts
// 9aOtXAFRpGfxTFcKWtDLLala4Fd6TJrk
// https://api.giphy.com/v1/gifs
// YOURKEY="271c723c";
// http://img.omdbapi.com/?apikey=[yourkey]&

// https://pokeapi.co/api/v2/

//RGAPI-5b504cae-3d93-464c-bc69-65ae886be543