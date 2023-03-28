import img1 from '../images/project-img1.png'
import img2 from '../images/project-img2.png'
import img3 from '../images/project-img3.png'

function Projects(){
    return(
    <div>
        <div className="container-section3">
            <div className="div1-section3">
                <img src={img1} alt="img1" width={420}/>
                <div className="overlay-div1">
                     <h2>Business Startup</h2>
                    <h4>Design & Development</h4>
                </div>
            </div>
            <div className="div2-section3">
                <img src={img2} alt="img2" width={420}/>
                <div className="overlay-div2">
                    <h2>Business Startup</h2>
                    <h4>Design & Development</h4>
                </div>
            </div>
            <div className="div3-section3">
                <img src={img3} alt="img3" width={420}/>
                <div className="overlay-div3">
                    <h2>Business Startup</h2>
                    <h4>Design & Development</h4>
                </div>
            </div>
        </div>
    </div>
    )}
export default Projects;