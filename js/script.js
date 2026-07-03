
const images = document.querySelectorAll("img");

let client = {
    name: "John Doe",
    email: "john.doe@example.com"
};
console.log(client.name); 

let carWashAttendants = [
    "James",
    "Brian",
    "Faith",
    "Mercy"
];
console.log(carWashAttendants[2]); 
console.log(carWashAttendants.length);


let carpetCleaningStaff = [
    [1, "Kevin", "Carpet Owner"],
    [2, "Sarah", "Car Wash Attendant"],
    [3, "David", "Car Owner"]
];
console.log(carpetCleaningStaff[1][1]); // Output: Sarah
console.log(carpetCleaningStaff[2][2]);
console.log(carpetCleaningStaff[0][0]);
// Welcome message
window.onload = function () {
    alert("WELCOME TO JUJU CARWASH!");
};


const services = [
    {
        name: "Body Wash",
        description: "Complete exterior body cleaning.",
        price: "KSh 500",
        
    },
    {
        name: "Engine Cleaning",
        description: "Professional engine cleaning service.",
        price: "KSh 800",
        
    },
    {
        name: "Interior Detailing",
        description: "Deep interior vacuuming and detailing.",
        price: "KSh 1500",
        
    },
    {
        name: "Waxing",
        description: "Protect your paint with premium wax.",
        price: "KSh 1200",
        
    },
    {
        name:"carpet cleaning",
        description:"cleaning of house carpets",
        price:"KSh 1000"
    },
    {
        name:"bufferring",
        description:"polishing of car body",
        price:"KSh 1500"
    },
   
    
    {
        name:"car perfumes",
        description:"installation of car perfumes",
        price:"KSh 500"
    },
    {
        name:"fire extinguisher ",
        description:"installation of fire extinguisher in car",
        price:"KSh 1000"

    }
    
];  
// Add titles to every image
images.forEach(function (image) {
    image.setAttribute("title", "JUJU CARWASH");
});
console.log("Image titles added.");


// Hover Effect


images.forEach(function (image) {

    image.addEventListener("mouseover", function () {
        image.style.transform = "scale(1.05)";
        image.style.transition = "0.3s";
    });

    image.addEventListener("mouseout", function () {
        image.style.transform = "scale(1)";
    });
    console.log("Hover effect added to image:", image.src);

});
    console.log("Services array initialized with " + services.length + " services.");
    console.log("First service: " + services[0].name + " - " + services[0].description + " - " + services[0].price);
    console.log("Last service: " + services[services.length - 1].name + " - " + services[services.length - 1].description + " - " + services[services.length - 1].price);       
    console.log("All services:", services);



const container = document.getElementById("servicesContainer");
const serviceSelect = document.getElementById("serviceSelect");

if (container) {
    services.forEach(service => {
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
                    <button type="button" class="remove-service-btn">Cancel Service</button>
                </div>
            </div>
        `;

        const cancelButton = card.querySelector(".remove-service-btn");
        if (cancelButton) {
            cancelButton.addEventListener("click", function () {
                card.remove();
                console.log("Service cancelled:", service.name);
            });
        }

        container.appendChild(card);
    });
}

if (serviceSelect) {
    services.forEach(service => {
        const option = document.createElement("option");
        option.value = service.name;
        option.textContent = `${service.name} - ${service.price}`;
        serviceSelect.appendChild(option);
    });
}
let createElement = function(){
    const button = document.createElement("button");
    button.innerHTML = "Book Service";
    button.style.backgroundColor = "blue";
    button.style.color = "white";
    button.style.padding = "10px 20px";
    button.style.border = "none";
    button.style.borderRadius = "5px";
    button.style.cursor = "pointer";

}
let removeElement = function(){
    const button = document.querySelector("button");
    if (button) button.remove();
}
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
console.log(images);





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

