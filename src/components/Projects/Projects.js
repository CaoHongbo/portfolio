import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import didi from "../../Assets/Projects/didi.png";
import yiqicloud from "../../Assets/Projects/yiqicloud.png";
import paladin1 from "../../Assets/Projects/paladin1.jpeg";
import alita from "../../Assets/Projects/alita.jpeg";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked before.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={didi}
              isBlog={false}
              title="DiDi Xiaoju Auto Solutions"
              description="It's DiDi Xiaoju Auto Solutions Official Website. I have toke part in the development of two projects, one is DiDi Car Service Risk Control Platform(multi-platform), the other is Car Service Data System(Web)."
              // ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://www6.didiglobal.com/automobile-service/auto-solutions"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={yiqicloud}
              isBlog={false}
              title="YIQICloud"
              description="A WEB application that provides intelligent production management solutions for Chinese enterprises"
              // ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://www.yiqicloud.com.cn/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={paladin1}
              isBlog={false}
              title="didi/PALADIN"
              description={`Paladin is a strategy engine powered by Xiaoju Car Service algorithm team. It is based on DCG (Dynamic Routing Directed Cycle Graph) and combined with the visual interface to reduce configuration cost and support complex algorithms.

              Paladin is implemented in the responsive programming model framework and combined with dynamic scripting, plugin-deployment to greatly reduce the cost of development and deployment. It also keeps the extensible interface for the algorithm to maximize the convenience and flexibility of the deployment.`}
              ghLink="https://github.com/didi/paladin"
              // demoLink="https://editor.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={alita}
              isBlog={false}
              title="didi/ALITA"
              description={`ALITA(A Layered Instrument To Analyze) is a tool which is used to display data based on layer analysis, we through a lot of business requirements precipitation abstract generalization of the "point", "line", "plane" three kind of data model, perfect integrate the map of point, line and plane design elements, design and packaging the front-end and back-end general modular components, achieve rapid build maps`}
              ghLink="https://github.com/didi/ALITA"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
