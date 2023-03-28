import {  useState } from "react";
import { Container,Row,Col } from "react-bootstrap";
import {BsFillArrowRightCircleFill} from 'react-icons/bs';
import astronautImg from '../images/header-img.svg'
import Typewriter from 'typewriter-effect'

function Fsection(){
    const [state] =useState({
        title:"Hi Iam Amr Ismail Mohamed",
    });
    return(
        <section className="section1" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="head-content">Welcome to my Portfolio</span>
                            <div className="title">{state.title}</div>
                        <div className="text">
                        <Typewriter options={{
                            autoStart:true,
                            loop:true,
                            delay:40,
                            strings:[
                                "FullStack Developer",
                                "FrontEnd Developer",
                                "BackEnd Developer"
                            ]
                        }}
                        />
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam suscipit quae architecto iure illum. Numquam, a reiciendis est at amet vel fugit laborum ipsum quibusdam. Sed dolor amet mollitia sequi!</p>
                        <button>Lets Connect<BsFillArrowRightCircleFill size={24}/></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={astronautImg} alt="astronautimg"/>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Fsection;