import { ICategory } from "../interfaces/categories";
import instance from "./instance";
const { accessToken } = JSON.parse(localStorage.getItem('user')!)
export const getAllCategory = () => {
    return instance.get("/categories")
}
export const getCategory = (id: number | string) => {
    return instance.get("/categories/" + id);
}
export const addCategory = (category: ICategory) => {
    return instance.post("/categories", category, {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    }
    );
}
export const updateCategory = (category: ICategory) => {
    return instance.put("/categories/" + category._id, category);
}
export const removeCategory = (id: number | string) => {
    return instance.delete("/categories/" + id, {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    });
}