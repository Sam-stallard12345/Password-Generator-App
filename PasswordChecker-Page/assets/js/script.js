let password = document.getElementById("password"); 
let power = document.getElementById("powerbar");

password.oninput = function (){
    let point = 0;
    let value = password.value;
    let widthPower = ["1%", "25%", "50%", "75%", "100%"];
    let colorPower = ["red", "orange", "yellow", "green", "blue"];

    // use if statement check if password length is greater than 6

    if (value.length >= 6){
        let arrayTest = [/[a-z]/, /[A-Z]/, /[0-9]/, /[$@#]/];

        arrayTest.forEach((item) => {
            if (item.test(value)) {
                point += 1;
            }
        });
    }
    power.style.width = widthPower[point];
    power.style.backgroundColor = colorPower[point];
};

checkPassword();    