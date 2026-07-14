window.onload = (e) => {
    document.querySelector("#search").onclick = searchCards;
}

let inputDisplay = "";

const searchCards = () => {
    // Define Scryfall API and begin building search query.
    const SCRY_API = "https://api.scryfall.com/cards/search?order=name&q=";

    let query = SCRY_API;

    // Parse user entered input used to search.
	let input = document.querySelector("#searchQuery").value;
	inputDisplay = input;
	input = input.toLowerCase();

	// Clean input provided and encode any spaces/characters.
	input = input.trim();

	input = encodeURIComponent(input);

    // If there's no input provided, return.
	if (input.length < 1) return;

	// Append cleaned input to the query url.
	query += input + "&unique=prints";

    // H.) Update the UI.
	document.querySelector("#display").innerHTML = "<br>Searching for '" + inputDisplay + "'</br>";

	// See what the URL looks like.
	console.log(query);

    // Request data.
	getCards(query);
}

const getCards = (url) => {
    // Create new XHR object.
	let xhr = new XMLHttpRequest();

	// Set on-load handler.
	xhr.onload = cardsLoaded;

	// Set on-error handler.
	xhr.onerror = cardError;

	// Open connection and send request.
	xhr.open("GET", url);
	xhr.send();
}

const cardsLoaded = (e) => {
    // Event.target is the xhr object.
	let xhr = e.target;

	// Xhr.responseText is the JSON file we just downloaded.
	// console.log(xhr.responseText);

    try {

        let data = JSON.parse(xhr.responseText);

        let cards = data.data;

        // console.log(cards);

        let displayCards = `<div id='searchResult'>`;

        cards.forEach(card => {
            // console.log(card);

            let newCard = `<div class='card'>`;
            newCard += `<h3>${card.name}</h3>`;

            // Build a card object that's modal/double-sided.
            if (card.card_faces) {
                newCard += `<img src='${card.card_faces[0].image_uris.small}' name='${card.name}' scry_id='${card.id}'>`;

            // Build a card object that's a part of a melded card.
            // } else if (card.all_parts) {

            // Build a standard single-sided card object.
            } else {
                newCard += `<img src='${card.image_uris.small}' name='${card.name}' scry_id='${card.id}'>`;
            }

            newCard += `</div>`;

            // console.log(newCard);

            displayCards += newCard;
        });

        displayCards += `</div>`;

        document.querySelector("#display").innerHTML = displayCards;

    } catch (error) {

    }
}

const cardError = () => {
    console.log("An error occurred while searching.");
}