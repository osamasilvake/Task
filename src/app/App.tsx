import '../assets/scss/main.scss';

import { useEffect, useState } from 'react';

const App = () => {
	const items = ['item1', 'item2', 'item3'];
	const [number, setNumber] = useState(0);
	useEffect(() => {
		document.title = `Count number: ${number}`;
	}, [number]);
	// add two number
	const Addtwonum = (a: number, b: number) => a + b;
	Addtwonum(3, 4);

	const Subtwonum = (a: number, b: number) => a - b;
	Subtwonum(7, 4);

	////////////////////////
	// function getGreeting(timeOfDay: string): string {
	// 	return timeOfDay === 'morning' ? 'Good morning!' : 'Hello!';
	// }
	// const time = 'morning';
	// const greeting = getGreeting(time);
	// console.log(greeting);

	// function getGreeting(timeOfDay: string): string {
	// 	if (timeOfDay === 'morning') {
	// 		return 'Good morning!';
	// 	} else {
	// 		return 'Hello!';
	// 	}
	// }
	// const time = 'morning';
	// const greeting = getGreeting(time);
	// console.log(greeting);

	/////////////////////////////////////
	// reuire await
	// async function fetchData() {
	// 	// Missing await here
	// 	const res = await fetch('https://url');
	// 	const data = res.json();
	// 	console.log(data);
	// }

	// fetchData();
	///////
	// async function fetchData() {
	// 	// Missing await here
	// 	fetch('https://api.example.com/data')
	// 		.then((response) => response.json())
	// 		.then((data) => {
	// 			console.log(data);
	// 		});
	// }

	// fetchData();
	//////////////////////////////////
	//This rule can enforce or disallow the use of braces around arrow function body.
	// "arrow-body-style": ["error", "as-needed"], //always,never

	// type FooReturnType = {
	// 	bar: {
	// 		foo: number;
	// 		bar: number;
	// 	};
	// };
	// const foo: () => number = () => 0;
	// const foo2: () => FooReturnType = () => ({
	// 	bar: {
	// 		foo: 1,
	// 		bar: 2
	// 	}
	// });
	// console.log(foo()); // Outputs: 0
	// console.log(foo2().bar.foo); // Outputs: 1
	// console.log(foo2().bar.bar); // Outputs: 2
	//////////
	// "@typescript-eslint/no-empty-function": "off",
	// const foo = () => {};

	return (
		<div className="App bg-slate-500">
			<h1>Hey Robot GUI {import.meta.env.VITE_NAME}</h1>
			<p> hallo {import.meta.env.VITE_API_URL}</p>
			<ul>
				{items.map((item) => (
					<li key={item}>{item}</li>
				))}
			</ul>
			<button onClick={() => setNumber(number + 1)}>Increment</button>
		</div>
	);
};
export default App;

// 	 note: jab aap yarn build karte hain toh production build, .env.production
// ke values ko istemal karta hai aur
// production-ready code generate hota hai. beacuse development
//  chala rahe hote hain kyunki development
// server .env.development ko follow karta hai.

// What are Git Hooks?
// Git hooks are scripts that you can set up to run at certain
// events in the Git lifecycle.
///////////////////////////////
// inside pkg.json
//   "lint-staged": {
//     "src/**/*.{js,html.css}": "prettier --write",
//     "src/**/*.js": "eslint"
//   }
// inside pre-commit file
// npx lint-staged

// why eslint: we want some rules regurading or code
/////////////////
// release-it tool and is used to automate the release process of your software.
