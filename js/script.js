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

let carpetCleaningStaff = [
    [1, "Kevin", "Carpet Owner"],
    [2, "Sarah", "Car Wash Attendant"],
    [3, "David", "Car Owner"]
];
console.log(carpetCleaningStaff[1][1]); // Output: Sarah
// Welcome message
window.onload = function () {
    alert("WELCOME TO JUJU CARWASH!");
    event.preventDefault();
};


const services = (
    {name:"Body Wash", price:"KSh 500"},
    {name:"Engine Cleaning", price:"KSh 800"},
    {name:"Interior Detailing", price:"KSh 1500"},
    {name:"Waxing", price:"KSh 1200"}
);

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

console.log("===== DOM ACCESS =====");
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

        if (
            nameInput.value.trim() === "" ||
            emailInput.value.trim() === "" ||
            reviewInput.value.trim() === ""
        ) {

            showFeedback("Please fill in all the fields before submitting.");
            return;
        }

        showFeedback("Thank you " + nameInput.value.trim() + "! Your review has been received.", false);

        // Clear form
        nameInput.value = "";
        emailInput.value = "";
        reviewInput.value = "";

        // Clear radio buttons
        document.querySelectorAll('input[name="customer"]').forEach(function (radio) {
            radio.checked = false;
        });

    });
}



document.addEventListener("keydown", function (event) {

    console.log("Key Pressed: " + event.key);

});

//smooth scrolling for navigation links
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
        event.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

const galleryImages = document.querySelectorAll(".gallery-image");
galleryImages.forEach(function (image) {
    image.addEventListener("mouseover", function () {
        image.style.transform = "scale(1.05)";
        image.style.transition = "0.3s";
    });

    image.addEventListener("mouseout", function () {
        image.style.transform = "scale(1)";
    });
});



 footer = document.querySelector("footer p");
if (footer) {
    footer.textContent = "© " + new Date().getFullYear() + " JUJU CARWASH";
}

const review = document.getElementById("review");
const counter = document.getElementByIdconst("counter");

if (review && counter) {
    review.addEventListener("input", function () {
        counter.textContent = review.value.length + " characters";
    });
}