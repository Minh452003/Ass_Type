import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { Button, Checkbox, Form, Input } from 'antd';
import { IProps } from '../../interfaces/products';


const AddProduct = (props: IProps) => {
    const navigate = useNavigate();
    const onFinish = (values: any) => {
        props.onAdd(values);
        navigate("/admin/products");
    }

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };


    return (
        <div>
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 600 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Product Name"
                    name="name"
                    rules={[{ required: true, message: 'Tên không đuọc để trống!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Desc"
                    name="desc"
                    rules={[{ required: true, message: 'Mô tả không được để trống' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Image"
                    name="image"
                    rules={[{ required: true, message: 'Link ảnh không được để trống' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        ADD PRODUCT
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default AddProduct