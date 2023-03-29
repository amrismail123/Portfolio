import { Container,Row,Col,Nav,TabContainer } from "react-bootstrap";

function NavPills (){
    const Onclick=()=>{
        document.getElementById("show-content").innerHTML="My name is Amr ,i live in cairo ,this is the 1st proj in react Dev.";
    }
    return(
    <section className="project" id="project">
        <Container>
            <Row>
                <Col>
                <h2>My Project</h2>
                <p className="title-project">My name is Amr ,i live in cairo ,this is the 1st proj in react Dev.</p>
        <TabContainer id="projects-tabs" defaultActiveKey="first">  
        <Nav activeKey="/home" variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
            <Nav.Item>
                <Nav.Link  eventKey="first">1st Section</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link  eventKey="seconed">2nd Section</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link onClick={Onclick} eventKey="third">3rd Section</Nav.Link>
            </Nav.Item>
        </Nav>
        </TabContainer>  
                </Col>
                
            </Row>
            <Col>
                <div id="show-content"></div>
            </Col>
        </Container>
    </section>  
    )
};
export default NavPills;
