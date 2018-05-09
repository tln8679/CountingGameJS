/**
 * @author Taylor Noble
 */

 var str = "Your choices:";
 var yourRes = str.bold();
 var pcStr = "PC choices:";
 var pcRes = pcStr.bold();
 var numCards = 21;
 var cardsLeft = document.getElementById("cardsLeft");
 var player = document.getElementById("turn");
 var yourChoices = document.getElementById("yourChoices");
 var pcChoices = document.getElementById("pcChoices");

 function onClick(clicked_id){
     if (numCards <= 0){
         reset();
         return;
     }
    //  Update cards based of what the player picks
    switch(clicked_id) {
        case "1":
            numCards -= 1;
            cardsLeft.innerText = numCards + " cards left";
            yourRes += " 1 "
            yourChoices.innerHTML = yourRes;
            break;
        case "2":
            numCards -= 2;
            cardsLeft.innerText = numCards + " cards left";
            yourRes += " 2 "
            yourChoices.innerHTML = yourRes;
            break;
        case "3":
            numCards -= 3;
            cardsLeft.innerText = numCards + " cards left";
            yourRes += " 3 "
            yourChoices.innerHTML = yourRes;
            break;
        default:
            alert("Logic Error: " + numCards);
            break;
    }
    if (numCards <= 0){
        setTimeout(function() {
            cardsLeft.innerText = 0 + " cards left";
            alert("Congratulations, you win!");
        }, 0);
        return;
    }

    // Immediately after player picks, PC picks
    document.getElementById("turn").style.color = 'blue';
    player.innerText = "PC turn: ";
    setTimeout(function() {
        for(var i = 1; i <= 3; i++){
            if((numCards - i) % 4 == 0){
                numCards -= i;
                cardsLeft.innerText = numCards + " cards left";
                pcRes += " " + i + " ";
                pcChoices.innerHTML = pcRes;
                break;
            }
            else if (i == 3){
                // If the computer's best option is taken, it chooses at random
                var guess = Math.floor(Math.random()* 3) + 1;
                numCards -= guess;
                cardsLeft.innerText = numCards + " cards left";
                pcRes += " " + guess + " ";
                pcChoices.innerHTML = pcRes;
            }
        }

        if (numCards <= 0){
            setTimeout(function() {
                cardsLeft.innerText = 0 + " cards left";
                alert("The computer beat you hahahaha!");;
            }, 0);
            return;
    }
        // Switch back to players turn (in regards to display)
        document.getElementById("turn").style.color = 'red';
        player.innerText = "Your turn: ";
    }, 1000);
    
    
 }

 // resets the game after a win
 function reset(){
    numCards = 21;
    str = "Your choices:";
    yourRes = str.bold();
    pcStr = "PC choices:";
    pcRes = pcStr.bold();
    yourChoices.innerHTML = yourRes;
    pcChoices.innerHTML = pcRes;
    cardsLeft.innerText = numCards + " cards left";
 }