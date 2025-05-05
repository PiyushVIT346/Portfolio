import { Container, Row, Col } from "react-bootstrap";


import githubicon from "../assets/img/github-icon.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import x from "../assets/img/x-icon.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          
          
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/piyush-singh-328302289/"><img src={navIcon1} alt="Icon" /></a>
              <a href="PiyushVIT346"><img src={githubicon} alt="Icon" /></a>
              <a href="PiyushSing3355"><img src={x} alt="Icon" /></a>
            </div>
            
          </Col>
        </Row>
      </Container>
    </footer>
  )
}