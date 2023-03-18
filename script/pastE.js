const pastE = document.getElementById("cards");

let DateBase = [];

function traerDatos() {
    //  fetch("./script/data.js")
    fetch("https://mindhub-xj03.onrender.com/api/amazing")
        .then(response => response.json())
        .then(datosApi => {
            console.log('entra fetch')
            DateBase = datosApi.currentDate
            crearTarjetas(datosEventos, pastE)
            displayCheckBox()
            addListenerCheck()
        })
        .catch(error => console.log('error.message : ' + error.message)
        )
}

traerDatos()

function crearTarjetas(lista) {

    let tarjetasCargadas = "";
    lista.forEach((evento) => {
        if (evento.date < DateBase) {
            tarjetasCargadas +=
                `<div class="card event__card border-0 text-center">
            <div class="col">
              <div class="card h-100" style="margin-left: 90px">
                <img class="card-img rounded" src=" ${evento.image} "width="100" height="200">
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title">Name: ${evento.name}</h5>
                    <p class="card-text">Description: ${evento.description}</p>
                    <input type="button"  onclick="details('${evento._id}')" value="Ver más" class="btn mt-auto">
                </div>
               </div>
            </div>
        </div>  `
        }
    })
    pastE.innerHTML = tarjetasCargadas;
}

function details(id) {
    window.location.href = `./details.html?id=${id}`;
}