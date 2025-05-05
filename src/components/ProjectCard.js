import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, link, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        {/* Wrap the entire card in an <a> tag if a link is provided */}
        {link ? (
          <a href={link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit" }}>
            <img src={imgUrl} alt={title} />
            <div className="proj-txtx">
              <h4>{title}</h4>
              <span>{description}</span>
            </div>
          </a>
        ) : (
          <>
            <img src={imgUrl} alt={title} />
            <div className="proj-txtx">
              <h4>{title}</h4>
              <span>{description}</span>
            </div>
          </>
        )}
      </div>
    </Col>
  );
};
