import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, url, position }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <a href={url} target="_blank" className="proj-imgbx">
        <img src={imgUrl} style={{ objectPosition: position || "center" }} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </a>
    </Col>
  );
};
