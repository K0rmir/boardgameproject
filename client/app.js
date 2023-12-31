const newListingForm = document.getElementById("newListingForm");
const createNewListingBtn = document.getElementById("createNewListingBtn");
const listingArea = document.getElementById("listingArea");

// The below function gets all of the database entries (game listings) and displays them on the page when it is loaded.
async function getListings() {
    const response = await fetch("http://localhost:8080/marketplacelistings");
    const listings = await response.json();
    listings.forEach(function(listing) {
        const { title, price, quality, description } = listing;    
        const p = document.createElement("p");
        p.textContent = `${title}, ${price}, ${quality}, ${description}`;    
        listingArea.appendChild(p);
    });
}

getListings();

// This is the event listener for creating a new listing from the main marketplace page //
createNewListingBtn.addEventListener("click", function() {
    newListingForm.style.opacity = "1";
    newListingForm.style.pointerEvents = "all";
});

// Below is the function for posting new data to the database when a user creates a new listing for sale. //
async function createNewListing() {
    const formData = new FormData(newListingForm);
    const formValues = Object.fromEntries(formData);
    const response = await fetch("http://localhost:8080/marketplacelistings", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formValues),              
    })
    newListingForm.reset();
    const title = formValues.title;
    const price = formValues.price;
    const quality = formValues.quality;
    const description = formValues.description;
    const p = document.createElement("p");
    p.textContent = `${title}, ${price}, ${quality}, ${description}`; 
    listingArea.appendChild(p);


};

// Event listener for create button on form //
newListingForm.addEventListener("submit", function(event) {
    event.preventDefault();
    createNewListing();
    newListingForm.style.opacity = "0";
    newListingForm.style.pointerEvents = "none";
});







// for (let i = 0; i < listings.length; i++) {
//     const title = listings[i].title;
//     const price = listings[i].price;
//     const quality = listings[i].quality;
//     const description = listings[i].description;
//     const p = document.createElement("p");
//     p.textContent = `${title}`;
//     p.textContent = `${price}`;
//     p.textContent = `${quality}`;
//     p.textContent = `${description}`;
//     const listingArea = document.getElementById("listingArea");
//     listingArea.appendChild(p);
// }
// };