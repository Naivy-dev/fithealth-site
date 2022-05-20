import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import pfp from "../images/default pfp.png";
import Post from "./Post";
const desc = `Olá, me chamo João, sou apaixonado por nutrição e estou disposto a ajudar a todos.
Desde pequeno tive interesse pela área pois meus pais já atuavam na área voltada para saúde, e me interessei por essa influência.
Meu objetivo é ser um nutricionista de alta qualidade disposto a oferecer o melhor tipo de solução que eu conseguir para os problemas que aparecer.`;
export default function ProfileContainer() {
  return (
    <>
      <Card style={{ maxWidth: "638px", padding: "3rem" }}>
        <div className="infoDivider">
          <div className="pfp-background">
            <div className="pfp-container">
              <Card.Img id="profileImg" src={pfp} />
            </div>
          </div>
          <div className="profileInfo">
            <h2>João Brites</h2>
            <p>18 Anos</p>
            <p>Estudante de Nutrição</p>
          </div>
        </div>
        <div className="profileDesc">{desc}</div>
      </Card>
      <Card style={{ minWidth: "638px", padding: "1rem" }}>
        <div className="profileOptions">
          <h2 className="optionsText">
            Posts
          </h2>
          <h2>
            |
          </h2>
          <h2 className="optionsText">
            Likes
          </h2>
        </div>
      </Card>
      <Post IdArray={[1,2]}/>
    </>
  );
}
