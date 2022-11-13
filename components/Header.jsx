import React from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
export default function () {
  const [Mobile, setMobile] = React.useState("nav--mobile");

  function handleclick() {
    if (Mobile == "") {
      setMobile("nav--mobile");
    } else {
      setMobile("");
    }
  }
  return (
    <Container>
      <Row className="navv">
        <Col xs="auto">
          {" "}
          <div className="lost">
            {" "}
            <img className="logo" src="/Group.svg" />
          </div>
        </Col>
        <Col className="desktop--nav">
          <div className="nav--items">
            <p>Home</p>
            <p>Place to stay</p>
            <p>NFTs</p>
            <p>Community</p>
          </div>
        </Col>
        <Col xs="auto">
          {" "}
          <Button className="navv--button">conect wallet</Button>
        </Col>
        <Col xs="auto">
          {" "}
          <img
            onClick={handleclick}
            className="hamburger"
            src="./hamburger.svg"
            alt="menu"
          />
        </Col>
      </Row>{" "}
      <Row>
        <Col className={Mobile}>
          <hr />
          <ul>
            <li>Home</li>
            <li>Place to stay</li>
            <li>NFTs</li>
            <li>Community</li>
          </ul>

          <Button className="navv--button--mobile">conect wallet</Button>
        </Col>
      </Row>
    </Container>
  );
}
