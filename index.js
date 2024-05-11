const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
    "/"];
const charactersAlt = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
let firstPassword = document.querySelector(".first-password") 
let secondPassword = document.querySelector(".second-password")
let toggle  = true;
//let generated = false; 
    
function generatePassword() {
    // if (generated === false) { 
        firstPassword.textContent = ""
        secondPassword.textContent = ""
        let selectedCharacters;
        if(toggle) {
            selectedCharacters = characters
        } else {
            selectedCharacters = charactersAlt
        }
        for (let i = 0; i < 15; i++) {
                firstPassword.textContent += selectedCharacters[Math.floor(Math.random() * selectedCharacters.length)]
                secondPassword.textContent += selectedCharacters[Math.floor(Math.random() * selectedCharacters.length)]
            }
        // }
        //generated = true
       // return generated
}

function switchArray() {
    toggle = !toggle
    return toggle
}
