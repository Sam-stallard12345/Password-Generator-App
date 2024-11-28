function generate() {
    let dictionary = "";

    if (document.getElementById("").checked) {
        dictionary += "qwertyuiopasdfghjklzxcvbnm";
    }
    if (document.getElementById("").checked) {
        dictionary += "QWERTYUIOPASDFGHJKLZXCVBNM";
    }
    if (document.getElementById("").checked) {
        dictionary += "0123456789";
    }
    if (document.getElementById("").checked) {
        dictionary += "!@£$%^&*(){}[];:<>";
    }

    // LENGTH OF THE CHARACATERS 
     
    const length = document.querySelector(
        'input[type="range"]').value;   

    
    
    // ALERT IF NO DICTIONARY SELECTED OR RANGE IS TOO SHORT

    if (length < 1 || dictionary.length === 0) {
        alert("Range is too short or no dictionary selected");
    }


    // PASSWORD GENERATOR

    let password ="";
    for (let i = 0 ; i < length ; i++) {
        const index = Math.floor(Math.random() * dictionary.length)
        password += dictionary[index];
    }
}