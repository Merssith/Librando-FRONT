import React from 'react'
import { Form, Button, Card, ListGroup } from 'react-bootstrap'


const Review = () => {
  return (
//input para agregar review
  <>
    <Form>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Dejar reseña</Form.Label>
      <Form.Control type="text" placeholder="Enter email" />
    </Form.Group>
    <Button variant="primary" type="submit">
      Enviar
    </Button>
  </Form>
  <br></br>
 {/* //reviews ya dejadas */}

 <Card >
      <ListGroup variant="flush">
        <ListGroup.Item>   
          <strong>Juanito Acosta</strong></ListGroup.Item>
        <ListGroup.Item>Reseña</ListGroup.Item>
      </ListGroup>
    </Card>
 </>
  )
}

export default Review