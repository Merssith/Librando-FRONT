import React from "react";

import Carousel from "react-bootstrap/Carousel";
import Row from "react-bootstrap/Row";

const Home = () => {
  return (
    <>
      <Row>BIENVENIDOS A LIBRANDO</Row>
      <Row>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://th.bing.com/th/id/R.50ce2cd13ed2e7a732c57abe7ab19cf0?rik=7SUFzI9KU6IMOQ&riu=http%3a%2f%2f3.bp.blogspot.com%2f-ll15GKfuAfU%2fUD_QRuRT3SI%2fAAAAAAAAi-w%2f_VQ08qSDwAE%2fs1600%2fLibros-Viejos-Apilados_Imagenes-de-Libros.jpg&ehk=ITajz1yk%2bQeZz6zZHmcxf5Xbt89WsaenbI3pTQzlkcw%3d&risl=&pid=ImgRaw&r=0"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://th.bing.com/th/id/R.22fe044477b0e35631714462459cbc47?rik=c5ZN5BishSzGjQ&pid=ImgRaw&r=0"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://th.bing.com/th/id/R.4761101e218cfa51293dbcbc29282847?rik=HfuzTZppxAhLFQ&pid=ImgRaw&r=0"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Row>
    </>
  );
};

export default Home;
