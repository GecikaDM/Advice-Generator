

console.log('init');



const adviceNumberPart = document.querySelector('.advice-number');

const quote = document.querySelector('.quote');

const adviceNumberEl = document.createElement('span');
adviceNumberPart.appendChild(adviceNumberEl);
adviceNumberEl.classList.add('number');

const diceBtn = document.querySelector('.border-dice');




const apiUrl = "https://api.adviceslip.com/advice";

  async function gettingAdvice() {
    try {
        const responseJSON = await fetch(apiUrl);
        // code to be executed
        //convert response from json to js format
        const responseJS = await responseJSON.json();
        //console.log(responseJS, 'objet javascript');

        //getting datas and show up
       adviceNumberEl.innerHTML = `${responseJS.slip.id}`;
       quote.innerHTML = `${responseJS.slip.advice}`;

    }
    catch(error) {

    }
  };

  gettingAdvice();

  /* function for next advice */

  diceBtn.addEventListener('click', getNextAdvice);

  function getNextAdvice() {
    location.reload(true);
  };