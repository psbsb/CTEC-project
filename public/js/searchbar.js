function search() {
    const input = document.getElementById('filter').value.toUpperCase();
    
    const cardContainer = document.getElementById('restaurantTable');
    console.log(cardContainer);

    const cards = cardContainer.getElementsByClassName('card');
    console.log(cards);

    for (let i = 0; i < cards.length; i++) {
         title = cards[i].querySelector(".card-body h5.card-title");
        console.log(title);

        if (title.innerText.toUpperCase().indexOf(input) > -1) {
            cards[i].style.display = "";
        } else {
            cards[i].style.display = "none";
            

        }
    }

}