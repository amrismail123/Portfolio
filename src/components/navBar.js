import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BsLinkedin } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs"; 
import {FaBars} from 'react-icons/fa'

function NavigationBar() {
  return (
    <Navbar  expand="lg">
      <Container>
        <Navbar.Brand href="#home" id='main-link2'>LOGO</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
            <i><FaBars className='barss'/></i>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className='nav-link' id='main-link' href="#home">Home</Nav.Link>
            <Nav.Link className='nav-link' id='main-link' href="#skills">Skills</Nav.Link>
            <Nav.Link className='nav-link' id='main-link' href="#navPills">Projects</Nav.Link>
          </Nav>
          <span  className="navbar-text">
            <div className="social-icon">
                <a href="https://www.linkedin.com/in/amr-esm3el-0b1432258/"><BsLinkedin className='linked' size='2rem'color='white'/></a>
                <a href="https://www.facebook.com/profile.php?id=100087915139614"><BsFacebook className='linked' size='2rem'color='white'/></a>
                <a href="https://www.instagram.com/amr_ismail23/"><BsInstagram  className='linked' size='2rem'color='white'/></a>
            </div>
            <button className="btn1"><span>Lets Connect</span></button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavigationBar;