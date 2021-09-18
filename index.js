var billAmount = document.querySelector("#bill-amount");
var cashGiven = document.querySelector("#cash-given");
var checkButton = document.querySelector("#check-button");
var message = document.querySelector("#error-message");
var notes = document.querySelectorAll(".no-of-notes");

const availableNotes = [2000, 500, 100, 20, 10, 5, 1];

checkButton.addEventListener("click", function validateAmount(){
    message.getElementsByClassName.display = "none;"
    if (billAmount.value > 0) {
        if(cashGiven.value >= billAmount.value){
            const amountToBeReturned = cashGiven.value - billAmount.value;
            calculateChange(amountToBeReturned);
        } else {
            const amountToBeReturned = cashGiven.value - billAmount.value;
            calculateChange(amountToBeReturned);
            /* message.style.display = "block";
            message.innerText = "Please proceed to wash the plates"; */
        }
    } else {
        message.style.display = "block";
        message.innerText = "The bill amount should be greater than 0";

    }
});

function calculateChange(amountToBeReturned) {
    for ( let i = 0; i < availableNotes.length; i ++) {
        const numberOfNotes = Math.trunc(amountToBeReturned / availableNotes[i]);
        
        amountToBeReturned = amountToBeReturned % availableNotes[i];
        
        notes[i].innerText = numberOfNotes;
    }
}


