import React, { useState } from "react";
import { Card, ListGroup, Modal } from "react-bootstrap";
//#region Posts
const postsInfos = [
  {
    id: 0,
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
    pfName: "Roque Marques",
    pfp: "https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687",
    pfJob: "Professor de Yoga",
  },
  {
    id: 1,
    title: "Benefícios da prática de exercícios",
    imgSrc:
      "https://cdn.discordapp.com/attachments/927894260978696212/976663531502067792/exfisico.jpeg",
    content: `•Auxilia na prevenção de doenças 
    •Melhora condicionando físico 
    •Melhora a coordenação motora 
    •Flexibilidade 
    •Força 
    
    Podemos praticar uma caminhada ao ar livre, corrida, pular corda até andar de bicicleta por 15 minutos já melhora indicativos de saúde.`,
    pfName: "Camargo Pastore",
    pfp: "https://images.unsplash.com/photo-1454789548928-9efd52dc4031?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880",
    pfJob: "Fisiculturista",
  },
  {
    id: 2,
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
    pfName: "Jorge Roberto",
    pfp: "https://images.unsplash.com/photo-1592393972911-ad0bc7e114e2?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764",
    pfJob: "Psicólogo",
  },
  {
    id: 3,
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
    pfName: "João Brites",
    pfp: "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735",
    pfJob: "Estudante de Nutrição",
  },
  {
    id: 4,
    imgSrc:
      "https://media.discordapp.net/attachments/927894260978696212/977362261549121546/unknown.png?width=459&height=459",
    title: "Dicas para cuidar do seu cabelo!",
    content: `Dicas básicas para você cuidar do seu cabelo
    1. Dica 1: Lave o cabelo com água morna para gelada.
    2. Dica 2: Escolha o shampoo e condicionador certo para o seu tipo de cabelo
    3. Dica 3: Massageie o couro cabeludo suavemente.
    4. Dica 4: Evite o uso excessivo de produtos para o cabelo. 
    5. Dica 5: Evite o calor excessivo no cabelo.
    Faça um cronograma capilar.`,
    pfName: "Cleiton Rasta",
    pfp: "https://images.unsplash.com/photo-1525828404701-f213ceff9f6f?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470",
    pfJob: "Tricologista",
  },
  {
    id: 5,
    imgSrc:
      "https://media.discordapp.net/attachments/927894260978696212/977362229563392000/unknown.png?width=459&height=459",
    title: "Cuidados com a pele!",
    content: `Como podemos ter melhores cuidados com a pele ?

Hoje, elaboramos para vocês um passo a passo de como ter melhores cuidados com a sua pele.

1. Higienizar a pele.
2. Tonificar a pele.
3. Hidratação é indispensável para todos os tipos de pele.
4. Fotoproteção.

 Lembrete: Criar e manter uma rotina de cuidados com a pele previne e retarda o envelhecimento. Porém, é importante respeitar o tipo de pele e usar os produtos adequados. Além de manter a autoestima em dia, o carinho que se oferece à pele será retribuído com proteção e saúde.`,
    pfName: "Roberta Josefina",
    pfp: "https://images.unsplash.com/photo-1453487977089-77350a275ec5?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1473",
    pfJob: "Dermatologista",
  },
  {
    id: 6,
    imgSrc:
      "https://media.discordapp.net/attachments/927894260978696212/977368621661716550/unknown.png?width=756&height=459",
    title: "Moçambique tem primeiro caso de poliomelite em 30 anos",
    content: `Moçambique declarou nesta quarta-feira (18/05/2022) um surto de poliomielite depois que o vírus foi detectado em uma criança que vive na região de Tete, o primeiro caso do poliovírus no país em quase três décadas, informou a Organização Mundial da Saúde (OMS).
    O caso, que marca o segundo caso importado de poliovírus selvagem no sul da África este ano após um surto no Malaui em fevereiro, foi detectado na criança que começou a apresentar paralisia no final de março, disse a OMS.
    A poliomielite invade o sistema nervoso e pode causar paralisia irreversível em poucas horas. Não tem cura, mas a infecção pode ser prevenida pela vacinação. Uma redução drástica de casos em todo o mundo nas últimas décadas deve-se às intensas campanhas nacionais e regionais de imunização em bebês e crianças.
     A OMS está apoiando vacinações em larga escala direcionadas a milhões de crianças no sul da África para impedir a propagação do vírus no continente.
    `,
    pfName: "Amanda Kleyn Tales",
    pfp: "https://media.discordapp.net/attachments/927894260978696212/977370128834494494/unknown.png?width=472&height=459",
    pfJob: "Jornalista",
  },
  {
    id: 7,
    imgSrc:
      "https://media.discordapp.net/attachments/927894260978696212/977370355511476224/unknown.png?width=459&height=459",
    title: "Pratique exercícios sem sair de casa!",
    content: `1- Aquecimento
    Uma etapa primordial antes de qualquer atividade física. Suas chances de ter uma lesão aumentam consideravelmente sem aquecer seu corpo antes.
    
    2-Pular corda 
    Uma ótima opção para quem não tem bicicleta ergométrica ou esteira por perto. 15 minutos dessa atividade rendem uma perda de aproximadamente 180 calorias – o equivalente a 1 hora de caminhada. Esse exercício também fortalece os ossos e os membros inferiores – coxa e panturrilha.
    
    3- Flexões
    Extremamente importantes para fortalecer os ombros, peitos e braços, além de fáceis de fazer em qualquer ambiente. Ajuda a perder o excesso de peso na barriga, por trabalhar músculos como o abdômen e os glúteos
    
    4-Agachamento 
    Um dos exercícios mais simples, mas bem completo para beneficiar nosso corpo. Ativa vários músculos juntos com a extensão e flexão do quadril e dos joelhos. Então, muito cuidado ao realizá-lo: pode causar lesões se feito do jeito errado.
    
    5-Polichinelo
    Um dos mais divertidos de fazer em casa. Aquece o corpo rapidamente – nos primeiros momentos você já sentirá como o polichinelo afeta o corpo todo. Isso porque demanda um trabalho cardiovascular maior, além de um grande gasto de calorias.
    
    6-Abdominais 
    É um exercício que ajuda a perder a barriga sem sair de casa. E claro, lembrando novamente: todo o cuidado ao começar as suas abdominais, por conta de possíveis dores que possa sentir nas costas.`,
    pfName: "Camargo Pastore",
    pfp: "https://images.unsplash.com/photo-1454789548928-9efd52dc4031?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880",
    pfJob: "Fisiculturista",
  },
  {
    id: 8,
    imgSrc:
      "https://media.discordapp.net/attachments/927894260978696212/977370932798689410/unknown.png?width=459&height=459",
    title: "Como fazer meditação",
    content: `* Encontre um lugar tranquilo e silencioso

    * Reserve um tempo diário
    
    * Comece meditando por curtos
    períodos, de 03 a 05 minutos 
    * Adote uma posição
    confortável (sentado ou deitado)  
    
    * Respire, profundamente, uma ou dua
    vezes. Isso deve trazer sua atencão
    para o próprio corpo
    
    * Observe as sensações do momento,
    como o contato com o chão ou a cadeira,
    por exemplo
    
    * Sinta os movimentos do corpo, como
    o tórax se movendo durante a respiração
    
    * Mantenha a atenção na respiração.
    Ela deve funcionar como uma
    espécie de âncora
    
    
    * Foque a atenção na experiência
    do momento
    
    * O segredo é tentar repousar sua atenção
    unicamente na respiração, no ar entrando
    e saindo do corpo, e, quando perceber que
    se distraiu, gentilmente trazer a atenção de
    volta para o ato de respirar
    
    
    Dica: A prática de yoga, pilates foca exercitar o corpo e a mente em busca do bem-estar físico e mental, por meio de posturas, dinâmicas, meditação e respiração, mas tudo voltado a quem pratica outras atividades físicas`,
    pfName: "Roque Marques",
    pfp: "https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687",
    pfJob: "Professor de Yoga",
  },
  {
    id: 9,
    imgSrc:
      "https://media.discordapp.net/attachments/927894260978696212/977372574503825418/unknown.png",
    title: "A Influência do consumo de sementes em nossa alimentação",
    content: `Muitos não sabem, mas as sementes, em geral, são excelentes fontes de fibras e antioxidantes. Hoje mostraremos os benefícios de três delas: o gergelim, a de chia e a de girassol.
    SEMENTE DE GIRASSOL
    A sementes de girassol é uma excelente fonte de vitamina E, um poderoso antioxidante. Além disso ajudam a reduzir os níveis de colesterol no sangue, a aumentar a resposta imunológica e a diminuir o risco de desenvolver alguns tipos de câncer. As sementes de girassol são também ricas em selênio, que ajuda a melhorar a desintoxicação do organismo. 
    SEMENTE DE GERGELIM
    Rica em cálcio, a semente de gergelim ajuda a fortalecer os ossos e também melhora a função reprodutiva. As sementes são ricas em manganês, cobre e cálcio, contêm Vitamina B1 e Vitamina E. Elas também ajudam na diminuição da produção de colesterol. Além de auxiliar na função reprodutiva, em decorrência de seus efeitos antioxidantes e do aumento nos níveis de testosterona.
    SEMENTE DE CHIA
    A chia é uma semente rica em ômega 3, que tem uma função importante para o coração, pois evita coágulos e arritmias cardíacas, além de reduzir os triglicérides. Além de auxiliar na diminuição de doenças cardiovasculares, a Chia possui uma ação antioxidante para melhorar o sistema digestivo evitando a constipação.
    
    https://g1.globo.com/bemestar/noticia/2019/09/24/sementes-sao-fontes-de-fibras-e-ajudam-a-prevenir-problemas-de-saude.ghtml
    `,
    pfName: "João Brites",
    pfp: "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735",
    pfJob: "Estudante de Nutrição",
  },
  {
    id: 10,
    imgSrc:
      "https://media.discordapp.net/attachments/927894260978696212/977375838280495124/unknown.png?width=691&height=459",
    title: "Como manter uma boa alimentação na infância",
    content: `Quem tem criança em casa sabe que a hora de comer não é fácil. Muitas crianças não gostam de comer frutas, legumes e verduras, ou só funcionam com recompensas.
    Hoje trouxemos algumas dicas para ajudar na boa alimentação das crianças.
    Se perceber que a criança tem dificuldade em comer quando começa a introdução alimentar, procure ajuda profissional. É mais fácil mudar hábitos alimentares nos primeiros três anos de vida.
    Tente entender por que a criança não quer comer.
    Faça alimentos com temperos menos tradicionais (pimenta, gengibre, cúrcuma).
    Prepare frutas grelhadas.
    Ofereça alimentos de diferentes formas.
    Use o macarrão como base e acrescente verduras, legumes e carnes.
    Não dê doces fora do horário estipulado.
    Faça misturas que escondam os alimentos.
    Importante lembra-los que a hora de comer não é negociável. É necessário estabelecer uma rotina para hora do almoço, café e jantar.
    `,
    pfName: "João Brites",
    pfp: "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735",
    pfJob: "Estudante de Nutrição",
  },
  {
    id: 11,
    imgSrc:
      "https://media.discordapp.net/attachments/927894260978696212/977380531647938560/unknown.png",
    title: "Contole de Estresse",
    content: `Como lidamos com nossas emoções é o que determina como está a qualidade da nossa saúde mental.Assim, tê-la ou alcançá-la está muito longe da ausência de transtornos mentais. O desequilíbrio emocional facilita o surgimento de doenças mentais. Podemos dizer que a saúde mental contempla, entre tantos fatores, a nossa capacidade de sensação de bem-estar e harmonia, a nossa habilidade em manejar de forma positiva as adversidades e conflitos, o reconhecimento e respeito dos nossos limites e deficiências, nossa satisfação em viver, compartilhar e se relacionar com os outros -algo muito maior e anterior ao início dos transtornos mentais.
    Manter a saúde mental, no entanto, não é tão simples quanto parece, principalmente nos dias de hoje. São muitos problemas:
    Estresse;
    Brigas;
    Atrasos;
    Advertências;
    
    Doenças;
    Incapacidades;
    Limitações;
    Falta de família ( ou excesso de família);
    Pouco dinheiro (ou muito dinheiro);
    Diversos são os fatores que podem influenciar negativamente a nossa saúde mental.
    Uma grande fonte de sofrimento atualmente é o trabalho.
    Dedicamos grande parte do tempo de nossas vidas ao nosso emprego e nem sempre isso é prazeroso ou satisfatório. A alta taxa de desemprego no País, a baixa remuneração, más condições de trabalho, falta de planejamento profissional, entre tantos outros, são questões que levam ao aumento significativo de diversos transtornos.
    Se está sendo difícil lidar com o estresse, por algum motivo principalmente nos casos de perdas, mudanças bruscas, é importante buscar de um profissional de saúde para que possa te ajudar a estabelecer estratégias para lidar melhor e voltar a ter mais qualidade de vida. 
    Fique atento, seu corpo sempre te dá alertas! Não deixe os sintomas do estresse passarem despercebidos. Não negligencie sua saúde, cuide-se, a prevenção é o melhor remédio.
    `,
    pfName: "Jorge Roberto",
    pfp: "https://images.unsplash.com/photo-1592393972911-ad0bc7e114e2?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764",
    pfJob: "Psicólogo",
  },
  {
    id: 12,
    imgSrc:
      "https://media.discordapp.net/attachments/927894260978696212/977379429963661373/unknown.png",
    title: "Diferença entre Transtorno Mental e Doença Mental",
    content: `O uso da palavra transtorno está relacionado com um conceito mais amplo de diagnóstico. Ao falarmos de doença nós temos as causas, um padrão de sintomas e medidas terapêuticas padronizadas, como, por exemplo, as doenças cardíacas.

    Quando falamos em transtornos, nos referimos a uma trajetória diagnóstica que varia bastante de pessoa para pessoa, multifatoriais e com diversas formas de tratamento.
    
    PRECONCEITO
    Sim, o preconceito ainda é bastante presente na sociedade. Começando pelo lugar que a loucura ocupou na história - o louco como alguém a ser afastado, enclausurado, aquele que não compartilha da ‘mesma realidade’ que os demais. Durante bastante tempo a loucura esteve associada às questões metafísicas de forma negativa. Aquele intangível que está relacionado ao mal, ao descontrole, ao diferente. Hoje em dia, as questões de saúde mental ainda ocupam um lugar bastante 
    
    nebuloso. Um diabético tem um exame com uma medida glicêmica que prova o que ele tem e o mesmo vale para questões cardíacas e as demais doenças crônicas. Como a saúde mental está no corpo e no meio, muitas vezes é concebida como uma fraqueza do sujeito, algo sobre o qual ele teria condições de atuar e não o faz. Por exemplo:
    
    NOSSA, MAS AQUELE MENINO TEM TUDO, POR QUE ESTÁ DEPRIMIDO?
    Troque a depressão por câncer e veja como fica esquisito:
    
    NOSSA, MAS AQUELE MENINO TEM TUDO, POR QUE ESTÁ COM C NCER?
    A maioria da sociedade ainda tem dificuldade em reconhecer que é uma doença e ainda ampliar o conceito de saúde e doença. Não dá mais para serem conceitos antagônicos; ter saúde não significa necessariamente não ter nenhuma doença.
    
    Justamente pelo preconceito e julgamento, as pessoas não querem ser reconhecidas no lugar daqueles que têm transtornos mentais, com o risco de serem vistos como fracos ou descontrolados, algo que vai desde questões morais até as questões éticas. No caso de crianças então, a família se sente muito culpada e exposta.
    
    VALE A PENA LEMBRAR QUE BOA PARTE DA POPULAÇÃO ESTÁ DEPRIMIDA E ANSIOSA, MAS NÃO ESTÁ INTERNADA, POIS AINDA CONSEGUEM SE SUBMETER AO FUNCIONAMENTO DA SOCIEDADE E FREQUENTAM O TRABALHO, A ESCOLA E OUTROS LUGARES SEM FAZER GRANDES ALARDES.
    
    Combater o preconceito é sempre falar sobre o tema, propor debates e tentar entender que todo mundo tem seu jeito de funcionar, mesmo que seja bastante diferente do seu jeito. E tentar construir formas de convivências que não afastem quem é “diferente”. Na infância, por exemplo, as crianças com autismo têm bastante dificuldade de inserção nas escolas. Falta, da parte de todos, um pouco de empatia e flexibilidade para pensar onde encontramos o ponto comum. Não é que essas crianças não aprendem, elas aprendem de outro jeito. Não é que não sabem brincar, elas brincam de outro jeito. Mas a vida corrida não nos dá tempo de aprender o outro jeito de fazer as coisas.
    
    
    No mundo adulto também falta bastante conversa sobre isso. Todo mundo tem que ser muito bom, o tempo todo. Tem que ser 100% em tudo: no trabalho, na família, na academia, na escola. Temos que falar mais sobre isso, temos que nos permitir sofrer quando é preciso, reconhecer o sofrimento do outro.
    `,
    pfName: "Jorge Roberto",
    pfp: "https://images.unsplash.com/photo-1592393972911-ad0bc7e114e2?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764",
    pfJob: "Psicólogo",
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
              <div
                className="profile-pic"
                style={{
                  backgroundImage: "url(" + postsInfos[curPost].pfp + ")",
                }}
              ></div>
              <div className="profile-info">
                <h2 className="profile-name">{postsInfos[curPost].pfName}</h2>
                <h3 className="profile-job">{postsInfos[curPost].pfJob}</h3>
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "end" }}>
              <div className="postCard--icons">
                <span class="material-symbols-outlined">comment</span>
                <p>100K</p>
              </div>
              <div className="postCard--icons">
                <span class="material-symbols-outlined">thumb_up</span>
                <p>100K</p>
              </div>
              <div className="postCard--icons">
                <span class="material-symbols-outlined">screen_share</span>
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

      {postsInfos
        .filter((post) => props.IdArray.includes(post.id))
        .map((post, id) => {
          return (
            <div key={post.id}>
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
                      onClick={() => handleShow(post.id)}
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
                      onClick={() => handleShow(post.id)}
                      style={{ margin: 0, padding: 0 }}
                    >
                      Ler mais
                    </button>
                    <div className="icons-wrapper">
                      <div className="postCard--icons">
                        <span class="material-symbols-outlined">comment</span>
                        <p>100K</p>
                      </div>
                      <div className="postCard--icons">
                        <span class="material-symbols-outlined">thumb_up</span>
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
        })}
    </>
  );
}
