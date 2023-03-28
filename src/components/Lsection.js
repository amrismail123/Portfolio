import { Container,Row,Col} from "react-bootstrap"

const Lsection =()=>{
return(
    <Col lg={12}>
        <div className="newsletter-bx">
            <Row>
                <Col lg={12} md={6} xl={5}>
                    <h3>See My Projects At Once & leave Here Your E-mail Address</h3>
                </Col>
                <Col md={6} xl={7}>
                    <form>
                        <div className="new-email-bx">
                            <input type="email" placeholder="Email Address"/>
                            <button type="submit">Submit</button>
                        </div>
                    </form>
                </Col>
            </Row>
        </div>
    </Col>
)
}
export default Lsection;