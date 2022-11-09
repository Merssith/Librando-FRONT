import React from "react";
import { FaHandPointRight, FaHandPointLeft } from "react-icons/fa";
import "../css/pagination.css";

const Pagination = ({ page, setPage, max, input, setInput }) => {

  const nextPage = () => {
    setInput(input + 1);
    setPage(page + 1);
  };

  const prevPage = () => {
    setInput(input - 1);
    setPage(page - 1);
  };

  const onKeyDown = (e) => {
    const value = e.target.value;
    if (e.keyCode === 13) {
      setPage(value);

      if (value < 1 || value > Math.ceil(max) || isNaN(value)) {
        setPage(1);
        setInput(1);
      } else {
        setPage(value);
      }
    }
  };

  const onChange = (e) => {
    const value = e.target.value;
    setInput(value);
  };

  return (
    <div>
      <button disabled={page === 1 || page < 1} onClick={prevPage}>
        <FaHandPointLeft />
      </button>
      <input
        className="inputPag"
        onChange={onChange}
        onKeyDown={(e) => onKeyDown(e)}
        name="page"
        autoComplete="off"
        value={input}
      />
      {/*  <p>de {maximo}</p> */}

      <button
        disabled={page === Math.ceil(max) || page > max}
        onClick={nextPage}
      >
        <FaHandPointRight />
      </button>
    </div>
  );
};

export default Pagination;
