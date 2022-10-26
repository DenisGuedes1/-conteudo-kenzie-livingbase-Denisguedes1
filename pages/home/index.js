/* Desenvolva seu script aqui */
class api {
  static async requestApi() {
    const options = {
      method: "GET",
    };
    const response = await fetch(
      "https://m2-api-living.herokuapp.com/news",
      options
    )
      .then((resp) => resp.json())
      .then((resp) => {
        console.log(resp);
        return resp;
      })
      .catch((err) => console.log(err));
    return response;
  }
}

async function renderAll() {
  const main = document.querySelector(".posts");
  const data = await api.requestApi();
  console.log(data.news);
  data.news.forEach((dados) => {
    let ulTag = document.createElement("ul");
    ulTag.setAttribute("class", "conteinerUl");
    let li = document.createElement("li");
    li.setAttribute("class", "conteinerLi");
    let img = document.createElement("img");
    img.setAttribute("class", "imgPost");
    let title = document.createElement("p");
    title.setAttribute("class", "tituloPost");
    let description = document.createElement("article");
    description.setAttribute("class", "descricao");
    let conteudo = document.createElement("article");
    let btn = document.createElement("button");
    btn.innerText = "Acessar conteúdo";
    btn.setAttribute("class", "btnAcses");

    img.src = dados.image;
    title.innerText = dados.title;
    description.innerText = dados.description;
    conteudo.innerText = dados.content;

    li.append(img, title, description, btn);
    ulTag.appendChild(li);
    main.appendChild(ulTag);
  });
}

function renderbtnTodos() {
  const btntdos = document.querySelector(".todos");
  const main = document.querySelector(".posts");
  main.innerHTML = "";
  btntdos.addEventListener("click", (e) => {
    console.log("hellow world");
    renderAll();
  });
}
renderbtnTodos();
