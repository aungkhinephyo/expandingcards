const cards = document.querySelectorAll(".card");


cards.forEach(card => {
    card.addEventListener('click',() => {
        shrink();
        card.classList.add("active");
    })
})

function shrink () {
    cards.forEach(card => {
        card.classList.remove("active")
    })
}