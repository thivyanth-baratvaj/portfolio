import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chatapp from "../../Assets/Projects/chatapp.jpg";
import powerapps from "../../Assets/Projects/powerapps.jpg";
import codingplatform from "../../Assets/Projects/codingplatform.jpg";
import deepfake from "../../Assets/Projects/deepfake.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* Online Web Chat Application */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatapp}
              isBlog={false}
              title="Online Web Chat Application"
              description="A real-time online web chat app built using PHP, HTML, and CSS. Hosted locally for chatting and sharing messages between users. This project improved my understanding of frontend styling and backend communication."
              ghLink="https://github.com/thivyanth-baratvaj/chatapp"
              demoLink="" 
            />
          </Col>

          {/* Student Management using PowerApps */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={powerapps}
              isBlog={false}
              title="Student Management System (PowerApps)"
              description="A PowerApps-based student management system designed to efficiently handle student details, academic records, and performance tracking. Integrated with Microsoft Power BI for analytics and dashboards."
              ghLink=""
              demoLink=""
            />
          </Col>

          {/* Coding Platform */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={codingplatform}
              isBlog={false}
              title="Coding Platform"
              description="A full-stack coding platform built using React, Express, and MongoDB. Includes problem management, user authentication, and a clean UI for coding practice. Developed to manage coding problems dynamically via database."
              ghLink="https://github.com/thivyanth-baratvaj/coding_platform"
              demoLink=""
            />
          </Col>

          {/* DeepFake Detection */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={deepfake}
              isBlog={false}
              title="DeepFake Detection"
              description="An AI-based project that identifies manipulated or synthetic videos using deep learning models. Built with Python, TensorFlow, and OpenCV to detect deepfakes from facial features and frame inconsistencies."
              ghLink="https://github.com/thivyanth-baratvaj/DeepFake_Detection"
              demoLink=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
