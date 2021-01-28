import React from "react";
import { Container } from "react-bootstrap";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer>
      <Container>
        <p>Copyright ⓒ {year}</p>
      </Container>
    </footer>
  );
};

export default Footer;
