import React from "react";
import Card from "../components/NftCard";
export default function Main() {
  let NftCards = [];
  for (let i = 1; i < 5; i++) {
    let foo = <Card image={`./nftImages/nft${i}.svg`} key={`${i}`} />;
    NftCards.push(foo);
  }
  console.log(NftCards);
  return (
    <>
      {" "}
      <div className="main--section-1">
        <div className="description">
          {" "}
          <h2>
            Rent a <span className="foo">Place</span> away from{" "}
            <span className="foo">Home</span> in the{" "}
            <span className="foo">Metaverse</span>
          </h2>
          <p>
            we provide you access to luxury and affordable houses in the
            metaverse, get a chance to turn your imagination to reality at your
            comfort zone
          </p>
          <div className="input-button">
            <input type="text" placeholder="search for location" />
            <button>Search</button>
          </div>
        </div>

        <div>
          <img className="hero" src="./hero.svg" />
        </div>
      </div>
      <div className="divide">
        <img src="./mbtoken.svg" alt="mb token" />
        <img src="./metamask.svg" alt="metamask logo" />
        <img src="./opensea.svg" alt="opensea logo" />
      </div>
      <div className="main--section-2">
        <div className="inspiration">Inspiration for your next adventure</div>
        {NftCards}
      </div>
    </>
  );
}
