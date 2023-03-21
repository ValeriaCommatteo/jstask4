let data = []
let evento = []
let detail = document.getElementById('detail');

function traerDatos() {
    //  fetch("./script/data.js")
    fetch("https://mindhub-xj03.onrender.com/api/amazing")
        .then(response => response.json())
        .then(data => {
            datosApi = data
            configuraBusqueda(datosApi)
        })
        .catch(error => console.log(error.message))
}

traerDatos()

function configuraBusqueda(datosApi) {
    let queryString = location.search
    let params = new URLSearchParams(queryString)
    let id = params.get('id')
    evento = datosApi.events.find((info) => {
        return info._id == id
    }); 
    crearTarjeta()
}

function crearTarjeta() {
    detail.innerHTML = `<div class="card border-0 align-items-center">
    <div class="col" style="height: 300px; width: 600px;">
        <div class="card" style="margin-left: 90px">
            <img class="card-img rounded" src=" ${evento.image} "width="100" height="250">
            <div class="card-body d-flex flex-column text-center">
                    <h5 class="card-title">${evento.name}</h5>
                    <p class="card-text">${evento.description}</p>
                    <p class="card-text">${evento.date}</p>
                    <p class="card-foot">$${evento.price}</p>
                    <p class="card-text">${evento.category}</p>
                    <p class="card-text">${evento.capacity}</p>
                    <p class="card-text">${evento.assistance}</p>
                    <a href="./index.html" class="btn mt-auto">Home</a>
            </div>               
        </div>
    </div>
</div>`
}