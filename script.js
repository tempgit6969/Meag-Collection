const cardData = [
    { title: "Mega Link 1", image: "image.webp", link: "https://mega.nz/folder/M95xyBYT#PdwFZ_uRt1ys80MzQZ6WeA" },
    { title: "Mega Link 2", image: "image.webp", link: "https://example.com/2" },
    { title: "Mega Link 3", image: "image.webp", link: "https://example.com/3" }
];

const cardContainer = document.getElementById("card-container");

cardData.forEach(card => {
    const cardElement = document.createElement("div");
    cardElement.classList.add("card");
    cardElement.innerHTML = `
        <img src="${card.image}" alt="${card.title}">
        <h3>${card.title}</h3>
    `;
    cardElement.addEventListener("click", () => {
        window.location.href = card.link;
    });
    cardContainer.appendChild(cardElement);
});