import React, { useContext } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import { Image } from 'react-bootstrap';
import { FaUser } from 'react-icons/fa';
import Button from 'react-bootstrap/Button';

const Header = () => {

  const {user, logOut} = useContext(AuthContext)

  const handleLogOut =()=>{
    logOut()
    .then(()=>{})
    .catch(error => console.error(error))
  }

  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand><Link to='/'>Fire News</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Categories</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">
              
              {user?.uid
              ?
              <>
                {user?.displayName}
                <Button onClick={handleLogOut} variant="secondary">LogOut</Button>

              </>
              :
              <>
                <Link to='/login'><Button variant="light">Login</Button></Link>
                <Link to="/register"><Button variant="light">Register</Button></Link>
                
              </>
              }
              
              </Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              {
                user?.photoURL ?
                <Image style={{height: '30px'}} roundedCircle src={user?.photoURL}></Image>
                : <FaUser></FaUser>
              }
              {/* <FaUser></FaUser> */}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header