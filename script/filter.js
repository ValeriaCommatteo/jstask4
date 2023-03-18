// const filter = document.getElementById("cards");

let datosEventos = []

function traerDatos() {
    //  fetch("./script/data.js")
    fetch("https://mindhub-xj03.onrender.com/api/amazing")
        .then(response => response.json())
        .then(datosApi => {
            console.log('entra fetch')
            datosEventos = datosApi.events
            crearTarjetas(datosEventos)
            displayCheckBox()
            addListenerCheck()
        })
        .catch(error => console.log('error.message : ' + error.message)
        )
}

traerDatos()

// CHECKBOX

// const checkBoxHome = document.getElementById("checkBox")

// let datosEventos = eventos;
// console.log('datosEventos ' + ':' + datosEventos)

// let checkBoxCargados = displayCheckBox();

function displayCheckBox() {
    let checkCategory = document.getElementById("checkBox")
    let allCategory = datosEventos.map(eventoCheck => eventoCheck.category)
    let arrayCheckbox = new Set(allCategory) // crea un obejto en valor de la variable y le asigna propiedades sacando los valores repetidos

    let checkBox = [...arrayCheckbox] // crea los un array con los valores de arrayCheckbox

    let templateCheckBox = ""

    checkBox.forEach(category => { // recorre el array para retornar el valor impreso en el html
        templateCheckBox += `
            <label>
            <input type=checkbox value="${category}">
            ${category}</label>`
    })
    checkCategory.innerHTML = templateCheckBox
}

let selectedCheck = [] // array para guardar los checkbox seleccionados

function addListenerCheck() {

let checkBoxes = document.querySelectorAll('input[type=checkbox]') // a partir de  la variable llama a todos los selectores de tipo input
checkBoxes.forEach(check => {
    check.addEventListener("click", (event) => {
        let checkOk = event.target.checked;

        if (checkOk) { // toma el valor de la variable si esta chekeado devuelve un valor true
            selectedCheck.push(event.target.value)

        } else {
            selectedCheck = selectedCheck.filter(uncheck => uncheck !== event.target.value)
        }

        arraySearch() // Funcion que filtra al array.
    })
})
}

let search = document.getElementById("label-search")

let wrintingSearch = "" // variable para guardar lo que el usuario escribe en la busqueda

search.addEventListener("keyup", (event) => {
    wrintingSearch = event.target.value
    arraySearch() // Llamador de la funcion
})
// Paso que combina los checkbox y input search con sus condiciones definidas
function arraySearch() {

    let searchData = [] // array de eventos filtrados

    if (selectedCheck.length > 0 && wrintingSearch !== "") {
        selectedCheck.map(category => {
            searchData.push(...datosEventos.filter(eventos => eventos.name.toLowerCase().includes(wrintingSearch.trim().toLowerCase()) &&
                eventos.category == category))
            console.log(searchData)
        })
    } else if (selectedCheck.length == 0 && wrintingSearch !== "") {
        searchData.push(...datosEventos.filter(eventos => eventos.name.toLowerCase().includes(wrintingSearch.trim().toLowerCase())))
        console.log(searchData)
    } else if (selectedCheck.length > 0 && wrintingSearch === "") {
        selectedCheck.map(category => searchData.push(...datosEventos.filter(eventos => eventos.category == category)))
        console.log(selectedCheck)
    } else {
        searchData.push(...datosEventos)
    }
    crearTarjetas(searchData)
}
arraySearch()