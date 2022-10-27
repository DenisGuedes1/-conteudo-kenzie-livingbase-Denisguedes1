export class apiObserve {
  static async request(page) {
    const options = {
      method: "GET",
    };

    const response = await fetch(
      `https://m2-api-living.herokuapp.com/news/?page=${page}`,
      options
    )
      .then((resp) => resp.json())
      .then((resp) => {
        return resp;
      })
      .catch((err) => console.log(err));
    return response;
  }
}

let pages = 0;

export const observe = new IntersectionObserver(async (entries) => {
  console.log(entries);

  /////===== uma verificacao usando o metodo some=======//
  if (entries.some((entry) => entry.isIntersecting)) {
    const dados = await apiObserve.request(pages);

    renderCards(dados);
    renderCards(filter(dados));

    pages++;
  }
});

async function renderCards(dados) {
  const main = document.querySelector(".posts");
  const divObserve = document.querySelector(".observe");
  observe.observe(divObserve);
  dados.news.forEach((data) => {
    let ulTag = document.createElement("ul");
    ulTag.setAttribute("class", "conteinerUl");
    let li = document.createElement("li");
    li.setAttribute("class", "conteinerLi");
    let img = document.createElement("img");
    img.setAttribute("class", "imgPost");
    let titlee = document.createElement("p");
    titlee.setAttribute("class", "tituloPost");
    let description = document.createElement("article");
    description.setAttribute("class", "descricao");
    let conteudo = document.createElement("article");
    let btn = document.createElement("button");
    btn.innerText = "Acessar conteúdo";

    btn.setAttribute("class", "btnAcses");
    // console.log(dados.image);

    img.src = data.image;
    console.log(img);
    titlee.innerText = data.title;
    description.innerText = data.description;
    // conteudo.innerText = dados.content;

    li.append(img, titlee, description, btn);
    ulTag.appendChild(li);
    main.appendChild(ulTag);
  });
}

function filter() {
  const btnpintura = document.querySelector(".pintura");
  console.log(btnpintura);
  btnpintura.addEventListener("click", async (e) => {
    e.preventDefault();
    const data = await apiObserve.request();

    // let filter = data.news.category.filter((category) => category !== category);

    console.log("hoi estou aqui baby");
    console.log(data.news.category);
  });
}
filter();
