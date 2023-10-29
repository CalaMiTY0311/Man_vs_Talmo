import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

const HeaderBanner = () => {
    return (
        <div className="static-slider-head">
            <Container>
                <Row className="justify-content-center">
                    <Col lg="8" md="6" className="align-self-center text-center">
                        <h1 className="title">Man vs 탈모</h1>
                        <h4 className="subtitle font-light">bald waring score<br /> i service for you</h4>
                        <Link smooth to="/#survey-section" className="btn btn-md m-t-30 btn-info-gradiant font-14">go go bald waring test</Link>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default HeaderBanner;