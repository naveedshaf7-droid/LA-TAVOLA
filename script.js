// ================================
// RESTAURANT SLIDESHOW
// ================================

const restaurantImages = [
    "PICS/image1.png",
    "PICS/image2.png",
    "PICS/image3.png"
];

let restaurantImage = 0;

const restaurantSlider =
    document.getElementById("restaurant-slider");


setInterval(() => {

    restaurantImage++;

    if (restaurantImage >= restaurantImages.length) {
        restaurantImage = 0;
    }

    restaurantSlider.src = restaurantImages[restaurantImage];

}, 3000);



// ================================
// CHEF SLIDESHOW
// ================================

const chefImages = [
    "CHEFF/image1.png",
    "CHEFF/image2.png",
    "CHEFF/image3.png"
];

let chefImage = 0;

const chefSlider =
    document.getElementById("restaurant-slider-2");


setInterval(() => {

    chefImage++;

    if (chefImage >= chefImages.length) {
        chefImage = 0;
    }

    chefSlider.src = chefImages[chefImage];

}, 3000);

// ================================
// RESERVATION SUCCESS MESSAGE
// ================================

const reservationForm =
    document.getElementById("reservation-form");

const successMessage =
    document.getElementById("success-message");

if (reservationForm) {

    reservationForm.addEventListener("submit", function(event) {

        event.preventDefault();

        successMessage.style.display = "flex";

    });

}