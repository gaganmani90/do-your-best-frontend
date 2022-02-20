import React from 'react'
import { Navbar, Nav, Container, NavbarBrand } from 'react-bootstrap'
import { useAuth } from './context/authContext'

const DYBNavigation = () => {
  const { currentUser } = useAuth()
  return (
        <Navbar collapseOnSelect fixed='top' expand='sm' bg='primary' variant='dark'
                style={{ backgroundColor: '#071740', position: 'sticky' }}>
            <Container>
                <NavbarBrand href='/'>Do Your Best</NavbarBrand>
                <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
                <Navbar.Collapse id='responsive-navbar-nav'>
                    <Nav className={'mr-auto'}>
                        <Nav.Link href='/'>Home</Nav.Link>
                        <Nav.Link href='/About'>About</Nav.Link>
                        <Nav.Link href='/ContactUs'>ContactUs</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        Signed in as: {currentUser}
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
  )
}

export default DYBNavigation
