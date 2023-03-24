import './App.scss';

import reactLogo from '/assets/svg/react.svg';
import viteLogo from '/assets/svg/vite.svg';

const App = () => {
	return (
		<div className="App">
			<div>
				<a href="https://vitejs.dev" target="_blank" rel="noreferrer">
					<img src={viteLogo} className="logo" alt="Vite logo" />
				</a>
				<a href="https://reactjs.org" target="_blank" rel="noreferrer">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
			</div>
			<h1>Vite + React</h1>
		</div>
	);
};
export default App;
