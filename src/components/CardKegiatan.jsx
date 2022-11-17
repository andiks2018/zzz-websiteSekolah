import React from 'react'
import { Card } from 'react-bootstrap'
export default function CardKegiatan(props) {
  return (
    <Card>
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
          <Card.Text>
            {props.desc}
          </Card.Text>
        </Card.Body>
      </Card>
  )
}
