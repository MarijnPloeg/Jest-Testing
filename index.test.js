function add(num1, num2) {
    const sum = num1 + num2;
    return sum;
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

