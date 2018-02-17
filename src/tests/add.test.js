const add = (a, b) => a + b;
const generateGreeting = (name = 'Anonymous') => `Hello ${name}!`;
test('should add two numbers', () => {
    const result = add(3, 4);
    expect(result).toBe(7)

});

test('should be string', () => {
    const name = generateGreeting('Munkh');
    expect(name).toBe('Hello Munkh!')
})

test('should generate noname', () => {
    const name = generateGreeting();
    expect(name).toBe('Hello Anonymous!')
})