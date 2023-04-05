import React from 'react'
import { Space, Table, Button } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { Link } from 'react-router-dom';
const CategoryPage = (props: any) => {

    const data = props.categories.map((category: any) => {
        return {
            key: category._id,
            name: category.name,
        }
    });
    const removeCategory = (id: string | number) => {
        props.onRemoveCate(id);
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
            title: 'Category Name',
            dataIndex: 'name',
            key: 'name',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <Button type="primary"><Link to={`/admin/categories/${record.key}/update`}> Update</Link></Button>
                    <Button type="dashed" onClick={() => removeCategory(record.key)}>Remove</Button>
                </Space>
            ),
        },
    ];
    return (
        <div>
            <Table columns={columns} dataSource={data} />
        </div>
    )
}

export default CategoryPage