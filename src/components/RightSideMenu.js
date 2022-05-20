import { Card } from "react-bootstrap";

export default function RightSideMenu() {
  return (
    <div style={{ position: "sticky", top: 100 }}>
      <Card
        style={{
          height: "40%",
          paddingTop: 30,
          paddingBottom: 30,
          border: 0,
          borderRadius: "10px",
          maxHeight: 400,
          fontWeight: "bold",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 30,
          fontSize: 24,
          color: "#6F7574",
        }}
      >
        <Card.Title>Em alta</Card.Title>
        <div></div>
        <div>Ver mais</div>
      </Card>
      <Card
        style={{
          top: 400,
          height: "10%",
          paddingTop: 30,
          paddingBottom: 30,
          border: 0,
          borderRadius: "10px",
          maxHeight: 400,
          fontWeight: "bold",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 30,
          fontSize: 24,
          color: "#6F7574",
        }}
      >
        <Card.Title>Em alta</Card.Title>
        <div></div>
        <div>Ver mais</div>
      </Card>
    </div>
  );
}
