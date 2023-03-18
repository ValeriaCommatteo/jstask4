const tarjetasHome = document.getElementById('cards')

let eventos = []

function traerDatos() {
    //  fetch("./script/data.js")
    fetch("https://mindhub-xj03.onrender.com/api/amazing")
        .then(response => response.json())
        .then(datosApi => {
            eventos = datosApi.events
            crearTarjetas(eventos, tarjetasHome)
        })
        .catch(error => console.log(error.message))
}

traerDatos()

function crearTarjetas(lista) {
    let tarjetas = "";

    lista.forEach(evento => {
        tarjetas += `
      <div class="card event__card border-0 text-center">
        <div class="col">
            <div class="card h-100" style="margin-left: 90px">
                <img class="card-img rounded" src=" ${evento.image} "width="100" height="200">
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title">Name: ${evento.name}</h5>
                    <p class="card-text">Description: ${evento.description}</p>
                    <p class="card-text">Date: ${evento.date}</p>
                    <p class="card-foot">$${evento.price}</p>
                    <input type="button"  onclick="details('${evento._id}')" value="Ver más" class="btn mt-auto">      
                </div>
            </div>
          </div>
       </div>
    </div> `
    })
    tarjetasHome.innerHTML = tarjetas;
}

function details(id) {
    window.location.href = `./details.html?id=${id}`;
}