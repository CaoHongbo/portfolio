import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiLinux,
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
  SiVercel,
  SiBabel,
  SiWebpack,
  SiVite,
  SiDocker,
  SiBootstrap,
  SiTailwindcss,
  SiJquery,
  SiYarn,
  SiNpm,
  SiFlutter,
  SiGraphql,
  SiNextdotjs,
  SiWindows,
  SiApple,
  SiPuppeteer,
} from "react-icons/si";
import { FaGit, FaLess } from "react-icons/fa";
import { DiNginx } from "react-icons/di";
import { AiOutlineAliyun } from "react-icons/ai";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiWindows />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiApple />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNpm />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiYarn />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNginx />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <AiOutlineAliyun />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPuppeteer />
      </Col>
    </Row>
  );
}

export default Toolstack;
