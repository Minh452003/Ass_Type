import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import { Button, Form, Input } from 'antd';
import { IProduct, IUpdate } from '../../interfaces/products';
import { useForm } from "react-hook-form";

const UpdateProduct = (props: IUpdate) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState<IProduct>();

    useEffect(() => {
        const currentProduct = props.products.find((product: IProduct) => product.id == Number(id));
        setProduct(currentProduct);
    }, [props]);
    useEffect(() => {
        setFields()
    }, [product])
    const [form] = Form.useForm();
    const setFields = () => {
        form.setFieldsValue({
            id: product?.id,
            name: product?.name,
            desc: product?.desc,
            image: product?.image
        })
    }
    const onFinish = (values: any) => {
        props.onUpdate(values);
        navigate("/admin/products");
    }

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };


    return (
        <div>
            <Form form={form} style={{ maxWidth: 600 }} onFinish={onFinish} >

                <Form.Item
                    label=""
                    name="id"
                    style={{ display: 'none' }}
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>


                <Form.Item
                    label="Product Name"
                    name="name"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Product Desc"
                    name="desc"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Product Image"
                    name="image"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Update Product
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default UpdateProduct