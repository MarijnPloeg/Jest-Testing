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

function toCelcius(fahrenheit) {
    return (fahrenheit - 32) * (5/9)
}

function toFahrenheit(celcius) {
    return celcius * 9 / 5 + 32;
}

module.exports = {
    add: addNumbers,
    findByName: findByName,
}