const upcomingE = document.getElementById("upcomingE");

const DateBase = new Date(data.currentDate); 

let tarjetasCargadas = "";

let tarjetasUpcomingE = data.events.filter((evento) => new Date(evento.date) >= DateBase);

    tarjetasUpcomingE.forEach((evento) => (tarjetasCargadas += 
    
    `
      <div class="card event__card p-2 m-4 border-0 text-center">
      <div class="row no-gutters">
        <div class="col-sm-4" style="margin-left: 90px">
          <img class="card-img rounded" src=" ${evento.image} "width="100" height="200">
        </div>
        <div class="col-sm-6"  style="padding-top: 50px">
          <div class="card-body">
            <h5 class="card-title">${evento.name}</h5>
            <p class="card-text">${evento.description}</p>
          </div>
        </div>
      </div>
    </div> `))

upcomingE.innerHTML = tarjetasCargadas;