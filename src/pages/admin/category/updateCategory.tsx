import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import { Button, Form, Input, Select } from 'antd';
import { ICategory } from '../../../interfaces/categories';

const UpdateCategory = (props: any) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [category, setCategory] = useState<ICategory>();

    useEffect(() => {
        const currentCategory = props.categories.find((category: ICategory) => category._id == id);
        setCategory(currentCategory);
    }, [props]);
    useEffect(() => {
        setFields()
    }, [category])
    const [form] = Form.useForm();
    const setFields = () => {
        form.setFieldsValue({
            id: category?._id,
            name: category?.name,
        })
    }


    const onFinish = (values: any) => {
        props.onUpdateCate(values);
        navigate("/admin/categories");
    }

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };


    return (
        <div>
            <Form
                form={form}
                layout="vertical"
                name="basic"
                labelCol={{ span: 8 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off" >

                <Form.Item
                    label=""
                    name="id"
                    style={{ display: 'none' }}
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Category Name"
                    name="name"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item >
                    <Button style={{ width: "100%", height: 35 }} type="primary" htmlType="submit">
                        UPDATE CATEGORY
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default UpdateCategory