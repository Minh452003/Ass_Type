
export interface IProduct {
    _id?: number | string,
    name: string,
    price: number,
    image: string,
    description: string,
    categoryId: number | string
}
export interface IProps {
    products: any;
    onAdd: (product: IProduct) => void
}
export interface IUpdate {
    products: IProduct[];
    onUpdate: (product: IProduct) => void
}