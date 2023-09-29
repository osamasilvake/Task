const App = () => {
	return (
		<div className="App">
			{/* i have deleted main brach scuccessfully */}
			<h1>Hey Robot GUI {import.meta.env.VITE_NAME}</h1>
			<p> i am {import.meta.env.VITE_API_URL}</p>
			{/* note: jab aap yarn build karte hain toh production build, .env.production 
			ke values ko istemal karta hai aur
			production-ready code generate hota hai. beacuse development 
			 chala rahe hote hain kyunki development
			server .env.development ko follow karta hai. */}
		</div>
	);
};
export default App;
