import React from "react";

import { Carousel, Row, Card, Button, Stack } from "react-bootstrap";

const reviews = [
  { _id: 1, text: "abc" },
  { _id: 2, text: "def" },
  { _id: 3, text: "ghi" },
  { _id: 4, text: "jkl" },
  { _id: 5, text: "mno" },
  { _id: 6, text: "pqr" },
  { _id: 7, text: "stu" },
  { _id: 8, text: "vwx" },
  { _id: 9, text: "yza" },
];

const Carrusel = ({ images }) => {


  return (
    <div>
      <Carousel style={{ height: 300 }}>
        {reviews.map((review, index) => (
          <Carousel.Item key={index} style={{ height: 300 }}>
            <Stack
              direction="horizontal"
              className="h-100 justify-content-center align-items-center"
              gap={3}
            >
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>

              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>

              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Stack>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Carrusel;
