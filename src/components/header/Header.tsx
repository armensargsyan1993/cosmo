import React from 'react';
import {Container,Row,Col, Alert} from 'react-bootstrap';

import LogoComponent from './Logo';
import NavbarToggleComponent from './navbar/NavbarToggle';

const Header = () => {
    return(
        <header className="header">
            <Container>
                <Row>
                    <Col>
                        <LogoComponent/>
                    </Col>
                    <Col>
                        <NavbarToggleComponent/>
                    </Col>
                </Row>
            </Container>
        </header>
    )
}

export default Header

