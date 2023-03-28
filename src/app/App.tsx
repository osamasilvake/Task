import Logo2 from '@assets/svg/react.svg';
import Logo from '@assets/svg/vite.svg';

import Demo from '@/Demo';

const App = () => {
	return (
		<div className="App">
			<h1>App</h1>
			<Demo />

			<img src={Logo} alt="Logo" />

			<img src={Logo2} alt="Logo2" />
		</div>
	);
};
export default App;
