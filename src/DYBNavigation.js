import React from 'react'
import { Navbar,Nav,Container,NavbarBrand } from 'react-bootstrap'

const DYBNavigation = () => {
    return (
        <Navbar collapseOnSelect fixed='top' expand='sm' bg='primary' variant='dark' style={{ backgroundColor: "#071740", position: "sticky" }}>
            <Container>
                <NavbarBrand href='/'>Do Your Best</NavbarBrand>
                <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                <Navbar.Collapse id='responsive-navbar-nav'>
                    <Nav>
                        <Nav.Link href='/'>Home</Nav.Link>
                        <Nav.Link href='/About'>About</Nav.Link>
                        <Nav.Link href='/ContactUs'>ContactUs</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default DYBNavigation;