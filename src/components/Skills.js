import {Container , Col , Row} from "react-bootstrap";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ml from "../assets/img/ml.png";
import genai from "../assets/img/genai.jpg";
import webd from "../assets/img/webd.jpg";
import lang from "../assets/img/langchain.png";
import django from "../assets/img/django.png";
import flask from "../assets/img/flask.png";
import fullstack from "../assets/img/fullstack.png";
import nlp from "../assets/img/nlp.png";
import cv from "../assets/img/cv.png";
import colorSharp from "../assets/img/color-sharp.png";


export const Skills=()=>{
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 5
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 3
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 2
        }
      };
      return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                    <div className="skill-bx">
                        <h2>
                            Skills
                        </h2>
                        <p>Piyush Singh excels in Machine Learning, Deep Learning, and NLP, with expertise in developing innovative solutions using Python. Proficient in Computer Vision, Flask, and SQL, he integrates web development skills (HTML, CSS, JS) for creating seamless, data-driven applications.My aim is to develop advanced AI solutions that address real-world challenges and promote societal well-being</p>
                        <Carousel responsive={responsive} infinite={true} className="skill-slider" >
                            <div className="item">
                                <img src={webd} alt="Web Development" className="circle-img" />
                                <h5>Web development</h5>
                            </div>
                            <div className="item">
                                <img src={ml} alt="Web Development" className="circle-img" />
                                <h5>AI ML developer</h5>
                            </div>
                            <div className="item">
                                <img src={lang} alt="Web Development" className="circle-img" />
                                <h5>RAG and LangChain</h5>
                            </div>
                            <div className="item">
                                <img src={nlp} alt="Web Development" className="circle-img" />
                                <h5>Natural Language Processing</h5>
                            </div>
                            <div className="item">
                                <img src={cv} alt="Web Development" className="circle-img" />
                                <h5>Computer Vision</h5>
                            </div>
                            <div className="item">
                                <img src={django} alt="Web Development" className="circle-img" />
                                <h5>Django App developer</h5>
                            </div>
                            <div className="item">
                                <img src={flask} alt="Web Development" className="circle-img" />
                                <h5>Flask App developer</h5>
                            </div>
                            <div className="item">
                            <img src={fullstack} alt="Web Development" className="circle-img" />
                                <h5>Full Stack developer</h5>
                            </div>
                            <div className="item">
                            <img src={genai} alt="Image" className="circle-img" />
                                <h5>GenAI Developer</h5>
                            </div>

                        </Carousel>
                    </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} />
        </section>
      )
}