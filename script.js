const aulas = [
  {
    numero: "33",
    tema: "Elementos da Circunferência",
    capa: "aula33.png",
    textoIntegral: "https://docs.google.com/presentation/d/1CZ4fAkGJx9NTHU3-0h8vIUVnZ66UhuKjtxsn0TVrwkc/edit?usp=sharing",
    hq: "https://docs.google.com/presentation/d/1td8TX0akZ0U8iP_YoVw8OcWZpfQvb2GF/edit?usp=sharing&ouid=115314558291944343259&rtpof=true&sd=true",
    exercicios: "",
    pratiqueMais: "",
    khanAcademy: ""
  },
  {
    numero: "34",
    tema: "As propriedades dos polígonos",
    capa: "aula34.png",
    textoIntegral: "https://docs.google.com/presentation/d/13ikDfFkvdNl6tk1d7kl3zpvRJnpzxvviYYY7bVTr700/edit?usp=sharing",
    hq: "https://docs.google.com/presentation/d/12u9iDDjx7kRChNjfqPw-wjiehAZaoriT/edit?usp=sharing&ouid=115314558291944343259&rtpof=true&sd=true",
    exercicios: "",
    pratiqueMais: "",
    khanAcademy: ""
  },
  {
    numero: "35",
    tema: "Círculo e circunferência",
    capa: "aula35.png",
    textoIntegral: "https://docs.google.com/presentation/d/1QZgtss156MKNZh6YjlkurCMO8G_Lwh-8solpcYoRHrE/edit?usp=sharing",
    hq: "https://docs.google.com/presentation/d/1syU8Q7geOYLuMx-QTWN5btPRfMxsqutJ/edit?usp=sharing&ouid=115314558291944343259&rtpof=true&sd=true",
    exercicios: "",
    pratiqueMais: "",
    khanAcademy: ""
  },
  {
    numero: "36",
    tema: "Mosaicos e Ladrilhamentos",
    capa: "aula36.png",
    textoIntegral: "https://docs.google.com/presentation/d/1YgeQXiyypJkBlxHwZlrw2Q5Yj-PjiNecoZSwmpCeHew/edit?usp=sharing",
    hq: "https://docs.google.com/presentation/d/1POpNZJkjcjx7mjjAKEONnJDcBe6UG0Cv/edit?usp=sharing&ouid=115314558291944343259&rtpof=true&sd=true",
    exercicios: "",
    pratiqueMais: "",
    khanAcademy: ""
  }
];

const gradeAulas = document.getElementById("gradeAulas");

function iconeSVG(tipo) {
  const inicio = '<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">';
  const fim = "</svg>";

  if (tipo === "livro") {
    return inicio +
      '<circle cx="24" cy="24" r="22" stroke="currentColor" stroke-width="1.5"/>' +
      '<path d="M12 14h9c3 0 5 2 5 4v16c0-2-2-4-5-4h-9V14Z" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round"/>' +
      '<path d="M36 14h-9c-3 0-5 2-5 4v16c0-2 2-4 5-4h9V14Z" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round"/>' +
      fim;
  }

  if (tipo === "hq") {
    return inicio +
      '<circle cx="24" cy="24" r="22" stroke="currentColor" stroke-width="1.5"/>' +
      '<path d="M9 13h14a4 4 0 0 1 4 4v7a4 4 0 0 1-4 4h-6l-5 4v-4H9a4 4 0 0 1-4-4v-7a4 4 0 0 1 4-4Z" stroke="currentColor" stroke-width="2.2"/>' +
      '<path d="M27 20h10a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4h-4l-5 4v-4h-2" stroke="currentColor" stroke-width="2.2"/>' +
      fim;
  }

  if (tipo === "exercicios") {
    return inicio +
      '<circle cx="24" cy="24" r="22" stroke="currentColor" stroke-width="1.5"/>' +
      '<path d="M14 33h8l14-14-8-8-14 14v8Z" stroke="currentColor" stroke-width="2.3" stroke-linejoin="round"/>' +
      '<path d="M25 14l8 8" stroke="currentColor" stroke-width="2.3"/>' +
      fim;
  }

  if (tipo === "pratique") {
    return inicio +
      '<circle cx="24" cy="24" r="22" stroke="currentColor" stroke-width="1.5"/>' +
      '<path d="M14 24a10 10 0 1 0 3-7" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>' +
      '<path d="M12 13v8h8" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>' +
      '<path d="M24 18v12M18 24h12" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>' +
      fim;
  }

  return inicio +
    '<circle cx="24" cy="24" r="22" stroke="currentColor" stroke-width="1.5"/>' +
    '<path d="M13 32l8-8 6 5 9-12" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/>' +
    '<path d="M29 17h7v7" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/>' +
    fim;
}

function criarBotao(rotulo, url, tipo) {
  if (!url) {
    return `
      <div class="botao espera" aria-disabled="true">
        <span class="esquerda">
          <span class="icone" aria-hidden="true">${iconeSVG(tipo)}</span>
          <span class="rotulo">${rotulo}</span>
        </span>
        <span class="em-breve">Em breve</span>
      </div>
    `;
  }

  return `
    <a class="botao" href="${url}" target="_blank" rel="noopener noreferrer">
      <span class="esquerda">
        <span class="icone" aria-hidden="true">${iconeSVG(tipo)}</span>
        <span class="rotulo">${rotulo}</span>
      </span>
      <span class="seta" aria-hidden="true">→</span>
    </a>
  `;
}

function criarCard(aula) {
  const card = document.createElement("article");
  card.className = "card";

  card.innerHTML = `
    <div class="card-top">
      <span class="area">Recomposição de Matemática</span>
      <strong>Aula ${aula.numero}</strong>
    </div>

    <div class="capa">
      <img src="${aula.capa}" alt="Capa da Aula ${aula.numero}: ${aula.tema}" loading="lazy">
    </div>

    <div class="conteudo">
      <div class="tema">
        <small>Tema da aula</small>
        <h3>${aula.tema}</h3>
      </div>

      <h4 class="materiais-titulo">Acesse os materiais:</h4>

      <div class="lista">
        ${criarBotao("Texto Integral", aula.textoIntegral, "livro")}
        ${criarBotao("Páginas HQ", aula.hq, "hq")}
        ${criarBotao("Exercícios", aula.exercicios, "exercicios")}
        ${criarBotao("Pratique mais", aula.pratiqueMais, "pratique")}
        ${criarBotao("Evoluir + com Khan Academy", aula.khanAcademy, "khan")}
      </div>
    </div>
  `;

  return card;
}

aulas.forEach((aula) => {
  gradeAulas.appendChild(criarCard(aula));
});
