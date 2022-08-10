import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { RiMapPinTimeLine } from "react-icons/ri";
import moment from "moment";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ethan Cao </span>
            from <span className="purple"> Hangzhou, China.</span>
            <br />I am a{" "}
            <span className="purple">senior full stack developer</span> who has
            almost{" "}
            <span className="purple">
              {moment("20160707", "YYYYMMDD").fromNow(true)}
            </span>{" "}
            experience.
            <br />
            <br />
            {/* Apart from coding, some other activities that I love to do! */}
            This is my timeline:
          </p>
          <ul>
            <li className="about-activity">
              <RiMapPinTimeLine /> <span className="purple">2008</span> Dalian
              Jiaotong University (Bachelor of Software Engineer)
            </li>
            <li className="about-activity">
              <RiMapPinTimeLine /> <span className="purple">2013</span> Dalian
              Jiaotong University (Master of Math)
            </li>
            <li className="about-activity">
              <RiMapPinTimeLine /> <span className="purple">2016</span>{" "}
              YIQICloud Co., Ltd.
            </li>
            <li className="about-activity">
              <RiMapPinTimeLine /> <span className="purple">2019</span> DiDi
              Co., Ltd.
            </li>
            <li className="about-activity">
              <RiMapPinTimeLine /> <span className="purple">2022</span> To be a
              freelancer
            </li>
          </ul>

          {/* <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Soumyajit</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
