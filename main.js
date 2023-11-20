console.log("Hello World");

const nameR="Reanna Bakshani";
let letter;

async function displayLetters() {
    for (let i = 0; i < nameR.length; i++) {
        letter = nameR[i];
        await new Promise(resolve => setTimeout(resolve, 500));
        document.getElementById("letter").innerHTML = letter;
    }
    
}

displayLetters();


