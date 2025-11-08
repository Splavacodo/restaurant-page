import foodImg from "../public/images/restaurant-homepage-img.jpg";

function loadHomePage() {
    let contentContainer = document.querySelector("#content"); 
    contentContainer.style["position"] = "relative";

    let homepageImg = document.createElement("img");
    homepageImg.src = foodImg;
    homepageImg.alt = "sushi roll on a black plate and sashimi on a different black plate";
    homepageImg.setAttribute("class", "homepage-img");

    contentContainer.appendChild(homepageImg);

    let restaurantName = document.createElement("div");
    restaurantName.setAttribute("class", "restaurant-name");
    restaurantName.textContent = "Takashi";

    let restaurantSlogan = document.createElement("div");
    restaurantSlogan.setAttribute("class", "restaurant-slogan");
    restaurantSlogan.textContent = "Fresh taste. Timeless craft.";

    let homepageBanner = document.createElement("div");
    homepageBanner.setAttribute("class", "homepage-banner");

    homepageBanner.appendChild(restaurantName);
    homepageBanner.appendChild(restaurantSlogan);

    contentContainer.appendChild(homepageBanner);
}

export { loadHomePage }; 
