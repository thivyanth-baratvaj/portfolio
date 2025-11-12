import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I’m a Computer Science Engineering student who enjoys crafting digital
              experiences that blend creativity and functionality. Over time, I’ve
              explored various domains — from software development to UI design —
              and developed a keen interest in building clean, efficient, and
              user-friendly applications.
              <br />
              <br />
              I’m proficient in
              <i>
                <b className="purple">
                  {" "}
                  Java, Python, HTML, CSS, React.js, and Node.js{" "}
                </b>
              </i>
              — and I love combining logic with design to create seamless web
              experiences.
              <br />
              <br />
              My key areas of focus include developing
              <i>
                <b className="purple">
                  {" "}
                  Web Applications, AI-based Projects,{" "}
                </b>
              </i>
              and exploring emerging technologies like Cloud and Cybersecurity.
              <br />
              <br />
              I also enjoy expressing creativity through visual design using tools
              like <b className="purple">Adobe Illustrator, Photoshop, After Effects,</b> and{" "}
              <b className="purple">Canva</b>.
              <br />
              <br />
              Whenever possible, I love bringing ideas to life with{" "}
              <b className="purple">React.js</b> and{" "}
              <i>
                <b className="purple">Node.js</b> on modern full-stack projects.
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
