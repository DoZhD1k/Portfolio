import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Arlen Chereshnikov </span>
            from <span className="purple"> Almaty, Kazakhstan.</span>
            <br />  
            <br />
              I am a software engineering student at the International University of Information Technologies right now.
            <br />
            <br />
              I am currently internship as a data engeneer at Almaty Development Center.
            <br />
            <br />
              Apart from coding there are some other activities that I love to do:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Acquiring New Knowledge
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
          “Java is to JavaScript what car is to Carpet.”{" "}
          </p>
          <footer className="blockquote-footer">Chris Heilmann</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
