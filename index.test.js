function add(num1, num2) {
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


test('add() function should return the sum of 2 numbers', () => {
    console.log('Hallo, dit is een test')

    //Arrange
    const num1 = 4;
    const num2 = 5;

    //Act
    const sum = add(num1, num2);

    //Assert
    expect(sum).toBe(9); //Expect en toBe komen uit Jest framework
});

test('findByName() returns an object from an array with a specified name', () => {
    //Arrange
    const users = [{id: 1, name: 'Marijn'}, {id: 2, name: 'Michiel'}, {id: 3, name: 'Martijn'}]
    const userNameToFind = 'Michiel';
    //Act
    const user = findByName(users, userNameToFind);
    //Assert
    expect(user).toEqual({id:2, name: 'Michiel'})
});

test('findByName() should return null if the element is not found', () => {
    //Arrange
    const users = [{id: 1, name: 'Marijn'}, {id: 2, name: 'Michiel'}, {id: 3, name: 'Martijn'}]
    const userNameToFind = 'Kees';
    //Act
    const user = findByName(users, userNameToFind);
    //Assert
    expect(user).toBeNull();

});