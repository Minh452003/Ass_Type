
export interface IProduct {
    id: number | string
    name: string,
    desc: string | number,
    image: string
}
export interface IProps {
    products: any;
    onAdd: (product: IProduct) => void
}
export interface IUpdate {
    products: IProduct[];
    onUpdate: (product: IProduct) => void
}