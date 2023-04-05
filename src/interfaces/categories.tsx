
export interface ICategory {
    _id?: number | string,
    name: string,
    description: string
}
export interface IPropsCate {
    products: any;
    onAdd: (product: ICategory) => void
}
export interface IUpdate {
    categories: ICategory[];
    onUpdate: (category: ICategory) => void
}