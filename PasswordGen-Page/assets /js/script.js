function generate() {
    let dictionary = "";

    if (document.getElementById("lowercaseCb").checked) {
        dictionary += "qwertyuiopasdfghjklzxcvbnm";
    }
    if (document.getElementById("uppercaseCb").checked) {
        dictionary += "QWERTYUIOPASDFGHJKLZXCVBNM";
    }
    if (document.getElementById("digitsCb").checked) {
        dictionary += "0123456789";
    }
    if (document.getElementById("symbolsCb").checked) {
        dictionary += "!@£$%^&*(){}[];:<>";
    }

    // LENGTH OF THE CHARACTERS 
    const length = document.querySelector('input[type="range"]').value;   

    // ALERT IF NO DICTIONARY SELECTED OR RANGE IS TOO SHORT
    if (length < 1 || dictionary.length === 0) {
        alert("Range is too short or no dictionary selected");
        return;
    }

    // PASSWORD GENERATOR
    let password = "";
    for (let i = 0; i < length; i++) {
        const index = Math.floor(Math.random() * dictionary.length);
        password += dictionary[index];
    }

    document.querySelector('input[type="text"]').value = password;
}

// Add event listeners for checkboxes and the generate button
document.querySelectorAll('input[type="checkbox"], button.generate').forEach((elem) => {
    elem.addEventListener("click", generate);
});

// Update the range value display and generate password on range input change
document.querySelector('input[type="range"]').addEventListener("input", (e) => {
    document.querySelector('.char-range span').textContent = e.target.value;
    generate();
});

// Copy password to clipboard
document.querySelector("div.password button").addEventListener("click", () => {
    const pass = document.querySelector('input[type="text"]').value;
    navigator.clipboard.writeText(pass).then(() => {
        document.querySelector("div.password button").innerHTML = "copied!";
        setTimeout(() => {
            document.querySelector("div.password button").innerHTML = "copy";
        }, 1000);
    });
});

// Generate password on page load
generate();

