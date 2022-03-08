let search = document.getElementById('searchTxt');
search.addEventListener("input", function(){

    let inputVal = search.value.toLowerCase();

    let cards = document.getElementsByClassName('info');

    Array.from(cards).forEach(function(element){

        let cardTxt = element.getElementsByTagName("h1")[0].innerText;

        if(cardTxt.includes(inputVal)){
             
            element.style.display = "block";

        }

        else{

            element.style.display = "none";

        }
    })
})