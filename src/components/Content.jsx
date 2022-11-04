import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Book from "../commons/Book";
import Review from "../commons/Review";

const Content = () => {
  const { id } = useParams();
  const [libro, setLibro] = useState({});

  useEffect(() => {
    axios
      .get(`/api/book/:${id}`)
      .then((res) => res.data)
      .then((book) => {
        setLibro(book);
      });
  }, [title]);

  return (
    <div>
      <Book book={libro} />
      <Review />
    </div>
  );
};

export default Content;
