import { IProduct } from "../interfaces/products";
import instance from "./instance";

export const getAll = () => {
    return instance.get("/products")
}
export const get = (id: number | string) => {
    return instance.get("/products/" + id);
}
export const addProduct = (product: IProduct) => {
    return instance.post("/products", product);
}
export const updateProduct = (product: IProduct) => {
    return instance.put("/products/" + product.id, product);
}
export const removeProduct = (id: number | string) => {
    return instance.delete("/products/" + id);
}