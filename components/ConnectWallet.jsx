import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
export default function Connect() {
  return (
    <>
      <div className="connect">
        <div className="modal--title">
          <p>Connect Wallet</p> <img className="cancel" src="./x.svg" />
        </div>
        <p>Choose your prefered wallet: </p>
        <div className="connect--buttons">
          <Button className="connect--button">
            <div>
              <img className="connect--logo" src="./MetamaskConnect.svg" />
              <span className="connect--name">Metamask</span>{" "}
            </div>
            <span> {">"} </span>
          </Button>
          <Button className="connect--button">
            <div>
              <img className="connect--logo" src="./walletConnect.svg" />
              <span className="connect--name">WalletConnect</span>
            </div>
            <span> {">"} </span>
          </Button>
        </div>
      </div>
    </>
  );
}
