function loadAboutPage() {
    let aboutDescription = document.createElement("div");
    aboutDescription.setAttribute("class", "about-description");
    aboutDescription.textContent = "At our sushi restaurant, we blend the art of traditional craftsmanship with the finest fresh ingredients. Every roll is prepared with precision and passion, offering a dining experience that’s both authentic and unforgettable — where fresh taste meets timeless craft."

    let contentContainer = document.querySelector("#content");
    contentContainer.replaceChildren(aboutDescription); 
}

export { loadAboutPage };
