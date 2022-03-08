let search = document.getElementById('searchTxt');
search.addEventListener("input", function(){

    let inputVal = search.value.toLowerCase();

    let cards = document.getElementsByClassName('card__content');

    Array.from(cards).forEach(function(element){

        let cardTxt = element.getElementsByTagName("h4")[0].innerText;

        if(cardTxt.includes(inputVal)){
             
            element.style.display = "block";

        }

        else{

            element.style.display = "none";

        }
    })
})