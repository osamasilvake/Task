import '../assets/scss/main.scss';

const App = () => (
	<div className=" bg-cyan-500">
		<form>
			<h3>Login</h3>
			<p>Please enter your credentials to login</p>
			<input type="text" placeholder="username" />
			<input type="password" placeholder="password" />
			<button>Login</button>
			<p>
				Not registred?<a href="">Create any account</a>
			</p>
		</form>
	</div>
);
export default App;
