import React from "react";
import { Col, Row } from "react-bootstrap";
import macOs from "../../Assets/TechIcons/Apple MacOSX.svg";
import chrome from "../../Assets/TechIcons/Google Chrome.svg";
import vsCode from "../../Assets/TechIcons/vscode.svg";
import intelliJ from "../../Assets/TechIcons/intellij-idea.svg";
import androidStudio from "../../Assets/TechIcons/AndroidStudio.svg";
import figma from "../../Assets/TechIcons/Figma.svg";



function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>

      {/* 💻 Development Tools */}
      <Col xs={4} md={2} className="tech-icons">
        <img src={macOs} alt="macOs" className="tech-icon-images" />
        <div className="tech-icons-text">Mac OS</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons ">
        <img src={chrome} alt="Chrome" className="tech-icon-images" />
        <div className="tech-icons-text">Google Chrome</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons ">
        <img src={vsCode} alt="vsCode" className="tech-icon-images" />
        <div className="tech-icons-text">VS Code</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons ">
        <img src={intelliJ} alt="intelliJ" className="tech-icon-images" />
        <div className="tech-icons-text">IntelliJ IDEA</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons ">
        <img src={androidStudio} alt="androidStudio" className="tech-icon-images" />
        <div className="tech-icons-text">Android Studio</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons ">
        <img src={figma} alt="figma" className="tech-icon-images" />
        <div className="tech-icons-text">Figma</div>
      </Col>

      {/* 🎨 Creative & Editing Tools
      <Col xs={4} md={2} className="tech-icons ">
        <img src={premierePro} alt="Premiere Pro" className="tech-icon-images" />
        <div className="tech-icons-text">Premiere Pro</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons ">
        <img src={illustrator} alt="Illustrator" className="tech-icon-images" />
        <div className="tech-icons-text">Illustrator</div>
      </Col> */}

  

    </Row>
  );
}

export default Toolstack;
