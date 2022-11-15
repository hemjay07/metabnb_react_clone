import React from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
export default function () {
  const [Mobile, setMobile] = React.useState("nav--mobile");

  // set state for modal and add a function which switches the state upon clicking the connect wallet button or exiting the modal
  const [modal, setModal] = React.useState(false);
  function handleModal() {
    setModal(!modal);
  }

  //  when the hamburger is clicked this toggles the  nav for mobile view (toggle the className "nav--mobile" which basically changes the diplay to none)
  function handleclick() {
    if (Mobile == "") {
      setMobile("nav--mobile");
    } else {
      setMobile("");
    }
  }
  // This statement helps prevent scroll of the entire page if the connect modal is up
  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }
  return (
    <Container>
      <Row className="navv">
        <Col xs="auto">
          {" "}
          <div className="lost">
            {" "}
            <img className="logo" src="/Group.svg" />
            {/* if modal is "true", add the code for the modal pop up */}
            {modal && (
              <>
                <div className="connect">
                  <div className="modal--title">
                    <p>Connect Wallet</p>{" "}
                    <img onClick={handleModal} src="./x.svg" />
                  </div>
                  <p>Choose your prefered wallet: </p>
                  <div className="connect--buttons">
                    <Button className="connect--button">
                      <div>
                        <img
                          className="connect--logo"
                          src="./MetamaskConnect.svg"
                        />
                        <span className="connect--name">Metamask</span>{" "}
                      </div>
                      <span> {">"} </span>
                    </Button>
                    <Button className="connect--button">
                      <div>
                        <img
                          className="connect--logo"
                          src="./walletConnect.svg"
                        />
                        <span className="connect--name">WalletConnect</span>
                      </div>
                      <span> {">"} </span>
                    </Button>
                  </div>
                </div>
                <div onClick={handleModal} className="overlay"></div>
              </>
            )}
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
          <Button onClick={handleModal} className="navv--button">
            conect wallet
          </Button>
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

          <Button onClick={handleModal} className="navv--button--mobile">
            conect wallet
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
