import { Container, Row, Col } from "react-bootstrap";
import contectImg from '../images/contact-img.svg'

function Contact(){
    return(
        <section className="contact" id="connect">
        <Container>
            <Row className="align-items-center">
                <Col md={6}>
                    <img src={contectImg} alt="Contact Us"/>
                </Col >
                <Col md={6}>
                    <h2>Get In Touch</h2>
                    <form>
                        <Row>
                            <Col sm={6} className="px-1">
                                <input type="text"  placeholder="First Name"/>
                            </Col>
                            <Col sm={6} className="px-1">
                                <input type="text"  placeholder="Last Name"/>
                            </Col>
                            <Col sm={6} className="px-1">
                                <input type="email"  placeholder="Email Address"/>
                            </Col>
                            <Col sm={6} className="px-1">
                                <input type="tel" placeholder="Phone"/>
                            </Col>
                            <Col>
                            <textarea rows="6" placeholder="Message"/>
                            <button type="submit">Send</button>
                            </Col>
                        </Row>
                    </form>
                </Col>
            </Row>
        </Container>
        </section>
    )
}
export default Contact;