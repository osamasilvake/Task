export const App = () => {
	return (
		<div className="App">
			<h1>Hey Robot GUI {import.meta.env.VITE_NAME}</h1>
			<p> hello {import.meta.env.VITE_API_URL}</p>
		</div>
	);
};
