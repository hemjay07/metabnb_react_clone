import React from "react";
// import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";

export default function Card(prop) {
  return (
    <Col md={6} lg={3} className="bar">
      {" "}
      <div className="card">
        {" "}
        <img src={prop.image} alt="nft card" />
        <div className="nft--info">
          <p className="nft--info--1">Desert king</p>
          <p>
            <b>1MBT per night</b>
          </p>
        </div>
        <div className="nft--info">
          <p className="nft--info--1">2345km away</p>
          <p>available for 2weeks stay</p>
        </div>
        <img className="stars" src="./stars.svg" alt="" />{" "}
      </div>
    </Col>
  );
}
