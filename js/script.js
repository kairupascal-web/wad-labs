
const container = document.getElementById("servicesContainer");
const serviceSelect = document.getElementById("serviceSelect");

function renderServiceCards(serviceList, targetContainer) {
    if (!targetContainer) return;

    targetContainer.innerHTML = "";
    serviceList.forEach(service => {
        const card = document.createElement("div");
        card.className = "service-card";
        card.innerHTML = `
            <div class="service-title">
                <h3>${service.name}</h3>
            </div>
            <div class="service-info">
                <p>${service.description}</p>
                <h2 class="service-price">${service.price}</h2>
                <button>Book Service</button>
            </div>
        `;
        targetContainer.appendChild(card);
    });
}

function renderServiceOptions(serviceList, selectElement) {
    if (!selectElement) return;

    selectElement.innerHTML = "";
    serviceList.forEach(service => {
        const option = document.createElement("option");
        option.value = service.name;
        option.textContent = `${service.name} - ${service.price}`;
        selectElement.appendChild(option);
    });
}

renderServiceCards(services, container);
renderServiceOptions(services, serviceSelect);