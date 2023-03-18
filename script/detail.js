 `
<div class="card border-0">
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
            </div>
            <div class="d-flex flex-row justify-content-end">
                    <a href="./index.html" class="btn btn-primary">Home</a>
            </div>               
        </div>
    </div>
</div>`