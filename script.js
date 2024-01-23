function checkBadWord() {
    var userInput = document.getElementById("textInput").value.toLowerCase();
    var badWords = ["bad", "shit", "bloody", "bully","fuck", "Bad", "Shit" , "Bloody", "Bully", "Fuck"]; // Add your bad words here

    // Check if any bad word is present in the user input
    for (var i = 0; i < badWords.length; i++) {
        if (userInput.includes(badWords[i])) {
            alert("Alert: Inappropriate content detected. Please revise your input.");
            return;
        }
    }

    // If no bad words are found, proceed
    alert("Your input is clean and accepted!");
}