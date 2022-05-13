import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import pfp from "../images/default pfp.png";
const desc = `Olá, me chamo Gabriel, sou apaixonado por nutrição e estou disposto a ajudar a todos.
Desde pequeno tive interesse pela área pois meus pais já atuavam na área voltada para saúde, e me interessei por essa influência.
Meu objetivo é ser um nutricionista de alta qualidade disposto a oferecer o melhor tipo de solução que eu conseguir para os problemas que aparecer.`;
export default function ProfileContainer() {
  return (
    <Card style={{ maxWidth: "700px", border: "0", boxShadow: "0px 3px 10px" }}>
      <div className={"infoDivider"}>
        <div className="pfp-background">
          <div className="pfp-container">
            <Card.Img id="contentImg" src={pfp} />
          </div>
        </div>
        <div></div>
        <div className="profileInfo">
          <p></p>
          <p>Gabriel Soares</p>
          <p>18 Anos</p>
          <p>Estudante de Nutrição</p>
        </div>
      </div>
      <ListGroup>
        <div className="profileDesc">{desc}</div>
      </ListGroup>
    </Card>
  );
}
