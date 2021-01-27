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

module.exports = {
    add: addNumbers,
    findByName: findByName,
}