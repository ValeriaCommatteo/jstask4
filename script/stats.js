let arrayPastE = []

//  fetch("./script/data.js")
fetch("https://mindhub-xj03.onrender.com/api/amazing")
.then(response => response.json())
.then(data => {
    arrayPastE = pastE(data.events, data.currentDate)
    arrayUpcomingE= upComingE(data.events, data.currentDate)
    console.log('entra fetch')
    // let porcentage = assistance(arrayPastE)
    // let maxCapacity = capacity(arrayPastE)
    printTable(results(assistance(arrayPastE), assistance(arrayPastE).reverse(), capacity(arrayPastE)), "tableStats")
    printSecondTable(dataTable(arrayUpcomingE), "upcoming")
    printSecondTable(dataTable(arrayPastE), "past")
           
  }).catch(error => console.log('error.message : ' + error.message))

 function upComingE(data, currentDate) {
    return data.filter(evento => evento.date > currentDate)
  }
 function pastE(data, currentDate) {
    return data.filter(events => events.date < currentDate)
 }


 //Evento con mayor asistencia (Eventos Pasados)

 function assistance(arrayPastE) {
    const arrayPorcentage = arrayPastE.map(events => {
        return {
            attendance: (events.assistance / events.capacity) * 100,
            nameEvent: events.name
        }
    })

    arrayPorcentage.sort((a,b) => a.attendance - b.attendance)
    console.log(arrayPorcentage)
    return arrayPorcentage
}

function capacity(arrayPastE) {
    const arrayCapacity = arrayPastE.map(events => {
        return {
            capacity: events.capacity,
            nameEvent: events.name
        }
    })

arrayCapacity.sort((a,b) => b.capacity - a.capacity)
console.log(arrayCapacity)
return arrayCapacity

}

function results(highestPorcentage, lowestPorcentage, largesCapacity){
    let all = {
        highestPorcentage: highestPorcentage[0].nameEvent,
        lowestPorcentage: lowestPorcentage[0].nameEvent,
        largesCapacity: largesCapacity[0].nameEvent
    }
    return all
}

function printTable(results, container){
    const tabla = document.getElementById(container)
    tabla.innerHTML = `
    <td>${results.highestPorcentage}</td>
    <td>${results.lowestPorcentage}</td>    
    <td>${results.largesCapacity}</td>
    `
}

function dataTable(array) {
    let categorys = Array.from(new Set(array.map(a => a.category)));
    let eventsCategory = categorys.map(categorys => array.filter(events => events.category == categorys))
    let result = eventsCategory.map(eventsCat => {
        let calculate = eventsCat.reduce((acc, events) => {
            console.log(events)
            acc.category = events.category;
            acc.revenues += events.price * (events.assistance || events.estimate);
            acc.attendance += ((events.assistance || events.estimate) *100) / events.capacity
            return acc
        }, {
            category: "",
            revenues: 0,
            attendance: 0
        })
        calculate.attendance = calculate.attendance / eventsCat.length
        return calculate
    })
    return result;
}

function printSecondTable(array, idTag) {
    const upcomingTable = document.getElementById(idTag)
    let html = array.map(events => {
      return `
        <tr>
                <td>${events.category}</td>
                <td>${events.revenues}</td>
                <td>${events.attendance.toFixed(2)}%</td>
            </tr>
        `
    })
    upcomingTable.innerHTML = html.join("")
  }

