import { Card } from "react-bootstrap";
export default function RightSideMenu() {
  return (
    <div style={{ position: "sticky", top: 100 }}>
      <Card
        style={{
          padding: "30px",
          border: 0,
          borderRadius: "10px",
          fontWeight: "bold",
          gap: 30,
          color: "#6F7574",
          textAlign: "left",
          paddingLeft: "15px",
          paddingRight: "15px",
          marginBottom: 20,
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
          padding: "30px",
          border: 0,
          borderRadius: "10px",
          fontWeight: "bold",
          color: "#6F7574",
          textAlign: "left",
          paddingLeft: "15px",
          paddingRight: "10px",
        }}
      >
        <div className="titles" style={{ marginBottom: "1rem" }}>
          Quem seguir
        </div>
        <div className="whoToFollow">
          <div className="menuItem">
            <div>
              <div className="side-profile-pic">
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687"
                />
              </div>
            </div>
            <p>Roque Marques</p>
          </div>
          <div className="menuItem">
            <div>
              <div className="side-profile-pic">
                <img
                  alt=""
                  style={{ width: "150%", marginLeft: "-25%" }}
                  src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1143"
                />
              </div>
            </div>
            <p>Arthur Brites</p>
          </div>
          <div className="menuItem">
            <div>
              <div className="side-profile-pic">
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1454789548928-9efd52dc4031?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880"
                />
              </div>
            </div>
            <p>Camargo Pastore</p>
          </div>
        </div>
        <button className="more">Ver mais</button>
      </Card>
    </div>
  );
}
