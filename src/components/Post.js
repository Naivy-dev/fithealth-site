import React from "react";
import img from "../images/alongamento.jpeg";
import img2 from "../images/exfisico.jpeg";
import { Card, ListGroup } from "react-bootstrap";
import ReadMoreReact from "read-more-react/dist/components/ReadMoreReact";
const postsInfos = [
  {
    id: 1,
    title: "Como se alongar",
    imgSrc: img,
    content: `Inicie o alongamento até sentir uma certa tensão no músculo e, então, relaxe um pouco, sustentando por 30 segundos, voltando novamente à posição inicial de relaxamento.
    - Os movimentos devem ser sempre lentos e suaves.
    - Respeite os seus limites;
    - Respire fundo para aumentar o relaxamento muscular.
    
    •Alongamentos são exercícios essenciais para para o aumento de flexibilidade muscular. 
    •Sendo fundamental para o aquecimento e relaxamento dos músculos.
    •Pode ser praticado a qualquer hora do dia.
    •Benéficos: reduz tensão muscular, relaxa o corpo, previne lesões, prepara o corpo para atividades físicas, ativa a circulação.`,
  },
  {
    id: 2,
    title: "Benefícios da prática de exercícios",
    imgSrc: img2,
    content: `•Auxilia na prevenção de doenças 
    •Melhora condicionando físico 
    •Melhora a coordenação motora 
    •Flexibilidade 
    •Força 
    
    Podemos praticar uma caminhada ao ar livre, corrida, pular corda até andar de bicicleta por 15 minutos já melhora indicativos de saúde.`,
  },
];

export default function Post() {
  return postsInfos.map((post, id) => {
    return (
      <Card style={{ width: "40rem", textAlign: "left", overflow: "hidden" }}>
        <div className="image-background">
          <div className="image-container">
            <Card.Img id="contentImg" variant="top" src={post.imgSrc} />
          </div>
        </div>

        <Card.Body>
          <Card.Title>{post.title}</Card.Title>
          <ListGroup>
            <ReadMoreReact
              text={post.content}
              min={10}
              ideal={100}
              max={100000}
              readMoreText="Ler mais"
            />
          </ListGroup>
        </Card.Body>
      </Card>
    );
  });
}
