import React from "react";
import Button from "react-bootstrap/Button";
import Card from "./NftCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
export default function Places() {
  let NftCards = [];
  for (let i = 1; i < 17; i++) {
    let foo = <Card image={`./nftImages/nft${i}.svg`} key={`${i}`} />;
    NftCards.push(foo);
  }
  return (
    <>
      <Container className="places">
        <Row className="justify-content-xs-center">
          <Col xs="auto">
            <p className="places--list">Restaurant</p>
          </Col>
          <Col xs="auto">
            <p className="places--list">Cottage</p>
          </Col>
          <Col xs="auto">
            <p className="places--list">Castle</p>
          </Col>
          <Col xs="auto">
            <p className="places--list">fantastic city</p>
          </Col>
          <Col xs="auto">
            <p className="places--list">beach</p>
          </Col>
          <Col xs="auto">
            <p className="places--list">Carbins</p>
          </Col>
          <Col xs="auto">
            <p className="places--list">off-grid</p>
          </Col>
          <Col xs="auto">
            <p className="places--list">Farm</p>
          </Col>
          <Col xs="auto">
            {/* <img className="location" src="./location.svg" /> */}
            <Button className="location">
              location{" "}
              <span>
                <img
                  className="location--hamburger"
                  src="./locationHamburger.svg"
                  alt=""
                />
              </span>
            </Button>
          </Col>
        </Row>
      </Container>
      <Container className="section--2">
        <Row>{NftCards}</Row>
      </Container>
    </>
  );
}
