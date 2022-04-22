import React from "react";
import img from "../images/placeholder.png";
import { Card, ListGroup } from "react-bootstrap";
const postInfo = {
  title: "Título do Post",
  imgSrc: img,
  content: "Conteúdo",
};
export default function Post() {
  return (
    <Card style={{ width: "18rem", textAlign: "left" }}>
      <Card.Img variant="top" src={postInfo.imgSrc} />
      <Card.Body>
        <Card.Title>{postInfo.title}</Card.Title>
        <ListGroup>{postInfo.content}</ListGroup>
      </Card.Body>
    </Card>
  );
}
