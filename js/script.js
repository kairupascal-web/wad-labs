
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

