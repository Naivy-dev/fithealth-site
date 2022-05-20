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
        show={show}
        onHide={handleClose}
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton></Modal.Header>
        <div style={{ padding: "20px", maxHeight: "100%", overflow: "hidden" }}>
          <Modal.Title></Modal.Title>
          <Modal.Body
            style={{
              whiteSpace: "pre-line",
              overflow: "auto",
              maxHeight: "90%",
              position: "relative",
            }}
          ></Modal.Body>
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
          <div className="menuItem">
            <span className="material-symbols-outlined menuIcon">house</span>
            <p>Início</p>
          </div>
          <div className="menuItem">
            <span className="material-symbols-outlined menuIcon">
              more_horiz
            </span>
            <p>Opções</p>
          </div>
        </Card>
        <Button
          onClick={handleShow}
          style={{
            fontWeight: "bold",
            fontSize: 24,
            marginTop: 30,
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
