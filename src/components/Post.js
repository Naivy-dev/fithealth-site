import React, { useEffect, useState } from "react";
import { Card, ListGroup, Modal } from "react-bootstrap";
//#region Posts
const postsInfos = [
  {
    id: 1,
    title: "Como se alongar",
    imgSrc:
      "https://cdn.discordapp.com/attachments/927894260978696212/976663531166519306/alongamento.jpeg",
    content: `Inicie o alongamento até sentir uma certa tensão no músculo e, então, relaxe um pouco, sustentando por 30 segundos, voltando novamente à posição inicial de relaxamento.
    - Os movimentos devem ser sempre lentos e suaves.
    - Respeite os seus limites;
    - Respire fundo para aumentar o relaxamento muscular.
    
    •Alongamentos são exercícios essenciais para para o aumento de flexibilidade muscular. 
    •Sendo fundamental para o aquecimento e relaxamento dos músculos.
    •Pode ser praticado a qualquer hora do dia.
    •Benéficos: reduz tensão muscular, relaxa o corpo, previne lesões, prepara o corpo para atividades físicas, ativa a circulação.`,
    pfName: 'Roque Marques',
    pfp: 'https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687',
    pfJob: 'Professor de Yoga',
  },
  {
    id: 2,
    title: "Benefícios da prática de exercícios",
    imgSrc:
      "https://cdn.discordapp.com/attachments/927894260978696212/976663531502067792/exfisico.jpeg",
    content: `•Auxilia na prevenção de doenças 
    •Melhora condicionando físico 
    •Melhora a coordenação motora 
    •Flexibilidade 
    •Força 
    
    Podemos praticar uma caminhada ao ar livre, corrida, pular corda até andar de bicicleta por 15 minutos já melhora indicativos de saúde.`,
    pfName: 'Camargo Pastore',
    pfp: 'https://images.unsplash.com/photo-1454789548928-9efd52dc4031?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880',
    pfJob: 'Fisiculturista',
  },
  {
    id: 3,
    title: "Saúde Mental: Como você cuida da sua?",
    imgSrc:
      "https://cdn.discordapp.com/attachments/927894260978696212/976649939998375996/unknown.png",
    content: `Quando ouvimos falar de Saúde Mental, a primeira coisa que vem na mente é "Doença Mental". Porém, é muito mais que isso.
  Para a Organização Mundial da Saúde (OMS), o conceito de saúde é bem mais abrangente que a simples ausência de doença: é um completo estado de bem-estar físico, mental e social e, dessa forma, mercê atenção em todos as suas vertentes.
  
  A saúde saúde é uma parte integrante e complementar à manutenção das funções orgânicas. Portanto, a promoção da saúde mental é essencial para que o indivíduo tenha a capacidade necessária de executar suas habilidades pessoais e profissionais.
  
  O bom estado mental confere ao homem que amplo exercícios de seus direitos sociais e de cidadania. Assegurar ainda, as condições de interação social para uma convivência familiar mais harmônica e segura.
  
  Precisamos compreender que as disfunções orgânicas podem acontecer por diversos  motivos e, por isso, as desordens mentais e físicas podem surgir. Consequentemente, os  problemas mentais, como o transtorno bipolar, depressão e transtornos de ansiedade, se  
  
  expressam como um reflexo de fatores internos e externos.  
  
  Essas questões não podem ser interpretadas como sinal de fraqueza ou falha de caráter.  Elas podem surgir por influência genética ou oriundas de alterações clínicas, sociais e  de problemas familiares originados na infância ou na adolescência.  
  
  É importante e necessário combater, o quanto antes, a disseminação desses estigmas e  mitos, pois eles colaboram para aumentar a discriminação associada à doença mental.  Por conseguinte, muitas pessoas que precisam de orientação ou de tratamento são  ignoradas ou desencorajadas à busca de auxílio.  
  
  O equilíbrio da saúde mental é importante, pois permite com que se aprenda a lidar com  emoções positivas e negativas. Além de trazer ao indivíduo uma maior capacidade de  relacionamento com outras pessoas e autoconhecimento de suas habilidades pessoais e  profissionais.  
  
  Mas, como conseguir manter uma boa saúde mental com um cenário tão caótico e  atípico como o que estamos vivendo?  
  
  Pratique exercícios físicos, utilize a tecnologia a seu favor e ligue para seus amigos e  familiares, faça chamadas de vídeo e veja pessoas que há muito tempo não via. Pense  em você, sobre suas qualidades, suas habilidades, no que te faz bem, reveja o que te faz  mal, faça coisas que te dão alegria.  
  
  E, se for necessário, consulte um psicólogo. Vale ressaltar que todo ser humano deveria  consultar-se com um psicólogo, até mesmo quando está bem. Este profissional é capaz  de orientar e ajudar as pessoas para que consigam organizar e administrar melhor suas  emoções e seus pensamentos.  
  
  Sendo assim, melhorando sua vida em vários aspectos relevantes, profissional, pessoal,  o relacionamento com as pessoas do seu convívio e com você mesmo.  Lembre-se: Todas as pessoas podem apresentar sinais de sofrimento psíquico em  alguma fase da vida.  
  
  
  Fonte: https://fametro.edu.br/2021/02/04/vamos-falar-sobre-saude-mental-por-lisiane-thompson-flores/
  `,
    pfName: 'Jorge Roberto',
    pfp: 'https://images.unsplash.com/photo-1592393972911-ad0bc7e114e2?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764',
    pfJob: 'Psicólogo',
  },
  {
    id: 4,
    imgSrc:
      "https://media.discordapp.net/attachments/927894260978696212/976673383062306856/unknown.png?width=817&height=460",
    title: "Como podemos substituir o pão do café da manhã?",
    content: `Hoje trouxemos uma mega receita para substituir o famoso pão do café da manhã e tornar a sua manhã mais saudável e gostosa.
    Abaixo está a receita de um belíssimo bolo de banana e aveia.
    Ingredientes
    3 bananas maduras
    1 xícara (chá) de açúcar mascavo
    2 xícaras (chá) de aveia em flocos finos
    1 colher (sopa) de fermento em pó
    2 colheres (sopa) de manteiga
    3 ovos
    1 xícara (chá) de leite
    Margarina e farinha de trigo para untar
    Modo de preparo
    No liquidificador, bata a banana, o açúcar mascavo, a aveia, o fermento, a manteiga, os ovos e o leite até obter um creme homogêneo. Coloque em uma fôrma de bolo inglês média, untada e enfarinhada. Leve ao forno médio, preaquecido, por 30 minutos ou até que ao enfiar um palito no centro do bolo, ele saia limpo. Retire do forno, deixe esfriar e desenforme. Sirva em seguida, se desejar, decorado com rodelas de banana.
    
    https://www.terra.com.br/vida-e-estilo/culinaria/receitas/saiba-como-substituir-pao-no-cafe-da-manha-com-receitas-incriveis,c0bbe771fe43245ed5e5ad47ef1359a98z09ubd0.html
    `,
    pfName: 'João Brites',
    pfp: 'https://images.unsplash.com/photo-1533738363-b7f9aef128ce?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735',
    pfJob: 'Estudante de Nutricionismo',
  },
];
//#endregion
export default function Post(props) {
  const [show, setShow] = useState(false);
  const [curPost, setPost] = useState(0);
  const handleClose = () => setShow(false);
  const handleShow = (id) => {
    setShow(true);
    setPost(id);
  };

  
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
        <div className="image-background">
          <div className="image-container">
            <img
              className="contentImg"
              style={{ width: "100%" }}
              src={postsInfos[curPost].imgSrc}
              alt=""
            ></img>
          </div>
        </div>
        <div style={{ padding: "3rem", maxHeight: "100%", overflow: "hidden" }}>
          <div className="modal-profile">
            <div style={{ display: "flex", gap: "1rem" }}>
              <div className="profile-pic">
                <img src={postsInfos[curPost].pfp} alt="Profile Picture" ></img>
              </div>
              <div className="profile-info">
                <h2 className="profile-name">
                  {postsInfos[curPost].pfName}
                </h2>
                <h3 className="profile-job">
                  {postsInfos[curPost].pfJob}
                </h3>
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "end"}}>
                    <div className="postCard--icons">
                      <span class="material-symbols-outlined">
                        comment
                      </span>
                      <p>100K</p>
                    </div>
                    <div className="postCard--icons">
                      <span class="material-symbols-outlined">
                        thumb_up
                      </span>
                      <p>100K</p>
                    </div>
                    <div className="postCard--icons">
                      <span class="material-symbols-outlined">
                        screen_share
                      </span>
                      <p>100K</p>
                    </div>
                  </div>
          </div>
          <Modal.Title>{postsInfos[curPost].title}</Modal.Title>
          <Modal.Body
            style={{
              whiteSpace: "pre-line",
              overflow: "auto",
              maxHeight: "90%",
              position: "relative",
              padding: 0,
            }}
          >
            {postsInfos[curPost].content}

            {/* TODO: Adicionar "Scrollbar box" para descrição */}
          </Modal.Body>
        </div>
      </Modal>
      
      {postsInfos.filter(post => props.IdArray.includes(post.id)).map((post, id) => {
        return (
          <div key={id}>
            <Card
              style={{
                width: "40rem",
                textAlign: "justify",
                overflow: "hidden",
              }}
            >
              <div className="image-background">
                <div className="image-container">
                  <Card.Img
                    id="contentImg"
                    variant="top"
                    src={post.imgSrc}
                    onClick={() => handleShow(id)}
                  />
                </div>
              </div>

              <Card.Body className="postCard">
                <Card.Title className="postTitle">{post.title}</Card.Title>
                <ListGroup>
                  <p className="content">{post.content}</p>
                </ListGroup>
                <div className="postCard--footer">
                  <button 
                    className="more" 
                    onClick={() => handleShow(id)}
                    style={{ margin: 0, padding: 0}}
                  >
                    Ler mais
                  </button>
                  <div className="icons-wrapper">
                    <div className="postCard--icons">
                      <span class="material-symbols-outlined">
                        comment
                      </span>
                      <p>100K</p>
                    </div>
                    <div className="postCard--icons">
                      <span class="material-symbols-outlined">
                        thumb_up
                      </span>
                      <p>100K</p>
                    </div>
                    <div className="postCard--icons">
                      <span class="material-symbols-outlined">
                        screen_share
                      </span>
                      <p>100K</p>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>
        );
      }
      )
      }
    </>
  );
}
