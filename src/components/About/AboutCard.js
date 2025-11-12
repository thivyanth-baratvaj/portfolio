// import React from "react";
import Card from "react-bootstrap/Card";
// import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Thivyanth Baratvaj</span> from{" "}
            <span className="purple">Tamil Nadu, India</span>. I’m currently pursuing my{" "}
            <span className="purple">B.E. in Computer Science and Engineering</span>. 
            I have a strong interest in <span className="purple">Web Development, AI/ML, and Cloud Computing</span>. 
            I enjoy building innovative projects, exploring new technologies, and continuously improving my skills 
            through hands-on learning and collaboration. Outside of coding, I love designing, exploring new ideas, 
            and listening to music.
          </p>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Keep learning, keep building, and stay curious!"{" "}
          </p>
          <footer className="blockquote-footer">Thivyanth Baratvaj</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
