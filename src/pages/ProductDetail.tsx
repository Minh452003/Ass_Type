import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import { IProduct, IProps } from '../interfaces/products';
import { get } from '../api/product';

type ProductDetailProps = {
    products: IProduct[],
}

const ProductDetail = (props: ProductDetailProps) => {
    const { id } = useParams();
    const [product, setProduct] = useState<IProduct>({} as IProduct);

    useEffect(() => {

        (async () => {
            if (id) {
                const { data } = await get(id);
                setProduct(data);
            }

        })()

        // setProduct(data);
    }, [props])
    return (
        <div className="container">
            <div className="heading-section">
                <h2>CHI TIẾT SẢN PHẨM</h2>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <img src={product?.image} alt="" className='anh1' />
                </div>
                <div className="col-md-6">
                    <div className="product-dtl">
                        <div className="product-info">
                            <div className="product-name">{product?.name}</div>
                            <div className="reviews-counter">

                                <span>3 Reviews</span>
                            </div>
                            <div className="product-price-discount"><span>{product?.price}$</span><span className="line-through">{product?.price}$</span>
                            </div>
                        </div>
                        <p>{product?.description}</p>
                        <div className="row">
                            <div className="col-md-6">
                                <label >Phiên Bản</label>
                                <select id="size" name="size" className="form-control">
                                    <option>64G</option>
                                    <option>128G</option>
                                    <option>256G</option>
                                </select>
                            </div>
                            <div className="col-md-6">
                                <label >Màu</label>
                                <select id="color" name="color" className="form-control">
                                    <option>Blue</option>
                                    <option>Green</option>
                                    <option>Red</option>
                                </select>
                            </div>
                        </div>
                        <div className="product-count">
                            <label >Số lượng</label>
                            <form action="#" className="display-flex">
                                <div className="qtyminus">-</div>
                                <input type="text" name="quantity" value="1" className="qty" />
                                ''                                    <div className="qtyplus">+</div>
                            </form>
                            <a href="#" className="round-black-btn">Thêm vào giỏ hàng</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <div className="product-info-tabs">
                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                            <li className="nav-item">
                                <a className="nav-link1 active" id="description-tab" data-toggle="tab" href="#description"
                                    role="tab" aria-controls="description" aria-selected="true">Thông Tin</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link1" id="review-tab" data-toggle="tab" href="#review" role="tab"
                                    aria-controls="review" aria-selected="false">Reviews (0)</a>
                            </li>
                        </ul>
                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade show active" id="description" role="tabpanel"
                                aria-labelledby="description-tab">
                                {product?.description}
                            </div>
                            <div className="tab-pane fade" id="review" role="tabpanel" aria-labelledby="review-tab">
                                <div className="review-heading">REVIEWS</div>
                                <p className="mb-20">There are no reviews yet.</p>
                                <form className="review-form">
                                    <div className="form-group">
                                        <label>Đánh giá</label>
                                        <div className="reviews-counter">

                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label>Nội dung</label>
                                        <textarea className="form-control" rows={10}></textarea>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input type="text" name="" className="form-control" placeholder="Name*" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input type="text" name="" className="form-control" placeholder="Email Id*" />
                                            </div>
                                        </div>
                                    </div>
                                    <button className="round-black-btn">Gửi</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )

}

export default ProductDetail