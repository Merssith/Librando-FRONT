import React from "react";
import { images } from "../utils";

import Carrusel from "../commons/Carrusel";

import { Row } from "react-bootstrap";

const Home = () => {
  return (
    <>
      <Row>
        <h1 className="display-3 text-center">Welcome to Librando!</h1>
      </Row>
      <Carrusel images={images} />
    </>
  );
};

export default Home;
