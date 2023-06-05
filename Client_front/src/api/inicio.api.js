import axios from 'axios';  
const apiUrl = axios.create({baseURL:"https://pokeapi.co/api/v2/pokemon"})
// const apiUrl = axios.create({baseURL:"http://192.168.100.4:80/api/"})
const apiPokemon = axios.create({baseURL:"https://pokeapi.co/api/v2/pokemon"})
export const get_lista =() => {
    return apiUrl.get("/monedas/");
}

export const get_detalle =(id) => {
    return apiUrl.get("/monedas/"+id+"/");
}

export const create_reg =(moneda) => {
    return apiUrl.post("/monedas/",moneda);
}

export const delete_reg =(id) => {
    return apiUrl.delete("/monedas/"+id+"/");
}


export const update_reg =(id, moneda) => {
    return apiUrl.put("/monedas/"+id+"/",moneda);
}

export const get_list_proyectos =() => {
    return apiUrl.get("/proyectos/");
}

function customizer(objValue, srcValue) {
    if (_.isArray(objValue)) {
        return objValue.concat(srcValue);
    }
}
async function ExecuteRequest(url, data) {
    // As this is a recursive function, we need to be able to pass it the prevous data. Here we either used the passed in data, or we create a new objet to hold our data.
    data = data || {};

    await axios.get(url).then(response => {
        console.log("url",url)

        // We merge the returned data with the existing data
        _.mergeWith(data, response.data, customizer);

        // We check if there is more paginated data to be obtained
        if (response.data.pageDetails.nextPageUrl != null) {

            // If nextPageUrl is not null, we have more data to grab
            return ExecuteRequest(response.data.pageDetails.nextPageUrl, data);
        }
    });

    return data;
}
export const get_apiPokemon =(data) => {
    data = data || {};
    let paginacion='?offset='+data.first+'&limit='+data.rows
    console.log("apiPokemon_paginacion",paginacion)
    console.log("apiPokemon_data",data)
    // ExecuteRequest(apiPokemon).then(data => {
    //     console.dir("data_paginated",data);
    //     return (data)
    // });
    return apiPokemon.get("/"+paginacion);
}


export const get_apiPokemon_detail=(id_pokemon) => {
    return apiPokemon.get("/"+id_pokemon+"/");
}


// API_KEY gifts
// 9aOtXAFRpGfxTFcKWtDLLala4Fd6TJrk
// https://api.giphy.com/v1/gifs
// YOURKEY="271c723c";
// http://img.omdbapi.com/?apikey=[yourkey]&

// https://pokeapi.co/api/v2/

//RGAPI-5b504cae-3d93-464c-bc69-65ae886be543