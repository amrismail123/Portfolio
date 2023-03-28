import { Col, Container, Row } from "react-bootstrap"
import { BsLinkedin } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import logo from '../images/logo.svg'
const Footer =()=>{
    return(
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <Col sm={8}>
                        <img src={logo} alt="Logo"/>
                    </Col>
                    <Col sm={6} className="text-center text-sm-end link-copyright">
                        <div className="social-icon">
                        <a href="https://www.linkedin.com/in/amr-esm3el-0b1432258/"><BsLinkedin className='linked' size='2rem'color='white'/></a>
                        <a href="https://www.facebook.com/profile.php?id=100087915139614"><BsFacebook className='linked' size='2rem'color='white'/></a>
                        <a href="https://www.instagram.com/amr_ismail23/"><BsInstagram  className='linked' size='2rem'color='white'/></a>
                        </div>
                        <p>--CopyRights 2023-- All Rights Reserved Here By Amr Ismail Mohamed</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}
export default Footer;