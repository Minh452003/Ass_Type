import React, { useState } from 'react';
import { Carousel, Col, Row, Divider, List, Typography, Card } from 'antd';
import { Link } from 'react-router-dom';
import { PlusSquareOutlined } from '@ant-design/icons'
import { useNavigate, useParams } from "react-router-dom"
import { IProduct } from '../interfaces/products';

const style: React.CSSProperties = { background: '#0092ff', padding: '8px 0' };
interface IProducts {
    products: IProduct[]
}

const contentStyle: React.CSSProperties = {
    lineHeight: '350px',
    textAlign: 'center',
    background: '#364d79',
};
const ProductsPage = (props: IProducts) => {
    const navigate = useNavigate();

    return (
        <div>
            <Carousel autoplay>
                <div>
                    <h3 style={contentStyle}><img width={'100%'} height={350} src="https://thietkehaithanh.com/wp-content/uploads/2019/06/huong-dan-thiet-ke-banner-dien-thoai-bang-photoshop.jpg" alt="" /></h3>
                </div>
                <div>
                    <h3 style={contentStyle}><img width={'100%'} height={350} src="https://img3.thuthuatphanmem.vn/uploads/2019/10/08/banner-quang-cao-dien-thoai-dep_103211368.jpg" alt="" /></h3>
                </div>
                <div>
                    <h3 style={contentStyle}><img width={'100%'} height={350} src="https://img3.thuthuatphanmem.vn/uploads/2019/10/08/banner-quang-cao-gioi-thieu-san-pham_103215430.jpg" alt="" /></h3>
                </div>
                <div>
                    <h3 style={contentStyle}><img width={'100%'} height={350} src="https://www.playquatrogames.com.br/images/webp-banners/banner-xiaomi-curitiba-redmi-8-redmi9.webp" alt="" /></h3>
                </div>
            </Carousel>
            <div className="container">
                <div className="row">
                    <div style={{ height: 50 }} className="card-header bg-success text-white text-uppercase text-center">
                        <PlusSquareOutlined /> <p style={{ marginTop: 1 }}>Tất cả sản phẩm</p>
                    </div>
                    <div className="row">
                        {props.products.map((product: any) => {
                            return <div className="col-12 col-md-6 col-lg-3 mt-2" key={product._id}>
                                <div className="card">
                                    <a href=""><img src={product.image} alt="" width={'100%'} /></a>
                                    <div className="card-body">
                                        <h5 className="card-title" style={{ textAlign: 'center' }}><Link style={{ textDecoration: 'none' }} to={`/products/${product._id}`}>{product.name}</Link>
                                        </h5>
                                        <div className="row">
                                            <div className="col" style={{ textAlign: 'center' }}>
                                                <p style={{ fontSize: 18 }} className="btn font-weight-bold text-danger">${product.price}</p>
                                            </div>
                                        </div>
                                        <form  >
                                            <input type="submit" className='btn btn-danger btn-block' value={'MUA NGAY'} />
                                        </form>
                                    </div>
                                </div>
                            </div>
                        })}

                    </div>

                </div>
            </div>
        </div>
    )
}

export default ProductsPage