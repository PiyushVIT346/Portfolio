import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import p1 from "../assets/img/p1.jpg";
import p2 from "../assets/img/p2.jpg";
import p3 from "../assets/img/p3.jpg";
import p4 from "../assets/img/p4.jpg";
import p5 from "../assets/img/p5.jpg";
import p6 from "../assets/img/p6.jpg";
import medAI from "../assets/img/medAI.jpg";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import TrackVisibility from "react-on-screen";
import "animate.css";

export const Projects = () => {
    const projects = [
        {
            title: "Psychology Chatbot",
            description: "A Gemini Chatbot that uses sentiment analysis to provide emotional support and relief.",
            link: "https://github.com/PiyushVIT346/Chat-Gemi_E",
            imgUrl: p1,
        },
        {
            title: "Health Hub",
            description: "Detect neuromuscular diseases with 90%+ accuracy and use an NLP chatbot for symptom-based detection.",
            imgUrl: p2,
        },
        {
            title: "Hostel Management",
            description: "A Django application for students to raise issues and for admins to manage them.",
            link:"https://github.com/PiyushVIT346/hostelManagement",
            imgUrl: p3,
        },
        {
            title: "Calculator Board",
            description: "A Tkinter-based application to perform calculations by recognizing handwritten inputs.",
            link:"https://github.com/PiyushVIT346/calcBoard",
            imgUrl: p4,
        },
        {
            title: "Medical Report Analyzer",
            description: "A web application that analyzes medical reports and provides insights of X-ray, CT-Scan and MRI images.",
            link:"",
            imgUrl: medAI,
        },
        {
            title: "Object Detection",
            description: "Implemented object detection using the YOLO algorithm.",
            link:"https://github.com/PiyushVIT346/YOLO_objectDetection",
            imgUrl: p6,
        },
    ],
    project2 = [
        {
            title: "Real Estate Price Estimation in Bangalore",
            description: "A Flask-based application to predict real estate prices in Bangalore.",
            link:"https://github.com/PiyushVIT346/BangloreHousePricePredict",
            imgUrl: p5,
        }
    ]
    ;

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col xs={12}>
                        <TrackVisibility>
                            {({ isVisible }) => (
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <h2>Projects</h2>
                                    <p>
                                    I have actively worked on a variety of impactful projects across Web Development, Natural Language Processing (NLP), GenAI ,  and Computer Vision, each aligning with trending and in-demand technologies. In Web Development, I created dynamic multi-page websites and responsive Flask-based web apps with user/admin login systems, integrating functionalities like data prediction, chat history, and model tracking via DVC and CICD for deployment and continous integration. My NLP project focused on building intelligent chatbots capable of understanding context, detecting emotional cues, and supporting multi-language conversations. I also explored the development of a toxicity detection model using LSTM networks, enhancing it with real-time feedback and text classification. In the domain of Computer Vision, I built digit and operator recognition tools using CNNs and OpenCV, and contributed to low-light image enhancement for lunar PSR region analysis using UNet. Through these projects, I delved into hot topics like multi-modal AI, mental health tech, and AI in space research—gaining hands-on experience with cutting-edge tools such as OpenAI/Gemini APIs, Hugging Face Transformers, and FastAPI. These experiences not only strengthened my technical skill set but also deepened my understanding of building scalable, human-centric, and research-driven AI applications.
                                    </p>
                                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                                        <Nav
                                            variant="pills"
                                            className="nav-pills mb-5 justify-content-center align-items-center"
                                            id="pills-tab"
                                        >
                                            <Nav.Item>
                                                <Nav.Link eventKey="first">Tab 1</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="second">Tab 2</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="third">Tab 3</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                        <Tab.Content
                                            id="slideInUp"
                                            className={isVisible ? "animate__animated animate__slideInUp" : ""}
                                        >
                                            <Tab.Pane eventKey="first">
                                                <Row>
                                                    {projects.map((project, index) => (
                                                        <ProjectCard key={index} {...project} />
                                                    ))}
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="second">
                                                <Row>
                                                    {project2.map((project, index) => (
                                                        <ProjectCard key={index} {...project} />
                                                    ))}
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="third">
                                                <Row>
                                                    {projects.map((project, index) => (
                                                        <ProjectCard key={index} {...project} />
                                                    ))}
                                                </Row>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Tab.Container>
                                </div>
                            )}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} alt="Background Design" />
        </section>
    );
};
