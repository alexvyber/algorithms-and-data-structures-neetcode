let calls = 0;

// Recursive implementation to calculate the n-th Fibonacci number
function fibonacci(n) {
	let i = 0,
		acc = 0;

	while (i < n) {
		acc += i;
		i++;
	}

	return acc;

	// calls += 1
	// // Base case: n = 0 or 1
	// if (n <= 1) {
	// 	return n;
	// }

	// Recursive case: fib(n) = fib(n - 1) + fib(n - 2)
	// return fibonacci(n - 1) + fibonacci(n - 2);
}

console.time("fib");
fibonacci(1_000_000_000);
console.timeEnd("fib");

// console.log("🚀 ~ calls:", calls)

console.log(
	new Intl.NumberFormat("ru-RU", { maximumSignificantDigits: 3 }).format(calls),
);
