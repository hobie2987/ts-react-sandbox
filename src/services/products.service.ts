import Product from "../models/product";
import { CATALOG } from "../models/urls";
import axios from "axios";

export const ProductsService = {

    async getCameras(): Promise<Product[]> {
        return axios.get(`${CATALOG}?teaser=version1&currency=USD&active=true`)
            .then((resp) => resp.data)
            .then((data) => Object.values(data.cameras))
    }
}