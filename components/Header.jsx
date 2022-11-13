import React from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
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
            <Link className="home" to="/">
              <p>Home</p>
            </Link>

            <Link className="placeToStay" to="/placetostay">
              <p>Place to stay</p>
            </Link>
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
            <li>
              <Link className="home--mobile" to="/">
                <p>Home</p>
              </Link>
            </li>

            <li>
              <Link className="placeToStay--mobile" to="/placetostay">
                <p>Place to stay</p>
              </Link>
            </li>

            <li className="navitems--mobile--nfts">NFTs</li>
            <li>Community</li>
          </ul>

          <Button className="navv--button--mobile">conect wallet</Button>
        </Col>
      </Row>
    </Container>
  );
}
