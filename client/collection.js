const newCollection = document.getElementById("collectionForm");
const addCollection = document.getElementById("createBtn");
const collectionContainer = document.getElementById("collectionContainer");

async function getCollection() {
  const response = await fetch("http://localhost:8080/collection");
  const collections = response.json();
  console.log(collections, "collect");

  Object.keys(collections).forEach(function (collection) {
    const { item_name, bought_date, bought_price, description } = collection;
    const collectionCard = document.createElement("div");
    collectionCard.id = "collectionCard";

    const h3 = document.createElement("h3");
    const h4 = document.createElement("h4");
    const p = document.createElement("p");
    const pDes = document.createElement("p");
    h3.textContent = `${item_name}`;
    h4.textContent = `${bought_date}`;
    p.textContent = `£${bought_price}`;
    pDes.textContent = `${description}`;
    collectionCard.appendChild(h3);
    collectionCard.appendChild(h4);
    collectionCard.appendChild(p);
    collectionCard.appendChild(pDes);
    collectionContainer.appendChild(collectionCard);
  });
}

async function createNewCollection() {
  const formData = new FormData(newCollection);
  const formValues = Object.fromEntries(formData);
  console.log(formValues);
  const response = await fetch("http://localhost:8080/collection", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formValues),
  });
  newCollection.reset();

  const item_name = formValues.item_name;
  const bought_date = formValues.bought_date;
  const bought_price = formValues.bought_price;
  const description = formValues.description;
  const collectionCard = document.createElement("div");

  collectionCard.id = "collectionCard";

  const h3 = document.createElement("h3");
  const h4 = document.createElement("h4");
  const p = document.createElement("p");
  const pDes = document.createElement("p");
  h3.textContent = `${item_name}`;
  h4.textContent = `${bought_date}`;
  p.textContent = `£${bought_price}`;
  pDes.textContent = `${description}`;
  collectionCard.appendChild(h3);
  collectionCard.appendChild(h4);
  collectionCard.appendChild(p);
  collectionCard.appendChild(pDes);
  collectionContainer.appendChild(collectionCard);
}

newCollection.addEventListener("submit", (e) => {
  e.preventDefault();
  createNewCollection();
  newCollection.style.opacity = "0";
  newCollection.style.pointerEvents = "none";
});
getCollection();
