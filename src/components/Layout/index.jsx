import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Sidebar from "../Sidebar";

export default function AuthLayout(props) {
    return (
        <>
            <Container fluid>
                <Row className="ps-md-0 pe-md-3">
                    <Col md={12} lg={2} className='ps-md-0'>
                        <Sidebar /> 
                    </Col>
                    <Col md={12} lg={10}>
                        {props.children}
                    </Col>
                </Row>
            </Container>
        </>
    );
}