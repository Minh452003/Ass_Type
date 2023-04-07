import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { Button, Checkbox, Col, Form, Input, Row, Select, Image } from 'antd';
import { signUp } from '../../api/auth';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
type Props = {}

const SignUp = (props: any) => {
    const navigate = useNavigate();
    const [passwordVisible, setPasswordVisible] = React.useState(false);
    const onFinish = (values: any) => {
        signUp(values);
        navigate("/signin");
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
                            label="Username"
                            name="name"
                            hasFeedback
                            rules={[{ required: true, message: 'Tên không được để trống!' }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Email"
                            name="email"
                            hasFeedback
                            rules={[{ required: true, message: 'Email không được để trống!' }, { type: 'email', message: 'Email phải đúng định dạng' }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Password"
                            name="password"
                            hasFeedback
                            rules={[{ required: true, message: 'Mật khẩu không được để trống!' }, { min: 6, message: 'Mật khẩu ít nhất 6 kí tự' }]}>
                            <Input.Password iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                            />
                        </Form.Item>
                        <Form.Item
                            label="Confirm Password"
                            name="confirmpassword"
                            dependencies={['password']}
                            hasFeedback
                            rules={[{ required: true, message: 'Nhập lại mật khẩu không được để trống!' }, ({ getFieldValue }) => ({
                                validator(value) {
                                    if (!value || getFieldValue('password') === value) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject('Mật khẩu không khớp');
                                },
                            }),]}
                        >
                            <Input.Password />
                        </Form.Item>
                        <Form.Item >
                            <Button style={{ width: "100%", height: 35 }} type="primary" htmlType="submit" danger>
                                SIGN UP
                            </Button>
                        </Form.Item>
                        <div className="form-group">
                            <p style={{ textAlign: 'center' }}>Chưa có tài khoản?<Link to={'/signin'}>Đăng nhập</Link></p>
                        </div>
                    </Form>
                </Col>
            </Row>

        </div>
    )
}

export default SignUp