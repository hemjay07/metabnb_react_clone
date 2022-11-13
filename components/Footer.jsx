import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Footer() {
  return (
    <div className="footer">
      <Container>
        <Row>
          <Col className="footer--col" xs={6} md={3}>
            <img
              className="footer--logo"
              src="./logofooter.svg"
              alt="logo at footer"
            />
            <div className="footer--socials">
              <img src="./fb.svg" alt="facebook" />
              <img src="./insta.svg" alt="instagram" />
              <img src="./twitter.svg" alt="twitter" />
            </div>
            <p className="baz footer--li">
              <img className="copyright" src="./copyright.svg" /> 2022 Metabnb
            </p>
          </Col>
          <Col className="footer--col" xs={6} md={3}>
            <p>Community</p>
            <ul className="baz">
              <li className="footer--li">NFT</li>
              <li className="footer--li">Tokens</li>
              <li className="footer--li">Landlords</li>
              <li className="footer--li">Discord</li>
            </ul>
          </Col>
          <Col className="footer--col" xs={6} md={3}>
            <p>Places</p>
            <ul>
              <li className="footer--li">Castle </li>
              <li className="footer--li">Farms</li>
              <li className="footer--li">Beach</li>
              <li className="footer--li">Learn more</li>
            </ul>
          </Col>
          <Col className="footer--col" xs={6} md={3}>
            <p>About us</p>
            <ul>
              <li className="footer--li">Road map</li>
              <li className="footer--li">Creators</li>
              <li className="footer--li">Career</li>
              <li className="footer--li">Contact us</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
