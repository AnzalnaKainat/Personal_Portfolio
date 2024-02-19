import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo2.png";

export const Footer = () => {
  const emailAddress = 'anzalnakainat@gmail.com';
  const subject = 'Subject of your email';
  const body = 'Body of your email';

  const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={3}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={9} className="text-center text-sm-end">
            <div className="icon">

              <a href={mailtoLink}>anzalnakainat@gmail.com- Email</a>
              
              <a href="https://www.linkedin.com/in/anzalna-kainat-4973922b5/" target="_blank" rel="noopener noreferrer">Anzalna Kainat- LinkedIn</a>
            </div>
           
            <p>© 2023. All Rights Reserved to Anzalna Kainat.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}