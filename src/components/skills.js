import { Container,Col, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import progress1 from '../images/progress1.svg';
import progress2 from '../images/progress2.svg';
import progress3 from '../images/progress3.svg';

function Skills(){
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
      return(
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>   
                        <div className="skill-bx">
                            <h2>Skills</h2>
                            <p>You Can See My Skills Here</p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img src={progress1} alt="img1"/>
                                    <h5>Web Development</h5>
                                </div>
                                <div className="item">
                                    <img src={progress2} alt="img1"/>
                                    <h5>Flutter Development</h5>
                                </div>
                                <div className="item">
                                    <img src={progress3} alt="img1"/>
                                    <h5>Back-End Development</h5>
                                </div>
                                <div className="item">
                                    <img src={progress3} alt="img1"/>
                                    <h5>Cyber Security</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
export default Skills;