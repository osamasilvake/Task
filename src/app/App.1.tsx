export const App = () => {
	// const items = ['item1', 'item2', 'item3'];
	let a;
	return (
		<div className="App">
			<h1>Hey Robot GUI {import.meta.env.VITE_NAME}</h1>
			<p> hello {import.meta.env.VITE_API_URL}</p>
			{/* <ul>
				{items.map((item, index) => (
					<li key={index}>{item}</li>
				))}
				;
			</ul> */}
		</div>
	);
};

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
