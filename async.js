// task 1
async function iterateWithAsyncAwait(values) {
	for (const value of values) {
		await new Promise((resolve) => setTimeout(resolve, 1000));
		console.log(value);
	}
}

// task 2
async function awaitCall() {
	try {
		const response = await fetch("https://api.example.com/data");
		if (!response.ok) {
			throw new Error(
				`API request failed: ${response.status} ${response.statusText}`
			);
		}
		const data = await response.json();
		console.log("Data fetched:", data);
	} catch (error) {
		console.error("Error fetching data:", error.message);
	}
}

// task 3
async function concurrentRequests() {
	const request1 = fetch("https://api.example.com/data1");
	const request2 = fetch("https://api.example.com/data2");

	const [response1, response2] = await Promise.all([request1, request2]);

	const data1 = await response1.json();
	const data2 = await response2.json();
	console.log("Combined results:", { data1, data2 });
}