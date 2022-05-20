import { Button } from "react-bootstrap";
import React, { useState } from "react";
import { Card, Modal } from "react-bootstrap";
export default function LeftSideMenu(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Modal
        className="writeModal"
        show={show}
        onHide={handleClose}
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton style={{ border: "none" }}></Modal.Header>
        <div
          style={{
            paddingLeft: "20px",
            paddingRight: "20px",
            paddingTop: "10px",
            paddingBottom: "20px",
          }}
        >
          <input placeholder="Título" className="titleText"></input>
          <textarea placeholder="Descrição" className="contentText"></textarea>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <span class="material-symbols-outlined writePostIcons">
                image
              </span>
              <span class="material-symbols-outlined writePostIcons">
                gif_box
              </span>
            </div>
            <Button
              className="sendButton"
              style={{
                fontWeight: "bold",
                border: 0,
                borderRadius: 10,
                fontSize: 24,
                marginTop: 15,
                width: 180,
                height: 60,
                color: "",
                backgroundColor: "#21DEBE",
              }}
            >
              Enviar
            </Button>
          </div>
        </div>
      </Modal>
      <div style={{ position: "sticky", top: 100 }}>
        <Card
          style={{
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
          <div onClick={() => props.changeMode("feed")} className="menuItem">
            <span className="material-symbols-outlined menuIcon">house</span>
            <p>Início</p>
          </div>
          <div
            onClick={() => props.changeMode("suggested")}
            className="menuItem"
          >
            <span class="material-symbols-outlined menuIcon">
              emoji_objects
            </span>
            <p>Sugestões</p>
          </div>
        </Card>
        <Button
          className="postButton"
          onClick={handleShow}
          style={{
            fontWeight: "bold",
            border: 0,
            borderRadius: 10,
            fontSize: 24,
            marginTop: 15,
            height: 60,
            width: "100%",
            backgroundColor: "#21DEBE",
          }}
        >
          Escrever
        </Button>
      </div>
    </>
  );
}
