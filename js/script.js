const serviceSelect = document.getElementById("serviceSelect");

const services = [

    {
        name:"Body Wash",
        description:"Complete exterior body cleaning.",
        price:"KSh 500"
    },

    {
        name:"Engine Cleaning",
        description:"Professional engine cleaning service.",
        price:"KSh 800"
    },

    {
        name:"Interior Detailing",
        description:"Deep interior vacuuming and detailing.",
        price:"KSh 1500"
    },

    {
        name:"Waxing",
        description:"Protect your paint with premium wax.",
        price:"KSh 1200"
    }

];

if (serviceSelect) {
    // Prevent duplicate options if script runs more than once
    serviceSelect.querySelectorAll("option[data-generated='true']").forEach(option => option.remove());
    services.forEach(service => {
        const option = document.createElement("option");
        option.value = service.name;
        option.textContent = `${service.name} - ${service.price}`;
        option.setAttribute("data-generated", "true");
        serviceSelect.appendChild(option);
    });
}

const container = document.getElementById("servicesContainer");

if (container) {
    services.forEach(function(service){

        let card = document.createElement("div");

        card.classList.add("service-card");

        card.innerHTML =

        `
        <div class="service-title">
            <h3>${service.name}</h3>
        </div>

        <div class="service-info">

            <p>${service.description}</p>

            <h2 class="service-price">${service.price}</h2>

            <button class="book-service-btn" type="button">Book Service</button>

        </div>
        `;

        container.appendChild(card);

    });
}

document.querySelectorAll(".book-service-btn").forEach(button => {
    button.style.transition = "transform .2s ease, box-shadow .2s ease";
    button.addEventListener("mouseenter", function () {
        button.style.transform = "translateY(-2px)";
        button.style.boxShadow = "0 6px 14px rgba(0,0,0,.18)";
    });
    button.addEventListener("mouseleave", function () {
        button.style.transform = "translateY(0)";
        button.style.boxShadow = "none";
    });
});
// Get DOM elements
const heading = document.getElementById("mainHeading");
const sections = document.querySelectorAll("section");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const reviewInput = document.getElementById("review");
const submitBtn = document.getElementById("reviewSubmitBtn");
const feedbackMessage = document.getElementById("inputFeedback");
const counter = document.getElementById("counter");
const customerRadios = document.querySelectorAll('input[name="customer"]');

const REVIEW_DRAFT_KEY = "reviewFormDraft";

function showFeedback(message, isError = true) {
    if (feedbackMessage) {
        feedbackMessage.textContent = message;
        feedbackMessage.style.color = isError ? "red" : "green";
        feedbackMessage.style.fontWeight = "bold";
    }
}

[nameInput, emailInput, reviewInput].forEach(function (input) {
    if (input) {
        input.addEventListener("input", function () {
            if (feedbackMessage && feedbackMessage.textContent !== "") {
                feedbackMessage.textContent = "";
            }
            saveFormDraft();
        });
    }
});

if (serviceSelect) {
    serviceSelect.addEventListener("change", function () {
        if (feedbackMessage && feedbackMessage.textContent !== "") {
            feedbackMessage.textContent = "";
        }
        saveFormDraft();
    });
}

customerRadios.forEach(function (radio) {
    radio.addEventListener("change", function () {
        if (feedbackMessage && feedbackMessage.textContent !== "") {
            feedbackMessage.textContent = "";
        }
        saveFormDraft();
    });
});

if (reviewInput && counter) {
    counter.textContent = reviewInput.value.length + " characters";
    reviewInput.addEventListener("input", function () {
        counter.textContent = reviewInput.value.length + " characters";
    });
}

function getSelectedCustomerValue() {
    const selected = document.querySelector('input[name="customer"]:checked');
    return selected ? selected.value : "";
}

function saveFormDraft() {
    const draft = {
        name: nameInput ? nameInput.value : "",
        email: emailInput ? emailInput.value : "",
        review: reviewInput ? reviewInput.value : "",
        service: serviceSelect ? serviceSelect.value : "",
        customer: getSelectedCustomerValue()
    };
    localStorage.setItem(REVIEW_DRAFT_KEY, JSON.stringify(draft));
}

function loadFormDraft() {
    const saved = localStorage.getItem(REVIEW_DRAFT_KEY);
    if (!saved) return;

    try {
        const draft = JSON.parse(saved);
        if (nameInput) nameInput.value = draft.name || "";
        if (emailInput) emailInput.value = draft.email || "";
        if (reviewInput) reviewInput.value = draft.review || "";
        if (serviceSelect) serviceSelect.value = draft.service || "";
        customerRadios.forEach(radio => {
            radio.checked = (radio.value === (draft.customer || ""));
        });
        if (counter && reviewInput) {
            counter.textContent = reviewInput.value.length + " characters";
        }
    } catch (error) {
        localStorage.removeItem(REVIEW_DRAFT_KEY);
    }
}

loadFormDraft();

console.log(heading);
console.log(sections);





// Change heading colour when clicked
if (heading) {
    heading.addEventListener("click", function () {
        heading.style.color = "blue";
    });
}



if (submitBtn) {
    submitBtn.addEventListener("click", function (event) {
        event.preventDefault();
        const requiredFields = [nameInput, emailInput, reviewInput];
        const hasEmptyField = requiredFields.some(input => !input || input.value.trim() === "");
        const selectedService = serviceSelect ? serviceSelect.value : "";
        const selectedCustomer = getSelectedCustomerValue();

        if (hasEmptyField || selectedService.trim() === "" || selectedCustomer === "") {
            showFeedback("Please fill in all fields and select service + customer type before submitting.");
            return;
        }

        if (emailInput && !emailInput.checkValidity()) {
            showFeedback("Please enter a valid email address.");
            return;
        }

        showFeedback(`Thank you ${nameInput.value.trim()}! Your review for ${selectedService} has been received.`, false);
        requiredFields.forEach(input => {
            if (input) input.value = "";
        });
        if (serviceSelect) serviceSelect.value = "";
        if (counter) counter.textContent = "0 characters";

        document.querySelectorAll('input[name="customer"]').forEach(radio => {
            radio.checked = false;
        });
        localStorage.removeItem(REVIEW_DRAFT_KEY);
        console.log("Form submitted successfully.");
    });
}

const reviewDeleteBtn = document.getElementById("reviewDeleteBtn");
if (reviewDeleteBtn) {
    reviewDeleteBtn.addEventListener("click", function (event) {
        event.preventDefault();
        if (nameInput) nameInput.value = "";
        if (emailInput) emailInput.value = "";
        if (reviewInput) reviewInput.value = "";
        if (serviceSelect) serviceSelect.value = "";
        if (feedbackMessage) feedbackMessage.textContent = "";
        if (counter) counter.textContent = "0 characters";
        document.querySelectorAll('input[name="customer"]').forEach(function (radio) {
            radio.checked = false;
        });
        localStorage.removeItem(REVIEW_DRAFT_KEY);
        console.log("Form cleared.");
    });
}


document.addEventListener("keydown", function (event) {

    console.log("Key Pressed: " + event.key);

});

//smooth scrolling for navigation links
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", event => {
        event.preventDefault();
        const target = document.querySelector(link.getAttribute("href"));
        if (target) target.scrollIntoView({ behavior: "smooth" });
    });
    console.log("Smooth scrolling added for link:", link.href);
});

document.querySelectorAll(".gallery-image").forEach(image => {
    image.addEventListener("mouseover", () => {
        image.style.transform = "scale(1.05)";
    });
    image.addEventListener("mouseout", () => {
        image.style.transform = "scale(1)";
    });
    console.log("Hover effect added to image:", image.src);
});
const ownerImage = document.getElementById("ownerImage");
const ownerInfo = document.getElementById("ownerInfo");

// Only run owner-bio logic when the related elements exist to avoid runtime errors
if (ownerInfo && localStorage.getItem("ownerBio") === "show") {
    ownerInfo.textContent = "Founder: Judy Gathongo. Established JUJU CARWASH in 2020.";
}

if (ownerImage && ownerInfo) {
    ownerImage.style.transition = "transform .2s ease, box-shadow .2s ease";
    ownerImage.addEventListener("mouseenter", function () {
        ownerImage.style.transform = "scale(1.02)";
        ownerImage.style.boxShadow = "0 8px 18px rgba(0,0,0,.2)";
    });
    ownerImage.addEventListener("mouseleave", function () {
        ownerImage.style.transform = "scale(1)";
        ownerImage.style.boxShadow = "none";
    });

    ownerImage.addEventListener("click", function () {
        if (localStorage.getItem("ownerBio") === "show") {
            ownerInfo.textContent = "";
            localStorage.removeItem("ownerBio");
        } else {
            ownerInfo.textContent = "Founder: Judy Gathongo. Established JUJU CARWASH in 2020.";
            localStorage.setItem("ownerBio", "show");
        }

    });
    console.log("Owner bio toggle functionality initialized.");
}