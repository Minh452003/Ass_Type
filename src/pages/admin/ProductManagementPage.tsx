import React from 'react'
import { Space, Table, Tag, Button } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { Link } from 'react-router-dom';
const ProductManagementPage = (props: any) => {
    const data = props.products.map((product: any) => {
        return {
            key: product.id,
            name: product.name,
            desc: product.desc,
            image: <img width={50} src={product.image} alt="" />
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
            title: 'Desc',
            dataIndex: 'desc',
            key: 'desc',
        },
        {
            title: 'Image',
            dataIndex: 'image',
            key: 'image',
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
            {/* <table border={1}>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Desc</th>
                        <th>Image</th>
                        <th>Chức Năng</th>
                    </tr>
                </thead>
                <tbody>
                    {props.products.map((product, index) => (
                        <tr key={product.id}>
                            <td>{index + 1}</td>
                            <td>{product.name}</td>
                            <td>{product.desc}</td>
                            <td><img width={50} src={product.image} alt="" /></td>
                            <td><button onClick={() => removeProduct(product.id)}>Remove</button></td>
                        </tr>
                    ))}

                </tbody>
            </table> */}
            <Table columns={columns} dataSource={data} />
        </div>
    )
}

export default ProductManagementPage