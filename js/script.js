
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
    },
    {
        name: "Carpet Cleaning",
        description: "Cleaning of house carpets.",
        price: "KSh 1000"
    },
    {
        name: "Buffering",
        description: "Polishing of car body.",
        price: "KSh 1500"
    },
    {
        name: "Car Perfumes",
        description: "Installation of car perfumes.",
        price: "KSh 500"
    },
    {
        name: "Fire Extinguisher",
        description: "Installation of fire extinguisher in car.",
        price: "KSh 1000"
    }
];

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
                <button type="button">Book Service</button>
            </div>
        `;
        targetContainer.appendChild(card);
    });
}

function renderServiceOptions(serviceList, targetSelect) {
    if (!targetSelect) return;

    targetSelect.innerHTML = '<option value="">Select a service</option>';
    serviceList.forEach(service => {
        const option = document.createElement("option");
        option.value = service.name;
        option.textContent = `${service.name} - ${service.price}`;
        targetSelect.appendChild(option);
    });
}

renderServiceCards(services, container);
renderServiceOptions(services, serviceSelect);