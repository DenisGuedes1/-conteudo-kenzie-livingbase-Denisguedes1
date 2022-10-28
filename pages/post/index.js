function renderDadosPost() {
  const dados = localStorage.getItem("@post");
  const dadosClick = JSON.parse(dados);
  console.log(dadosClick.image);

  const ulTag = document.querySelector(".conteiner");
  const lista = document.createElement("li");
  const image = document.createElement("img");
  const title = document.createElement("p");
  title.setAttribute("class", "tituloPost");
  const conteudo = document.createElement("article");
  conteudo.setAttribute("class", "conteudoPost");
  const descricao = document.createElement("p");
  descricao.setAttribute("class", "descricaoPost");

  image.src = dadosClick.image;
  title.innerText = dadosClick.title;
  conteudo.innerText = dadosClick.content;
  descricao.innerText = dadosClick.description;
  lista.append(title, descricao, image, conteudo);
  ulTag.appendChild(lista);
}
renderDadosPost();
const btn = document.querySelector(".voltar");
btn.addEventListener("click", (e) => {
  window.location.replace("../../index.html");
  localStorage.removeItem("@post");
});
const btnVoltarAotopo = document.querySelector(".btnVoiltarTopo");
btnVoltarAotopo.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo(0, 1);
});
