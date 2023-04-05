import React from 'react'
import { Space, Table, Button, Pagination } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { Link } from 'react-router-dom';
const ProductManagementPage = (props: any) => {

    const data = props.products.map((product: any) => {
        return {
            key: product._id,
            name: product.name,
            price: product.price,
            image: <img width={50} src={product.image} alt="" />,
            description: product.description
        }
    });
    const removeProduct = (id: string | number) => {
        props.onRemove(id);
    }
    interface DataType {
        key: string;
        name: string;
        age: number;
        address: string;
        tags: string[];
    }

    const columns: ColumnsType<DataType> = [
        {
            title: 'Product Name',
            dataIndex: 'name',
            key: 'name',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Product Price',
            dataIndex: 'price',
            key: 'price',
        },
        {
            title: 'Image',
            dataIndex: 'image',
            key: 'image',
        },
        {
            title: 'Product Description',
            dataIndex: 'description',
            key: 'description',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <Button type="primary"><Link to={`/admin/products/${record.key}/update`}> Update</Link></Button>
                    <Button type="dashed" onClick={() => removeProduct(record.key)}>Remove</Button>
                </Space>
            ),
        },
    ];
    return (
        <div>
            <Table columns={columns} dataSource={data} pagination={{ defaultPageSize: 10 }} />
        </div>
    )
}

export default ProductManagementPage