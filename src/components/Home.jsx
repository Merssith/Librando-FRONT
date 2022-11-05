import React from "react";
import img1 from "../assets/img1.jpeg";
import img2 from "../assets/img2.jpeg";
import img3 from "../assets/img3.jpeg";

import Carrusel from "../commons/Carrusel";

import { Row } from "react-bootstrap";

const Home = () => {
  return (
    <>
      <Row>
        <h1 className="display-3 text-center">Welcome to Librando!</h1>
      </Row>
      <Carrusel images={[img1, img2, img3]} />
    </>
  );
};

export default Home;
