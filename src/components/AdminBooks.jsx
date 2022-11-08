import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Button,
  Col,
  Container,
  Pagination,
  Row,
  Stack,
  Table,
} from "react-bootstrap";
import { useParams } from "react-router";
import { Link } from "react-router-dom";


const AdminBooks = () => {
  const { type } = useParams();
  console.log(type);

  const [libros, setLibros] = useState([]);


  //traigo todos los libros para editarlos
  useEffect(() => {
    getBooksAll ()
  }, []);

  const getBooksAll = () => {axios
    .get(`http://localhost:3001/api/books/`)
    .then((res) => res.data)
    .then((books) => {
      console.log(books);
      setLibros(books);
    })}

  //para la paginacion
  let active = 1;
  let items = [];
  for (let number = 1; number <= 7; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>
    );
  }
   
  // evento de "soft delete", es decir no es un delete sino un update
  const deleteBook = (id) =>{
    axios.put(`http://localhost:3001/api/books/delete/${id}`)
    .then(()=>{(alert ("ELIMINADO!"))})
    .then (()=>{getBooksAll ()})
   }

  return (
    <div style={{ padding: "5%"}}>
      <Container>
        <Row>
          <Link to={`/admin/books/create`}>
            <Button variant="success">Agregar nuevo libro </Button>
          </Link>
        </Row>
        <br></br>
        <div>
          <Container>
            <Table striped bordered hover variant="dark">
              <thead >
                <tr style={{ textAlign: "center"}}>
                <th >Id</th>
                  <th >Titulo</th>
                  <th >Portada</th>
                  <th >Precio</th>
                  <th >Stock</th>
                  <th >Editar</th>
                  <th >Eliminar</th>
                </tr>
              </thead>
              <tbody>
                {libros.map((book, i) => (
                  <tr key={i} style={{textAlign: "center", verticalAlign:"middle" }}>
                    <td>{book.id}</td>
                    <td>{book.title}</td>
                    <td ><img style={{  width: "50%" }} src={book.front}/></td>
                    <td >${book.price}</td>
                    <td >{book.stock}</td>
                    <td >
                      <Link to={`/admin/books/edit/${book.id}`}>
                        <i className="bi bi-pencil"></i>
                      </Link>{" "}
                    </td>
                    <td style={{ textAlign: "center" }}>
                      <i
                        style={{ cursor: "pointer" }}
                        onClick={()=>{deleteBook(book.id)}} 
                        className="bi bi-trash3 text-danger"
                      ></i>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Container>
        </div>
        <div>
          <Pagination size="sm">{items}</Pagination>
          <br />
        </div>
      </Container>
    </div>
  );
};

export default AdminBooks;

