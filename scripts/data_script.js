const getAPI__id = async(id) => {
    try {
        const resp = await fetch(`https://api-reto2-peliculas.herokuapp.com/peliculas/${id}`);
        const data = await resp.json();
        return data
    } catch (error) {
        return error 
    }
}

const x = async () => {
    let id = localStorage.getItem('id');
    const data = await getAPI__id(id);
    console.log(data)
    const html = document.getElementById('card__container');
    html.innerHTML += `
    <div id="card">
        <img id="card__img" src="${data.img}" width="500" alt="">
        <h3 id="card__h3">Titulo: ${data.title}</h3>
        <p id="card__text">Director: ${data.director}</p>
        <p id="card__text">Fecha de estreno: ${data.date}</p>
    </div>
    `
}

x()



