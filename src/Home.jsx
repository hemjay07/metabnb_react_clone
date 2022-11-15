import { useState } from "react";
import "./App.css";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
// import Modal from "../components/Modal";

export default function App() {
  return (
    <>
      {/* <Modal /> */}
      <Header />
      <Main />
      <Footer />
    </>
  );
}
