import React from "react";
import Card from "../components/NftCard";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
export default function Main() {
  let NftCards = [];
  for (let i = 1; i < 9; i++) {
    let foo = <Card image={`./nftImages/nft${i}.svg`} key={`${i}`} />;
    NftCards.push(foo);
  }
  console.log(NftCards);
  return (
    <>
      {" "}
      <Container className="section--1">
        <Row>
          <Col md={6}>
            <div className="description">
              {" "}
              <h2>
                Rent a <span className="foo">Place</span> away from{" "}
                <span className="foo">Home</span> in the{" "}
                <span className="foo">Metaverse</span>
              </h2>
              <p>
                we provide you access to luxury and affordable houses in the
                metaverse, get a chance to turn your imagination to reality at
                your comfort zone
              </p>
              <div className="input-button">
                <input type="text" placeholder="search for location" />
                <button>Search</button>
              </div>
            </div>
          </Col>
          <Col md={6}>
            {" "}
            <div>
              <img className="hero" src="./hero.svg" />
            </div>
          </Col>
        </Row>
      </Container>
      <Container fluid className="divide">
        <img src="./mbtoken.svg" alt="mb token" />
        <img src="./metamask.svg" alt="metamask logo" />
        <img src="./opensea.svg" alt="opensea logo" />
      </Container>
      <Container className="section--2">
        <Row className="inspiration">Inspiration for your next adventure</Row>

        <Row>{NftCards}</Row>
      </Container>
      <div className="section--3">
        <Container>
          <Row>
            <Col md={6} className="discover_nft">
              <h2>Metabnb NFTs</h2>
              <p>
                Discover our NFT gift cards collection. Loyal customers gets
                amazing gift cards which are traded as NFTs. These NFTs gives
                our cutomer access to loads of our exclusive services.
              </p>
              {/* <img src="./learnmore.svg" alt="" />
               */}
              <Button className="learnmore">Learn more</Button>
            </Col>
            <Col md={6}>
              <img className="hero--2" src="./hero2.svg" />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
