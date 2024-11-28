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

    // LENGHTH OF THE CHARACATERS 
     
    const length = document.querySelector(
        'input[type="range"]').value;
}