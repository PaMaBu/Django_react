import axios from 'axios';  

const apiUrl = axios.create({baseURL:"http://192.168.100.4:80/api/"})

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
