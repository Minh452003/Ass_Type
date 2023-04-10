import React, { useEffect } from 'react';
import { Col, Divider, Row } from 'antd';
import { useNavigate } from "react-router-dom";

const style: React.CSSProperties = { background: '#0092ff', padding: '8px 0' };
const Dashboard = () => {
    const navigate = useNavigate();
    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (!storedUser) {
            navigate('/');
            return;
        }
        const { user: { role } } = JSON.parse(storedUser);
        if (role !== "admin") {
            navigate('/');
        }
    })
    return (
        <div>
            <Divider orientation="left">Horizontal</Divider>
            <Row gutter={16}>
                <Col className="gutter-row" span={6}>
                    <div style={style}>col-6</div>
                </Col>
                <Col className="gutter-row" span={6}>
                    <div style={style}>col-6</div>
                </Col>
                <Col className="gutter-row" span={6}>
                    <div style={style}>col-6</div>
                </Col>
                <Col className="gutter-row" span={6}>
                    <div style={style}>col-6</div>
                </Col>
            </Row>
        </div>
    )
}

export default Dashboard