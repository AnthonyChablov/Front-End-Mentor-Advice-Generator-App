// selectin dom elems
let insertQuoteUI  = document.querySelector('.insert-quote');
let insertIdUI = document.querySelector('.insert-id-number');
let getQuoteUI = document.querySelector('.get-new-quote');
document.querySelector('p');

//on event Listener
getQuoteUI.addEventListener('click',(e)=>{
    const xhr = new XMLHttpRequest();
    xhr.open('GET','https://api.adviceslip.com/advice?t='+ Math.random(),true);
    xhr.onload= function(){
        if(this.status === 200){
            let response = JSON.parse(this.responseText);
            console.log(response);
            // assigning elements
            let idNumber = response.slip.id;
            let quote = response.slip.advice;

            insertQuoteUI.innerText= `${quote}`;
            insertQuoteUI.classList.add('animation');
            insertIdUI.innerText= `${idNumber}`;
            insertIdUI.classList.add('animation');
        }
    }
    xhr.send(); 
    insertQuoteUI.classList.remove('animation');
    insertIdUI.classList.remove('animation');
    e.preventDefault();
});





// this scripts is creating a data base for us puuting values into those tables and making relationshipss between them all

// ctrl+f7
