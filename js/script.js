
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
        description: "Cleaning of house carpets",
        price: "KSh 1000"
    },
    {
        name: "Buffering",
        description: "Polishing of car body",
        price: "KSh 1500"
    },
    {
        name: "Car Perfumes",
        description: "Installation of car perfumes",
        price: "KSh 500"
    },
    {
        name: "Fire Extinguisher",
        description: "Installation of fire extinguisher in car",
        price: "KSh 1000"
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
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const reviewInput = document.getElementById("review");
const submitBtn = document.getElementById("reviewSubmitBtn");
const feedbackMessage = document.getElementById("inputFeedback");
const counter = document.getElementById("counter");
const customerRadios = document.querySelectorAll('input[name="customer"]');
const reviewDeleteBtn = document.getElementById("reviewDeleteBtn");
const ownerImage = document.getElementById("ownerImage");
const ownerInfo = document.getElementById("ownerInfo");

function showFeedback(message, isError = true) {
    if (!serviceFeedback) return;

    serviceFeedback.textContent = message;
    serviceFeedback.style.color = isError ? "#cc0000" : "#117a37";
}

function showFormFeedback(message, isError = true) {
    if (!feedbackMessage) return;

    feedbackMessage.textContent = message;
    feedbackMessage.style.color = isError ? "red" : "green";
    feedbackMessage.style.fontWeight = "bold";
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

[nameInput, emailInput, reviewInput].forEach(function (input) {
    if (input) {
        input.addEventListener("input", function () {
            if (feedbackMessage && feedbackMessage.textContent !== "") {
                feedbackMessage.textContent = "";
            }
        });
    }
});

if (serviceSelect) {
    serviceSelect.addEventListener("change", function () {
        if (feedbackMessage && feedbackMessage.textContent !== "") {
            feedbackMessage.textContent = "";
        }
    });
}

customerRadios.forEach(function (radio) {
    radio.addEventListener("change", function () {
        if (feedbackMessage && feedbackMessage.textContent !== "") {
            feedbackMessage.textContent = "";
        }
    });
});

if (reviewInput && counter) {
    counter.textContent = reviewInput.value.length + " characters";
    reviewInput.addEventListener("input", function () {
        counter.textContent = reviewInput.value.length + " characters";
    });
}

if (submitBtn) {
    submitBtn.addEventListener("click", function (event) {
        event.preventDefault();

        const requiredFields = [nameInput, emailInput, reviewInput];
        const hasEmptyField = requiredFields.some(input => !input || input.value.trim() === "");
        const selectedService = serviceSelect ? serviceSelect.value : "";
        const selectedCustomer = document.querySelector('input[name="customer"]:checked');

        if (emailInput && emailInput.value.trim() !== "" && !emailInput.checkValidity()) {
            showFormFeedback("Please enter a valid email address.");
            return;
        }

        if (hasEmptyField || selectedService.trim() === "" || !selectedCustomer) {
            showFormFeedback("Please fill in all the fields before submitting.");
            return;
        }

        showFormFeedback(`Thank you ${nameInput.value.trim()}! Your review for ${selectedService} has been received.`, false);

        requiredFields.forEach(input => {
            if (input) input.value = "";
        });

        if (serviceSelect) serviceSelect.value = "";
        if (counter) counter.textContent = "0 characters";

        customerRadios.forEach(radio => {
            radio.checked = false;
        });
    });
}

if (reviewDeleteBtn) {
    reviewDeleteBtn.addEventListener("click", function (event) {
        event.preventDefault();

        if (nameInput) nameInput.value = "";
        if (emailInput) emailInput.value = "";
        if (reviewInput) reviewInput.value = "";
        if (serviceSelect) serviceSelect.value = "";
        if (feedbackMessage) feedbackMessage.textContent = "";
        if (counter) counter.textContent = "0 characters";

        customerRadios.forEach(function (radio) {
            radio.checked = false;
        });
    });
}

if (ownerImage && ownerInfo) {
    ownerImage.addEventListener("click", function () {
        const isHidden = ownerInfo.style.display === "" || ownerInfo.style.display === "none";
        ownerInfo.style.display = isHidden ? "block" : "none";
    });
}

refreshUI();