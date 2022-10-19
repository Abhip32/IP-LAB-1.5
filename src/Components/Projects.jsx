import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Navbar from "./Navbar";
import leaf from "../Assets/Projects/leaf.png";
import chatify from "../Assets/Projects/chatify.png";
import blog from "../Assets/Projects/blog.png";
import codeEditor from "../Assets/Projects/codeEditor.png";
import emotion from "../Assets/Projects/emotion.png";
import random from "../Assets/Projects/random.png";
import suicide from "../Assets/Projects/suicide.png";




function Projects() {
  return (
    <div style={{backgroundColor:"#282c34",color:"white"}}>
       <Navbar type="Home"/>

       <Container fluid className="project-section">
      <Container>
        <br/>
        <br/>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Spotify-Clone"
              description="A Desktop Responsive Clone of Spotify made in ReactJS. Integrated with offical Spotify API. In this App user can search and play his/her favourite songs. There is a seprate section for user dashboard and liked songs of user. There is a discover section on user dashboard, where user can explore new songs."
              ghLink="https://github.com/Abhip32/Spotify-Clone"
              demoLink="https://abhip32.github.io/Spotify-Clone/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blog}
              isBlog={false}
              title="Netflix Frontend Clone"
              description="A Desktop Responsive Clone of Spotify made in ReactJS. Functionality of Website is that you can search for any movie and all information about that movie will pop up. Along with this there is showcase of movies implemented on this website. This website is basically a frontend clone of Netflix"
              ghLink="https://abhip32.github.io/Netflix-Clone/"
              demoLink="https://abhip32.github.io/Netflix-Clone/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={codeEditor}
              isBlog={false}
              title="CRICGEEK"
              description="A fully Responsive Website made in AngularJs. On this website user can view the scores & news of live cricket matches. Along with this user will be able to see results of past & upcoming matches. In the Rankings section user can see the ranks of players across all formats."
              ghLink="https://github.com/Abhip32/CricGeek"
              demoLink="https://abhip32.github.io/CricGeek/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="CRICGEEK API"
              description="This project is an API for CRICGEEK project. This is a REST API which is devloped using ExpressJS. This API basically scraps data from EspnCricInfo and Cricbuzz. Data includes scores of live and past matches. Information about upcoming matches and latest cricket news along with the rankings of players."
              ghLink="https://github.com/Abhip32/Cricket-Api"
              demoLink="https://cricgeek-api.herokuapp.com/live"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="News App"
              description="A simple fully responsive news app made in Angular Js. It makes use of NewYork Times API to fetch news. User will be able to see news across multiple catogories such as Health, Entertainment, General, Automobiles, Technology etc. User will be also able to search a news according to articles."
              ghLink="https://github.com/Abhip32/News-App"
              demoLink="https://abhip32.github.io/News-App" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Funrento"
              description="My first project in Django. On this website user will be able to rent the furniture for a particular life span. User authentication and OTP verification has been implemented in this website. More features such as out of order of order notifiler, payment portal and user portal is also available on this website."
              ghLink="https://github.com/Abhip32/Rental_Furniture"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={random}
              isBlog={false}
              title="Cargo Express Courier System"
              description="This a desktop application which is devloped to bring automation in the daily work which happens at a courier company. I have used Java for frontend and MySQL for backend. Order tracking, bill generation, Seprate dashboard for User, Employee and admin, Forgot password these fratures has been implemented in this project."
              ghLink="https://github.com/Abhip32/Cargo-Express-Courier-System"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
    </div>
  );
}

export default Projects;
