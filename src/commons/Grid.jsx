import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CardBook from "./Card";
import Pagination from "react-bootstrap/Pagination";

/* import { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { Link } from "react-router-dom"; */

const Grid = () => {
  /*  const { type } = useParams();
  console.log(type)

  const [libros, setLibros] = useState([]);



  useEffect(() => {
    axios
      .get(`/api/books/${type}`)
      .then((res) => res.data)
      .then((books) => {
        console.log(books);
        setLibros(books);
      });
  }, [type]); */

  const books = [
    {
      title: "principito",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing . Eos omnis repellendus atque quam dolor",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeGaIyWaxuijvM2wXbdxIOhRvVB_8MgMqysw&usqp=CAU",
    },
    {
      title: "HAMLET",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing . Eos omnis repellendus atque quam dolor",
      url: "https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2016/07/20201754/mejores-libros-hamlet-sf.jpg",
    },
    {
      title: "Don Quijote De La Mancha",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing . Eos omnis repellendus atque quam dolor",
      url: "https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2016/07/20201800/mejores-libros-Don-Quijote-sf.jpg",
    },
    {
      title: "Harry Potter y la Piedra Filosofal",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing . Eos omnis repellendus atque quam dolor",
      url: "https://http2.mlstatic.com/D_NQ_NP_881614-MLC44360997235_122020-O.jpg",
    },
    {
      title: "el Horoscopo",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing . Eos omnis repellendus atque quam dolor",
      url: "https://www.tematika.com/media/catalog/Ilhsa/Imagenes/677598.jpg",
    },
    {
      title: "el señor de los anillos",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing . Eos omnis repellendus atque quam dolor",
      url: "https://images.cdn1.buscalibre.com/fit-in/360x360/0d/21/0d217a72d37e3365ff753908d0ba34ad.jpg",
    },
    {
      title: "El Hobbit",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing . Eos omnis repellendus atque quam dolor",
      url: "https://i.pinimg.com/originals/c0/7f/03/c07f0335aab7d6b4d32d90ab7ba9e7d5.jpg",
    },
    {
      title: "Cien Años de Soledad",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing . Eos omnis repellendus atque quam dolor",
      url: "https://resizer.glanacion.com/resizer/s0kuqv-yZbYKTe0ul-1r9jfSuVQ=/310x0/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/PX24AK5IOFCYHJUISPWO42BQAA.png",
    },
  ];

  let active = 2;
  let items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>
    );
  } 

  return (
    <div>
      <div>
        <Pagination size="lg">{items}</Pagination>
        <br />
      </div>
      <Container>
        <Row>
          {books.map((book, i) => (
            <Col lg={6} md={6} key={i}>
              {/*  <Link to= {`/book/${book.title}`} > */}
              <CardBook book={book} />
              {/* </Link> */}
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Grid;
