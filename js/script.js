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
}

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


const container = document.getElementById("servicesContainer");

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
                <button>Book Service</button>
            </div>
        `;
        container.appendChild(card);
    });
}
// Get DOM elements
const heading = document.getElementById("mainHeading");
const sections = document.querySelectorAll("section");
const images = document.querySelectorAll("img");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const reviewInput = document.getElementById("review");
const submitBtn = document.getElementById("reviewSubmitBtn");
const feedbackMessage = document.getElementById("inputFeedback");

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
        });
    }
});

console.log(heading);
console.log(sections);
console.log(images);





// Change heading colour when clicked
if (heading) {
    heading.addEventListener("click", function () {
        heading.style.color = "blue";
    });
}

// Add titles to every image
images.forEach(function (image) {
    image.setAttribute("title", "JUJU CARWASH");
});


// Hover Effect


images.forEach(function (image) {

    image.addEventListener("mouseover", function () {
        image.style.transform = "scale(1.05)";
        image.style.transition = "0.3s";
    });

    image.addEventListener("mouseout", function () {
        image.style.transform = "scale(1)";
    });

});

if (submitBtn) {
    submitBtn.addEventListener("click", function () {
        const requiredFields = [nameInput, emailInput, reviewInput];
        const hasEmptyField = requiredFields.some(input => !input || input.value.trim() === "");

        if (hasEmptyField) {
            showFeedback("Please fill in all the fields before submitting.");
            return;
        }

        showFeedback(`Thank you ${nameInput.value.trim()}! Your review has been received.`, false);
        requiredFields.forEach(input => {
            if (input) input.value = "";
        });

        document.querySelectorAll('input[name="customer"]').forEach(radio => {
            radio.checked = false;
        });
    });
}

const reviewDeleteBtn = document.getElementById("reviewDeleteBtn");
if (reviewDeleteBtn) {
    reviewDeleteBtn.addEventListener("click", function () {
        if (nameInput) nameInput.value = "";
        if (emailInput) emailInput.value = "";
        if (reviewInput) reviewInput.value = "";
        if (feedbackMessage) feedbackMessage.textContent = "";
        if (counter) counter.textContent = "0 characters";
        document.querySelectorAll('input[name="customer"]').forEach(function (radio) {
            radio.checked = false;
        });
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
});

document.querySelectorAll(".gallery-image").forEach(image => {
    image.addEventListener("mouseover", () => {
        image.style.transform = "scale(1.05)";
    });
    image.addEventListener("mouseout", () => {
        image.style.transform = "scale(1)";
    });
});


// dynamically update year
const footerYear = document.getElementById("footerYear");
if (footerYear) {
    footerYear.textContent = new Date().getFullYear();
}

const review = document.getElementById("review");
const counter = document.getElementById("counter");

if (review && counter) {
    review.addEventListener("input", function () {
        counter.textContent = review.value.length + " characters";
    });
}