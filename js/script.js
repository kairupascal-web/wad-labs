
const services = [
    {
        name: "Body Wash",
        description: "Complete exterior body cleaning.",
        price: "KSh 500"
    },
    {
        name: "Engine Cleaning",
        description: "Professional engine cleaning service.",
        price: "KSh 800"
    },
    {
        name: "Interior Detailing",
        description: "Deep interior vacuuming and detailing.",
        price: "KSh 1500"
    },
    {
        name: "Waxing",
        description: "Protect your paint with premium wax.",
        price: "KSh 1200"
    }
];

const container = document.getElementById("servicesContainer");
const serviceSelect = document.getElementById("serviceSelect");
const addServiceBtn = document.getElementById("addServiceBtn");
const removeSelectedBtn = document.getElementById("removeSelectedBtn");
const newServiceName = document.getElementById("newServiceName");
const newServiceDescription = document.getElementById("newServiceDescription");
const newServicePrice = document.getElementById("newServicePrice");
const serviceFeedback = document.getElementById("serviceFeedback");

function showFeedback(message, isError = true) {
    if (!serviceFeedback) return;

    serviceFeedback.textContent = message;
    serviceFeedback.style.color = isError ? "#cc0000" : "#117a37";
}

function renderServiceCards(serviceList, targetContainer) {
    if (!targetContainer) return;

    targetContainer.innerHTML = "";
    serviceList.forEach((service, index) => {
        const card = document.createElement("div");
        card.className = "service-card";
        card.innerHTML = `
            <div class="service-title">
                <h3>${service.name}</h3>
            </div>
            <div class="service-info">
                <p>${service.description}</p>
                <h2 class="service-price">${service.price}</h2>
                <div class="service-actions">
                    <button type="button">Book Service</button>
                    <button type="button" class="remove-service-btn" data-index="${index}">Remove</button>
                </div>
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

function refreshUI() {
    renderServiceCards(services, container);
    renderServiceOptions(services, serviceSelect);
}

if (container) {
    container.addEventListener("click", function (event) {
        const target = event.target;
        if (!(target instanceof HTMLElement)) return;

        if (target.classList.contains("remove-service-btn")) {
            const index = Number(target.dataset.index);
            if (Number.isNaN(index)) return;

            services.splice(index, 1);
            refreshUI();
            showFeedback("Service removed.", false);
        }
    });
}

if (addServiceBtn) {
    addServiceBtn.addEventListener("click", function () {
        const name = newServiceName ? newServiceName.value.trim() : "";
        const description = newServiceDescription ? newServiceDescription.value.trim() : "";
        const price = newServicePrice ? newServicePrice.value.trim() : "";

        if (!name || !description || !price) {
            showFeedback("Please fill in all fields before adding a service.");
            return;
        }

        services.push({ name, description, price });
        refreshUI();
        showFeedback("Service added successfully.", false);

        if (newServiceName) newServiceName.value = "";
        if (newServiceDescription) newServiceDescription.value = "";
        if (newServicePrice) newServicePrice.value = "";
    });
}

if (removeSelectedBtn && serviceSelect) {
    removeSelectedBtn.addEventListener("click", function () {
        const selectedName = serviceSelect.value;

        if (!selectedName) {
            showFeedback("Select a service first.");
            return;
        }

        const index = services.findIndex(service => service.name === selectedName);
        if (index === -1) {
            showFeedback("Service not found.");
            return;
        }

        services.splice(index, 1);
        refreshUI();
        showFeedback("Selected service removed.", false);
    });
}

refreshUI();