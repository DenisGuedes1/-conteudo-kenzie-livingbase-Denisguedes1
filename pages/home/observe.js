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
    // renderCards(filter(dados));

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
    btn.addEventListener("click", (e) => {
      const postComId = document.getElementById(data.id);
      console.log(postComId);

      // postComId.addEventListener("click", () => {
      //   console.log(pComId);
      // });

      localStorage.setItem("@post", JSON.stringify(data));

      window.location.assign("./pages/post/post.html");
    });

    btn.setAttribute("class", "btnAcses");
    // console.log(dados.image);

    img.src = data.image;

    titlee.innerText = data.title;
    description.innerText = data.description;
    // conteudo.innerText = dados.content;

    li.append(img, titlee, description, btn);
    ulTag.appendChild(li);
    main.appendChild(ulTag);
  });
}
function renderAllCardsFilter(dados) {
  const main = document.querySelector(".posts");
  main.innerHTML = "";
  dados.forEach((data) => {
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
    btn.addEventListener("click", (e) => {
      const postComId = document.getElementById(data.id);
      console.log(postComId);

      // postComId.addEventListener("click", () => {
      //   console.log(pComId);
      // });

      localStorage.setItem("@post", JSON.stringify(data));

      window.location.assign("./pages/post/post.html");
    });

    btn.setAttribute("class", "btnAcses");
    // console.log(dados.image);

    img.src = data.image;

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
    const main = document.querySelector(".posts");
    main.innerHTML = "";
    const data = await apiObserve.request(pages);
    pages++;
    console.log("hoi estou aqui baby");

    let filter = data.news.filter(
      (elem) => btnpintura.innerText === elem.category
    );
    console.log(filter);
    if (filter.lentgh <= 0) {
      return renderAllCardsFilter(filter);
    } else {
      const textoAlert = document.querySelector(".alert");
      console.log(textoAlert);
      textoAlert.innerText =
        "Desculpe mais nao temos esssa categoria disponivel :/";
    }
  });
}
filter();

function btnDecoraction(pages) {
  const btn = document.querySelector(".decoracao");

  btn.addEventListener("click", async (e) => {
    e.preventDefault();
    // const main = document.querySelector(".posts");
    // main.innerHTML = "";
    console.log("hooi");
    const data = await apiObserve.request(pages);
    console.log(data);
    console.log(data.news[0].category);
    let filter = data.news.filter((elem) => btn.innerText === elem.category);
    localStorage.setItem("@filtro", JSON.stringify(filter));

    return renderAllCardsFilter(filter);
  });
}
btnDecoraction();

function btnOrganizaçao() {
  const btn = document.querySelector(".organizacao");
  btn.addEventListener("click", async (e) => {
    const data = await apiObserve.request(pages);
    console.log(data);
    console.log(data.news[0].category);
    let filter = data.news.filter((elem) => btn.innerText === elem.category);
    localStorage.setItem("@filtro", JSON.stringify(filter));
    console.log(filter);
    return renderAllCardsFilter(filter);
  });
}
btnOrganizaçao();

function btnLimpeza() {
  const btn = document.querySelector(".limpeza");
  btn.addEventListener("click", async (e) => {
    e.preventDefault();
    const data = await apiObserve.request(pages);

    console.log(data);
    console.log(data.news[0].category);
    let filter = data.news.filter((elem) => btn.innerText === elem.category);
    localStorage.setItem("@filtro", JSON.stringify(filter));
    console.log(filter);
    return renderAllCardsFilter(filter);
  });
}
btnLimpeza();

function btnSeguranca() {
  const btn = document.querySelector(".seguranca");
  btn.addEventListener("click", async (e) => {
    const data = await apiObserve.request(pages);
    console.log("hoi eu sou o seguranca ");
    console.log(data.news[0].category);
    let filter = data.news.filter((elem) => btn.innerText === elem.category);
    localStorage.setItem("@filtro", JSON.stringify(filter));
    console.log(filter);
    return renderAllCardsFilter(filter);
  });
}
btnSeguranca();

function btnReformas() {
  const btn = document.querySelector(".reforma");
  btn.addEventListener("click", async (e) => {
    const data = await apiObserve.request(pages);
    console.log(data);

    let filter = data.news.filter((elem) => btn.innerText === elem.category);
    localStorage.setItem("@filtro", JSON.stringify(filter));
    console.log(filter);
    return renderAllCardsFilter(filter);
  });
}
btnReformas();

function btnAromas() {
  const btn = document.querySelector(".aromas");
  btn.addEventListener("click", async (e) => {
    const data = await apiObserve.request(pages);
    console.log(data);
    console.log(data.news[0].category);
    let filter = data.news.filter((elem) => btn.innerText === elem.category);
    localStorage.setItem("@filtro", JSON.stringify(filter));
    console.log(filter);
    return renderAllCardsFilter(filter);
  });
}
btnAromas();
