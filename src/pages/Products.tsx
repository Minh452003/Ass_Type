import React from 'react'
import { useNavigate, useParams } from "react-router-dom"

const Products = (props) => {
    const { id } = useParams();
    const navigate = useNavigate();

    return (
        <div>
            {props.products.map((product) => (
                <div className="container" key={product.id}>
                    <img src={product.image} alt="" />
                    <a href="">{product.name}</a>
                    <p>{product.desc}</p>
                </div>
            ))}

        </div>
    )
}

export default Products