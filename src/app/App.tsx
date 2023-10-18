import '../assets/scss/main.scss';

const App = () => (
	<div className="flex justify-center items-center h-screen">
		<div className="bg-white w-96 flex m-2 sm:m-0">
			<form className="flex flex-col py-10 px-4 mx-auto">
				<h2 className="text-center pb-5 text-3xl">Login</h2>
				<p className="text-center pb-6">Please enter your credentials to login</p>
				<input type="text" placeholder="username" className="border-0 py-3 bg-slate-200" />
				<input type="password" placeholder="password" className="mt-4 border-0 py-3 bg-slate-200" />
				<button className="bg-gray-600 text-white py-3 mt-4">Login</button>
				<p className="text-center pt-4">
					Not registred?<a href="">Create any account</a>
				</p>
			</form>
		</div>
	</div>
);
export default App;
