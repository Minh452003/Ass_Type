import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { Button, Checkbox, Col, Form, Input, Row, Select, Image, message } from 'antd';
import { IProps } from '../../interfaces/products';


const AddProduct = (props: any) => {
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
            <Row>
                <Col span={12}><Image
                    width={'80%'}
                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                /></Col>
                <Col span={12}>
                    <Form
                        layout="vertical"
                        name="basic"
                        labelCol={{ span: 8 }}
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <Form.Item
                            label="Product Name"
                            name="name"
                            hasFeedback
                            rules={[{ required: true, message: 'Tên không được để trống!' }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Product Price"
                            name="price"
                            hasFeedback
                            rules={[{ required: true, message: 'Giá không đuợc để trống!' }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Image"
                            name="image"
                            hasFeedback
                            rules={[{ required: true, message: 'Link ảnh không được để trống' }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Desc"
                            name="description"
                            hasFeedback
                            rules={[{ required: true, message: 'Mô tả không được để trống' }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item label="Select" name="categoryId" rules={[{ required: true, message: 'Danh mục không được để trống!' }]}>
                            <Select>
                                {props.categories.map((category: any) => {
                                    return <Select.Option key={category?._id} value={category._id}>{category.name}</Select.Option>
                                })}
                            </Select>
                        </Form.Item>
                        <Form.Item >
                            <Button style={{ width: "100%", height: 35 }} type="primary" htmlType="submit">
                                ADD PRODUCT
                            </Button>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>

        </div>
    )
}

export default AddProduct