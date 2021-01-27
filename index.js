function addNumbers(num1, num2) {
    return num1 + num2;
}

function findByName(users, name){
    for (const user of users) {
        if (user.name === name){
            return user;
        }
    }
    return null;
}

// Maak een functie die een parameter Fahrenheit ontvangt en omzet naar Celcius en teruggeeft

// Maak nu een functie die een parameter Celcius ontvangt en deze omzet naar Fahrenheit en teruggeeft

module.exports = {
    addNumbers: addNumbers,
    findByName: findByName,
}