import React from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";

import InputGroup from "react-bootstrap/InputGroup";

export default function () {
  return (
    <nav>
      <div>
        <img className="logo" src="/Group.svg" />
      </div>

      <p>Home</p>
      <p>Place to stay</p>
      <p>NFTs</p>
      <p>Community</p>
      <Button>conect wallet</Button>

      {/* <InputGroup className="mb-3">
        <Form.Control
          placeholder="search for location"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <Button
          className="bs-button"
          variant="outline-secondary"
          id="button-addon2"
        >
          Search
        </Button>
      </InputGroup> */}
    </nav>
  );
}
