import * as axios from "axios";

let instance = axios.create({
    baseURL: 'http://localhost:3000/'
})
export const ProductsApi = {
    async getProducts (){
        let response = await instance.get(`/db.json`)
        return response.data.products
    },

}

