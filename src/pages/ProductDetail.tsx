import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"

const ProductDetail = (props) => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    useEffect(() => {
        setProduct(props.products.find(product => product.id == id))
    }, [props])
    return (
        <div>
            <img src={product?.image} alt="" />
            <p>{product?.name}</p>
            <p>{product?.desc}</p>
        </div>
    )
}

export default ProductDetail