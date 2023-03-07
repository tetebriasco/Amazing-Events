function printDOMwithData(objeto) {
    let template = "";

    const tagToUpdate = document.getElementById("cards");
    const currentDate = new Date(objeto.currentDate);

    for (const evento of objeto.events) {
        const eventDate = new Date(evento.date);

        if (eventDate > currentDate) {
            template += `
                <div class="card1 d-flex flex-column align-items-center justify-content-between p-4">
                    <img src="${evento.image}" width=320px height=200px> 
                    <h2>${evento.name}</h2>
                    <p>${evento.description}</p>
                    <div class="d-flex flex-wrap justify-content-between w-100">
                        <p class="d-flex justify-content-center align-items-center m-0">Price $${evento.price}</p>
                        <a href="./details.html" class="btn btn-light text-black rounded-0 text-decoration-none">Ver más...</a>
                    </div>
                </div>
                `;
        }
    };
    tagToUpdate.innerHTML = template;
}

printDOMwithData(data)