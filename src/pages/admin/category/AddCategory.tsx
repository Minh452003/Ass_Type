import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { Button, Checkbox, Col, Form, Input, Row, Select, Image } from 'antd';
import { ICategory } from '../../../interfaces/categories';

type Props = {}

const AddCategory = (props: any) => {
    const navigate = useNavigate();
    const onFinish = (values: any) => {
        props.onAddCate(values);
        navigate("/admin/categories");
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
                            label="Category Name"
                            name="name"
                            rules={[{ required: true, message: 'Tên danh mục không được để trống!' }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item >
                            <Button style={{ width: "100%", height: 35 }} type="primary" htmlType="submit">
                                ADD CATEGORY
                            </Button>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>

        </div>
    )
}

export default AddCategory