function loadMenuPage() {
    let menuContainer = document.createElement("div");
    menuContainer.setAttribute("class", "menu-container");

    let menuHeader = document.createElement("div");
    menuHeader.setAttribute("class", "menu-header");
    menuHeader.textContent = "Takashi's Signature Rolls";

    menuContainer.appendChild(menuHeader);

    let sushiRollNames = [
        "strawberry fields",
        "yellow submarine",
        "imagine...",
        "black magic woman",
        "(puff, the) magic dragon",
        "crunchy ebi",
        "spider",
        "tiger's roll",
        "salmon skin",
        "t&t",
        "the little mermaid",
        "forrest gump",
        "philly",
        "sunshine",
        "caribbean",
        "ceviche",
        "ramon's roll",
        "takashi's hakozushi (aka the box)",
        "Mr.Blue Sky",
        "Surf & Snow",
        "Sebastian",
        "the summit",
        "the uptown roll",
        "shinjo",
        "zen",
        "buddha",
        "shiva",
        "tekka maki",
        "kappa maki",
        "california maki",
        "spicy maguro",
        "negihama",
        "spicy hamachi",
        "negitoro"
    ];

    let sushiRollDescription = [
        "Escolar, strawberry, spicy mayo and fresh chili peppers inside; toasted almonds and eel sauce on top.",
        "Yellowtail, Yellow Fin tuna, shiso and spicy mayo inside; yuzu-infused tobiko on top with Tataki sauce on the side.",
        "Albacore tuna, avocado and shiso inside; spicy tuna tartare and tobiko on top.",
        "Torched Sablefish, roasted red bell pepper and spicy mayo inside; lemon pesto, ponzu and sesame seeds on top.",
        "Spiced crab and avocado inside; Unagi, avocado, eel sauce and sesame seeds on top.",
        "Shrimp tempura, avocado and spicy mayo inside; masago, eel sauce and tempura crumbs on top.",
        "Crispy, soft-shelled crab with Kaiware sprouts, eel sauce, spicy mayo and sesame seeds.",
        "Tiger Shrimp tempura with spiced crab, Kaiware sprouts, Unagi and avocado, topped with eel sauce and sesame seeds.",
        "Crispy, baked Salmon skin, Kaiware sprouts, eel sauce, spicy mayo and sesame seeds.",
        "Yellowtail, Albacore, Salmon and green onion roll flash-fried and served with \"Hotter Than Hell\", dipping sauce.",
        "Tuna with Scallops, spicy mayo, shiso and wasabi tobiko.",
        "Shrimp tempura, cucumber and spicy mayo inside; Ebi, Escolar, Habanero Masago and eel sauce on top.",
        "Smoked Salmon, cream cheese, cucumber, red onion and sesame seeds.",
        "Cucumber, avocado and spicy mayo inside; fresh Salmon and thinly sliced lemon on top.",
        "Yellowtail, fresh mango, spicy mayo and fresh chili peppers.",
        "Avocado, cucumber and cilantro inside; Salmon, Sea Bream and Octopus on top with Takashi's ceviche dipping sauce!",
        "Tuna, cilantro, avocado and spicy mayo with fresh chili peppers on top (it's hot!!).",
        "Amberjack, Tobiko and spicy mayo inside; Tuna, Yellowtail and Salmon on top.",
        "Bluefin Tuna, fresh wasabi, avocado, shiso, and crushed sesame seeds.",
        "Asian pear, avocado, shiso inside; New Zealand Salmon, Hirame, sliced lime, thai chilis, and ponzu on top.",
        "Spiced crab with avocado and sesame seeds.",
        "Tuna, spiced crab, sliced avocado and tobiko wrapped in cucumber; topped with Tataki sauce and fresh chilis.",
        "Salmon, Hamachi, asparagus, wasabi tobiko, jalapeño vinaigrette, shichimi togarashi.",
        "Pickled burdock root, yamaimo, cucumber, shiso and sesame seeds.",
        "Asparagus, tomato and avocado inside; sesame seeds on top.",
        "Tempura fried portabellas, green beans, sweet potato and carrots inside; topped with eel sauce and sesame seeds.",
        "Tempura shishito pepper and tomato inside; avocado, jalapeño and sea salt on top; served with yuzu-balsamic dipping sauce.",
        "Fresh Tuna roll with wasbi.",
        "Japanese cucumber with sesame seeds.",
        "Kani Kama (imitation crab) with avocado and sesame seeds.",
        "Fresh tuna and spicy mayo.",
        "Yellowtail and scallions.",
        "Yellowtail with spicy mayo and kaiware.",
        "Fatty tuna with scallions."
    ];

    let menuItemsContainer = document.createElement("div");
    menuItemsContainer.setAttribute("class", "menu-items-container");

    for(let i = 0; i < sushiRollNames.length; i++) {
        let menuItemContainer = document.createElement("div");

        let menuItemTitle = document.createElement("div");
        menuItemTitle.setAttribute("class", "menu-item-title");
        menuItemTitle.textContent = sushiRollNames[i];

        let menuItemDescription = document.createElement("div");
        menuItemDescription.setAttribute("class", "menu-item-description");
        menuItemDescription.textContent = sushiRollDescription[i];

        menuItemContainer.appendChild(menuItemTitle);
        menuItemContainer.appendChild(menuItemDescription);

        menuItemsContainer.appendChild(menuItemContainer);
    }

    menuContainer.appendChild(menuItemsContainer);

    let contentContainer = document.querySelector("#content");
    contentContainer.replaceChildren(menuContainer);
}

export { loadMenuPage };
