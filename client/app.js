const newListingForm = document.getElementById("newListingForm");
const createNewListingBtn = document.getElementById("createNewListingBtn");

async function getListings() {
    const response = await fetch("https://localhost:8080/marketplacelistings");
    const listings = await response.json();
};

getListings();

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
};

// Event listener for create button on form //
newListingForm.addEventListener("submit", function(event) {
    event.preventDefault();
    createNewListing();
    newListingForm.style.opacity = "0";
    newListingForm.style.pointerEvents = "none";
})