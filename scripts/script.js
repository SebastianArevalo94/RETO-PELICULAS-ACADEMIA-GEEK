const getAPI = async() => {
    try {
        const resp = await fetch('https://api-reto2-peliculas.herokuapp.com/peliculas');
        const data = await resp.json();
        return data
    } catch (error) {
        return error 
    }
}

const script = async (id) => {
    localStorage.setItem('id',id);
    window.location.replace("../data.html");
}

const x = async () => {
    const data = await getAPI();
    data.forEach(element => {
        const { title, img, id } = element;
        const html = document.getElementById('card__container');
        html.innerHTML += `
        <div id="card">
            <img id="card__img" src="${img}" width="300" alt="">
            <h3 id="card__h3">${title}</h3>
            <div class="container d-flex justify-content-center">
            <button class="btn btn-danger m-2" onclick="script(${id})">
              Ver mas
            </button>
          </div>
        </div>
        `
    });
}

x()
