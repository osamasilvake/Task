import '../assets/scss/main.scss';

import logo from '../assets/images/logo.svg';
import message from '../assets/images/message.png';

const App = () => (
	<div className="bg-black max-w-301 mx-auto lg:px-20 my-8 pb-20 rounded-401">
		<div className="flex flex-col justify-between border-b-[1px] border-103 pt-20 pb-16 xl:flex-row">
			<div className="flex flex-col items-center xl:w-201 xl:items-start">
				<img src={message} alt="Message icon" className="w-20" />
				<h1 className="text-[57px] text-white pb-8 pt-8 leading-tight">Keep up with the latest</h1>
				<p className="text-white text-[19px]">Join our newsletter to say up to date on feature and release</p>
			</div>
			<form className="pt-[75px] mx-auto pl-3 xl:mx-0 xl:w-201">
				<p className="text-white text-center text-[24px]  pb-5 pt-1 pr-6 font-semibold">Stay up to date</p>
				<div className="flex gap-4 pb-8 pt-2">
					<input
						type="email"
						placeholder="Enter Your email"
						className="w-[26rem] rounded-401 outline-none border-2 focus:border-blue-600 bg-102 focus:bg-white px-7 py-3.5 placeholder:text-gray-500 placeholder:text-lg"
					/>
					<button className="text-white rounded-401 bg-101 outline-transparent hover:bg-gray-200 transition-all rounded-full px-7 text-2xl">
						Subscribe
					</button>
				</div>
				<p className="text-white text-center text-lg">By subscribing you agree with our Privacy Policy</p>
			</form>
		</div>
		<div className="flex flex-col justify-between pt-20 px-5 xl:flex-row">
			<div className="xl:w-64">
				<div className="flex text-3xl gap-2 pt-1">
					<img src={logo} alt="logo" className="mb-5" />
					<p className="text-white">IQTEST.ai</p>
				</div>
				<p className="text-lg text-103 pb-9 xl:pb-4">Test your IQ in a very easy and simple step not complex</p>
			</div>
			<div className="flex justify-between xl:justify-start gap-8">
				<div className="xl:w-40">
					<p className="text-white pb-2">IQTEST</p>
					<p className="text-103 pb-2">Quiz</p>
					<p className="text-103 pb-2">Result</p>
					<p className="text-103">Pricing</p>
				</div>
				<div className="xl:w-40">
					<p className="text-white pb-2">Support</p>
					<p className="text-103 pb-2">Help</p>
					<p className="text-103 pb-2">Result</p>
					<p className="text-103 pb-2">Contact</p>
				</div>
				<div>
					<p className="text-white pb-2">Legal</p>
					<p className="text-103 pb-2">Privacy Policy </p>
					<p className="text-103 pb-2">Term of Service </p>
					<p className="text-103 pb-2">Cookies Policy </p>
				</div>
			</div>
		</div>
	</div>
);
export default App;
