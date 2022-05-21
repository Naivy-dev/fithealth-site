import React from "react";
import { Card } from "react-bootstrap";
import Post from "./Post";
const desc = `Olá, me chamo João, sou apaixonado por nutrição e estou disposto a ajudar a todos.
Desde pequeno tive interesse pela área pois meus pais já atuavam na área voltada para saúde, e me interessei por essa influência.
Meu objetivo é ser um nutricionista de alta qualidade disposto a oferecer o melhor tipo de solução que eu conseguir para os problemas que aparecer.`;
export default function ProfileContainer() {
  return (
    <>
      <Card style={{ width: "638px", padding: "3rem" }}>
        <div className="infoDivider">
          <div className="pfp-background">
              <div className="pfp-container">
                <Card.Img id="profileImg" src='https://images.unsplash.com/photo-1533738363-b7f9aef128ce?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735' />
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
      <Post IdArray={[4]}/>
    </>
  );
}
