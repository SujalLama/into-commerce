import axios from "axios";
import { API_URL, PRODUCT_PATH } from "./constants";

export async function fetchProducts() {
    try {
        const {data} = await axios.get(API_URL + PRODUCT_PATH);

        if(!data) {
            return {error: null, data: []}
        }

        return {error: null, data}
    
        
    } catch (error) {
        return {error: error, data: []}
    }

}