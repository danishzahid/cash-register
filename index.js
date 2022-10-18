const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkBtn = document.querySelector("#check-btn");
var comment = document.querySelector("#comment");
const noOfNotes = document.querySelectorAll(".no-of-notes");



const listOfNotes = [2000,500,200,100,50,20,10,5,1];

function calculateChange(amount){
    for(let i = 0; i < listOfNotes.length; i++){
        const numberOfNotes = Math.trunc(amount/listOfNotes[i]);
        amount = amount % listOfNotes[i];
        noOfNotes[i].innerText = numberOfNotes;
    }
}

checkBtn.addEventListener("click", function clickHandler(e){
    if(Number(billAmount.value) > 0){
        if(Number(cashGiven.value) >= Number(billAmount.value)){
            const calculateDifference = Number(cashGiven.value) - Number(billAmount.value);
            calculateChange(calculateDifference); 
        } 
        else
        {
            comment.innerText= "Insufficient Cash Given";
        }

    }else {
        comment.innerText = "Invalid Bill Amount";
    }

    
})