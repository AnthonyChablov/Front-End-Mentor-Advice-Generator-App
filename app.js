// selectin dom elems
let insertQuoteUI  = document.querySelector('.insert-quote');
let insertIdUI = document.querySelector('.insert-id-number');
let getQuoteUI = document.querySelector('.get-new-quote');

//on event Listener
getQuoteUI.addEventListener('click',(e)=>{
    
    fetch('https://api.adviceslip.com/advice')
        .then(response => response.json())
        .then(data => console.log(data));
    /* \
    const xhr = new XMLHttpRequest();
    xhr.open('GET','https://api.adviceslip.com/advice',true);
    xhr.onload= function(){
        if(this.status === 200){
            let response = JSON.parse(this.responseText);
            console.log(response)
            let idNumber = response.slip.id;
            let quote = response.slip.advice;
            insertQuoteUI.innerText= `${quote}`
        }
    }
    xhr.send(); */
    e.preventDefault();
});





// this scripts is creating a data base for us puuting values into those tables and making relationshipss between them all

// ctrl+f7
