const add = (a, b) => a + b;
const generateGreeting = (name = 'Anonymous') => `Ho Hi ${name}!`;

test('should add two numbers', () => {
	const result = add(3, 4);
	expect(result).toBe(7);
	// if (result !== 7) {
	// 	throw new Error(`You added 4 and 3 and got ${result}`);
	// }
});

test('should greet', () => {
	const result = generateGreeting('Mark');
	expect(result).toBe('Ho Hi Mark!');
});
test('should greet', () => {
	const result = generateGreeting();
	expect(result).toBe('Ho Hi Anonymous!');
});
