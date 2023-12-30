const newListingForm = document.getElementById("newListingForm");

async function getListings() {
    const response = await fetch("https://localhost:8080/marketplacelistings");
    const listings = await response.json();
};

getListings();

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



newListingForm.addEventListener("submit", function(event) {
    event.preventDefault();
    createNewListing();
})