import { PlusSquareOutlined } from '@ant-design/icons'
import React, { useEffect, useState } from 'react'
import { useParams, Link } from "react-router-dom"
import { IProduct } from '../interfaces/products'
import { ICategory } from '../interfaces/categories'
import { getCategory } from '../api/category'
import { getAll } from '../api/product'
type Props = {
    products: IProduct[],
    categories: ICategory[]
}

const CategoryDetail = (props: Props) => {
    const { id } = useParams();
    const [category, setCategory] = useState<ICategory>({} as ICategory);
    const [product, setProduct] = useState<IProduct[]>([]);

    useEffect(() => {

        (async () => {
            if (id) {
                const { data } = await getCategory(id);
                setCategory(data);
            }

        })()

        // setProduct(data);
    }, [props])
    useEffect(() => {
        (async () => {

            const { data: { docs } } = await getAll();
            const newProducts = docs.filter((item: IProduct) => item.categoryId == id);
            setProduct(newProducts);


        })()
    }, [props])

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-3">
                        <div className="card bg-light mb-3">
                            <form className="pb-3" action="index.php?act=sanpham" method="post">
                                <div className="input-group">
                                    <input type="text" className='form-control' placeholder="Tìm kiếm sản phẩm..." />
                                    <div className="input-group-append">
                                        <input type="submit" className='btn btn-success' value="Tìm kiếm" />
                                    </div>
                                </div>
                            </form>
                            <div className="card-header bg-secondary text-white text-uppercase"><i className="fa fa-list"></i> Danh mục
                            </div>
                            <ul className="list-group category_block">
                                {props.categories.map((category: any) => {
                                    return <li className="list-group-item" key={category._id}><Link style={{ textDecoration: 'none' }} to={category._id}>{category.name}</Link></li>
                                })}

                            </ul>
                        </div>
                    </div>
                    <div className="col">
                        <div style={{ height: 50 }} className="card-header bg-success text-white text-uppercase text-center">
                            <PlusSquareOutlined /> <p style={{ marginTop: 1 }}>{category.name}</p>
                        </div>
                        <div className="row">
                            {product?.map((product: IProduct) => {
                                return <div className="col-12 col-md-6 col-lg-4 mt-2" key={product._id}>
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
        </div>
    )
}

export default CategoryDetail