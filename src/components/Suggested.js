import { Card } from "react-bootstrap";
import Post from "./Post";

export default function Suggested() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      <Post IdArray={[3]} />
      <Card style={{ padding: "2rem" }}>
        <div className="suggestItem">
          <p className="suggestTitles">Cuidados com o corpo</p>
          <p className="likes suggestLike">100 likes</p>
        </div>
        <div className="suggestItem">
          <p className="suggestTitles">Melhorias na dieta</p>
          <p className="likes suggestLike">100 likes</p>
        </div>
        <div className="suggestItem">
          <p className="suggestTitles">
            Artrite: o que é, sintomas e como tratar
          </p>
          <p className="likes suggestLike">100 likes</p>
        </div>
      </Card>
    </div>
  );
}
