import { Card } from "react-bootstrap";
import defaultPfp from "../images/default pfp.png";
export default function RightSideMenu() {
  return (
    <div style={{ position: "sticky", top: 100 }}>
      <Card
        style={{
          paddingTop: 30,
          paddingBottom: 30,
          border: 0,
          borderRadius: "10px",
          maxHeight: 450,
          fontWeight: "bold",
          gap: 30,
          color: "#6F7574",
          textAlign: "left",
          paddingLeft: "15px",
          paddingRight: "15px",
        }}
      >
        <div className="titles">Em alta</div>
        <div className="rightMenuItems">
          <div className="rightMenuItem">
            <p>Você sabe se alongar</p>
            <p className="likes">200K Likes</p>
          </div>

          <div className="rightMenuItem">
            <p>5 Passos para melhorar a postura</p>
            <p className="likes">200K Likes</p>
          </div>
          <div className="rightMenuItem">
            <p>
              Dicas da nutricionista Diana de como manter uma alimentação
              saudável
            </p>
            <p className="likes">200K Likes</p>
          </div>
        </div>
        <button className="more">Ver mais</button>
      </Card>
      <Card
        style={{
          top: 10,
          paddingTop: 30,
          paddingBottom: 30,
          border: 0,
          borderRadius: "10px",
          maxHeight: 300,
          fontWeight: "bold",
          color: "#6F7574",
          textAlign: "left",
          paddingLeft: "15px",
          paddingRight: "10px",
        }}
      >
        <div className="titles">Quem seguir</div>
        <div className="whoToFollow">
          <div className="menuItem">
            <img alt="" className="whoToFollowIcons" src={defaultPfp} />
            <p>Roque Marques</p>
          </div>
          <div className="menuItem">
            <img alt="" className="whoToFollowIcons" src={defaultPfp} />
            <p>Arthur Brites</p>
          </div>
          <div className="menuItem">
            <img alt="" className="whoToFollowIcons" src={defaultPfp} />
            <p>Camargo Pastore</p>
          </div>
        </div>
        <button className="more">Ver mais</button>
      </Card>
    </div>
  );
}
