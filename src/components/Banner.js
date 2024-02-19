import { Container, Col } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import Resume from "../assets/img/Resume.pdf";

export const Banner = () => {
  const resumeUrl = Resume;

  const openResume = () => {
    window.open(resumeUrl, '_blank');
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Col className="aligh-items-center" >
          <span className="tagline">Welcome to my portfolio</span>
          <h1>Hi! I'm Anzalna Kainat | UX Engineer</h1>
          <p>In a world driven by user-centric design, I'm Anzalna Kainat, a passionate UX Engineer. I believe in crafting meaningful interactions through a meticulous process that begins with understanding user needs and ends with innovative solutions. With every touch-point, I strive to create experiences that resonate and elevate user engagement in an ever-evolving digital landscape. Complementing my UX expertise, I specialize in front-end development, leveraging technologies to translate design concepts into seamless, intuitive interfaces that captivate users from first click to conversion.</p>
          <button onClick={openResume}>My Resume <ArrowRightCircle size={25} /></button>
        </Col>
      </Container>
    </section>
  )
}
