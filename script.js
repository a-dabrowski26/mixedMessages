

function mixedMessages(){

    const pickOne = (arr) => arr[Math.floor(Math.random() * arr.length)]; //function to generate random index of array

    let luckyNumber = Math.floor(Math.random()*100); //generates random number

    let luckyColour = pickOne(['green', 'blue', 'red', 'purple', 'yellow', 'sky blue', 'orange', 'grey', 'amber']); //array of colours

    let selfLove = pickOne([
        'its ok to say no',
        'love yourself first',
        'slow down and recharge',
        "deep breathe you're doing great",
        'text someone you love them',
        'do something just for you',
        'picture your best self and go for it'
    ]); //array of messages for self love

    let dailyHoroscope = pickOne([
        '2022 has great things in store for you',
        'the only thing holding you back is your mind',
        'trust the universe, trust yourself, and trust the timing of your life',
        'be patient and the universe will guide you',
        'you dont have to be great to start BUT you have to start to be great'
    ]); //array of messages for the daily horoscope

    //Declare variables and grab them to the HTML page
    
    let luckyNum, luckyCol, self, daily;  //Decalre Variables

    luckyNum= document.getElementById('luckyNum');  //Get Elements

    luckyCol= document.getElementById('luckyCol');

    self= document.getElementById('self');

    daily= document.getElementById('daily');

    luckyNum.textContent = 'Lucky Number: ' + luckyNumber; //Write luckyNumber
    luckyCol.textContent = 'Lucky colour ' + luckyColour; //Write luckyColour
    self.textContent = 'Self Love Focus: ' + selfLove; //Write selfLove
    daily.textContent = 'Daily Horoscope: ' + dailyHoroscope; //Writes dailyHoroscope
}

document.getElementById("mixedMessages").addEventListener("click", mixedMessages);