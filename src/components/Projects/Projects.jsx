import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import GamerLink from "../../Assets/Projects/GamerLink.jpg";
import Snapgram from "../../Assets/Projects/Snapgram.png";
import Taxi from "../../Assets/Projects/Taxi.jpg";
import social_media from "../../Assets/Projects/social_media.png";
import shopper from "../../Assets/Projects/shopper.jpg"

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
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Snapgram}
              isBlog={false}
              title="Snapgram"
              description="My blog application was built with React JS, Appwrite, and Tailwind CSS. Stunning UI with a native mobile feel. Easy to write blogs, like and saving posts"
              ghLink="https://github.com/soumyajit4419/Chatify"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={social_media}
              isBlog={false}
              title="ChatMG"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with Next.js 14, React, Socket io, Strapi, TS, Tailwind CSS. Have features which allows user for realtime messaging, image sharing."
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Taxi}
              isBlog={false}
              title="Nomad Taxi Dashboard"
              description="A comprehensive tool for managing your taxi service was built Next.js, Java, TS, Tailwind CSS, allowing you to efficiently create requests, add managers and drivers, and analyze performance indicators through convenient tables and graphs."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={GamerLink}
              isBlog={false}
              title="GamerLink"
              description="My social network for gamers was built with React JS, Appwrite, and Tailwind CSS. Easyto find perfect teammates for online games such as Valorant, CS2, PUBG, Dota2, Overwatch, and more."
              ghLink="https://github.com/soumyajit4419/Editor.io"
              // demoLink="https://editor.soumya-jit.tech/"
            />
          </Col>
          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col> */}

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col> */}

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shopper}
              isBlog={false}
              title="Shopper"
              description="An online clothing store offering new collections for everyone. The site offers easy navigation, popular products in the women's clothing category, exclusive offers, and a related products feature for an enhanced user experience. Enjoy shopping with ease and style!"
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
