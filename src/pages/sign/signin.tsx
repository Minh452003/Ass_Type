import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { Button, Checkbox, Col, Form, Input, Row, Select, Image } from 'antd';
import { signIn } from '../../api/auth';
type Props = {}

const Signin = (props: Props) => {
    const navigate = useNavigate();
    const onFinish = async (values: any) => {
        const { data: user } = await signIn(values);
        localStorage.setItem("user", JSON.stringify(user));
        navigate("/admin");
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
                            label="Email"
                            name="email"
                            rules={[{ required: true, message: 'Email không được để trống!' }, { type: 'email', message: 'Email phải đúng định dạng' }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[{ required: true, message: 'Mật khẩu không được để trống!' }, { min: 6, message: 'Mật khẩu ít nhất 6 kí tự' }]}
                        >
                            <Input.Password />
                        </Form.Item>
                        <div className="form-group">
                            <a href="index.php?act=quenmk" className="float-right">Quên mật khẩu?</a>
                        </div>
                        <Form.Item >
                            <Button style={{ width: "100%", height: 35 }} type="primary" htmlType="submit">
                                LOGIN
                            </Button>
                        </Form.Item>
                        <div className="form-group">
                            <p style={{ textAlign: 'center' }}>Đã có tài khoản?<Link to={'/signup'}>Đăng ký</Link></p>
                        </div>
                    </Form>
                </Col>
            </Row>

        </div>
    )
}

export default Signin