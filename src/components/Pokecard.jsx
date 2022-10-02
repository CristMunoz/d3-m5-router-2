import React from 'react'
import { Card } from 'react-bootstrap'

export default function Pokecard({pokes}) {
  const {name, stats, src, types} = pokes;
  return (
    <Card style={{ width:"750px" }} className="mt-5 mx-auto flex-row p-2">
      <Card.Img height="500" variant="top" src={src} />
      <Card.Body>
        <Card.Title className="fw-bold">{name}</Card.Title>
        <ul className="text-left">
          <Card.Text>
            {stats?.map((stat, ind) => (
              <li style={{listStyleType:"none", textAlign:"left"}} key={ind}>
                {stat.name}: {stat.base}
              </li>
            ))}
          </Card.Text>
        </ul>
        <Card.Text className="text-secondary">{types}</Card.Text>
      </Card.Body>
    </Card>
  )
}
