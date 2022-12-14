import React from 'react'
import { Button, Card } from 'react-bootstrap'

export default function CardJurusan(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.gambar} />
      <Card.Body>
        <Card.Title>{props.jurusan}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  )
}
