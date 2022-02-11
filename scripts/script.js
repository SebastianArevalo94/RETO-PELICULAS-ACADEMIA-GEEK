const getAPI = async() => {
    try {
        const resp = await fetch('http://localhost:3000/peliculas');
        const data = await resp.json();
        return data
    } catch (error) {
        return error 
    }
}

const script = async (id) => {
    let data = await getAPI__id(id);
    localStorage.setItem('id',id);
    window.location.replace("../data.html");
}

const getAPI__id = async(id) => {
    try {
        const resp = await fetch(`http://localhost:3000/peliculas/${id}`);
        const data = await resp.json();
        return data
    } catch (error) {
        return error 
    }
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