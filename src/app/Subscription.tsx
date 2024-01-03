import { AiOutlineCheck } from 'react-icons/ai';

// const subscriptionData = [
// 	{
// 		type: 'Free',
// 		price: '0$',
// 		perMonth: 'per month',
// 		usage: 'For Personal Use',
// 		description: 'No credit card required',
// 		features: [
// 			{ count: '1000', label: 'Total Memories' },
// 			{ count: 'One', label: 'Ai persona' }
// 		]
// 	},
// 	{
// 		type: 'Starter',
// 		price: '15$',
// 		perMonth: 'per month',
// 		usage: 'For Personal & Professional Use',
// 		description: 'Everything included in Free, plus',
// 		features: [
// 			{ count: '1000', label: 'Total Memories' },
// 			{ count: 'One', label: 'Ai persona' }
// 		]
// 	},
// 	{
// 		type: 'Premium',
// 		price: '40$',
// 		perMonth: 'per month',
// 		usage: 'For Small Bissiness Use',
// 		description: 'Everything included in Starter, plus',
// 		features: [
// 			{ count: '1000', label: 'Total Memories' },
// 			{ count: 'One', label: 'Ai persona' }
// 		]
// 	}
// ];

const Subscription = () => (
	<>
		<header className="text-center pt-5 pb-7">
			<h1 className="text-xl font-semibold">Select a Subscription</h1>
			<p className="text-sm text-gray-500">Start for free or take advantage of our most popular upgruade features.</p>
		</header>

		<main className="flex flex-wrap justify-center gap-4 pb-8">
			<div className="bg-white shadow-sm pb-4 w-64">
				<div className="bg-gradient-to-t from-emerald-600 to-emerald-300 text-center pt-6 pb-8">
					<h2 className="text-white bg-emerald-300 text-sm inline-block px-2 py-1 rounded-lg">Free</h2>
					<p className="text-3xl text-white pt-1">0$</p>
					<p className="text-xs text-white">per month</p>
				</div>
				<div className="text-center px-1 pt-5">
					<h2 className="text-sm font-bold">For Personal Use</h2>
					<p className="text-sm pt-1 pb-5 font-semibold">No credit card required</p>
					<button className="bg-white border-blue-400 border-2 text-sm px-10 py-1 rounded-2xl text-blue-800">
						Get Started
					</button>
					<ul className="pt-6 px-4 space-y-4 h-96">
						<li className="flex items-center gap-3">
							<AiOutlineCheck className="text-indigo-700" />
							<p className="text-sm font-medium">
								<span className="font-bold">1000</span> Total Memories
							</p>
						</li>
						<li className="flex items-center gap-3">
							<AiOutlineCheck className="text-indigo-700" />
							<p className="text-sm font-medium">
								<span className="font-bold">One</span> Ai persona
							</p>
						</li>
						<li className="flex items-center gap-3">
							<AiOutlineCheck className="text-indigo-700" />
							<p className="text-sm font-medium">Genreted Ai Domain</p>
						</li>
						<li className="flex items-center gap-3">
							<AiOutlineCheck className="text-indigo-700" />
							<p className="text-sm font-medium">Unlimited Toltal Memories</p>
						</li>
						<li className="flex items-center gap-3">
							<AiOutlineCheck className="text-indigo-700" />
							<p className="text-sm font-medium">Api Access</p>
						</li>
						<li className="flex items-center gap-3">
							<div>
								<AiOutlineCheck className=" text-indigo-700" />
							</div>
							<p className="text-sm font-medium text-start">Synci Memories from Google Drive & Zapier</p>
						</li>
						<li className="flex items-center gap-3">
							<div>
								<AiOutlineCheck className=" text-indigo-700" />
							</div>
							<p className="text-sm font-medium text-start">Synci Memories from Google Drive & Zapier</p>
						</li>
						<li className="flex items-center gap-3">
							<div>
								<AiOutlineCheck className=" text-indigo-700" />
							</div>
							<p className="text-sm font-medium text-start">Synci Memories from Google Drive & Zapier</p>
						</li>
					</ul>
				</div>
			</div>
			<div className="bg-white shadow-sm pb-4 w-64">
				<div className="bg-gradient-to-t from-orange-600 to-orange-300 text-center pt-6 pb-8">
					<h2 className="text-white bg-orange-300 text-sm inline-block px-2 py-1 rounded-lg">Starter</h2>
					<p className="text-3xl text-white pt-1">15$</p>
					<p className="text-xs text-white">per month</p>
				</div>
				<div className="text-center px-1 pt-5">
					<h2 className="text-sm font-bold px-2">For Personal & Professional Use</h2>
					<p className="text-sm pt-1 pb-5 font-semibold">Everthing encluded in Free,plus</p>
					<button className="bg-transparent border-blue-400 border-2 text-sm px-10 py-1 rounded-2xl text-blue-800">
						Get Started
					</button>
					<ul className="pt-6 px-4 space-y-3 h-96">
						<li className="flex items-center gap-3">
							<AiOutlineCheck className="text-indigo-700" />
							<p className="text-sm font-medium">
								<span className="font-bold">1000</span> Total Memories
							</p>
						</li>
						<li className="flex items-center gap-3">
							<AiOutlineCheck className="text-indigo-700" />
							<p className="text-sm font-medium">
								<span className="font-bold">Two</span> Ai persona
							</p>
						</li>
						<li className="flex items-center gap-3">
							<AiOutlineCheck className="text-indigo-700" />
							<p className="text-sm font-medium">Api Access</p>
						</li>
						<li className="flex items-center gap-3">
							<div>
								<AiOutlineCheck className=" text-indigo-700" />
							</div>
							<p className="text-sm font-medium text-start">Synci Memories from Google Drive & Zapier</p>
						</li>
						<li className="flex items-center gap-3">
							<div>
								<AiOutlineCheck className=" text-indigo-700" />
							</div>
							<p className="text-sm font-medium text-start">Synci Memories from Google Drive & Zapier</p>
						</li>
						<li className="flex items-center gap-3">
							<div>
								<AiOutlineCheck className=" text-indigo-700" />
							</div>
							<p className="text-sm font-medium text-start">Synci Memories from Google Drive & Zapier</p>
						</li>
						<li className="flex items-center gap-3">
							<div>
								<AiOutlineCheck className=" text-indigo-700" />
							</div>
							<p className="text-sm font-medium text-start">Synci Memories from Google Drive & Zapier</p>
						</li>
					</ul>
				</div>
			</div>
			<div className="bg-white shadow-sm pb-4 w-64">
				<div className="bg-gradient-to-t from-violet-700 to-violet-400 text-center pt-6 pb-8">
					<h2 className="text-white bg-violet-400 text-sm inline-block px-2 py-1 rounded-lg">Premium</h2>
					<p className="text-3xl text-white pt-1">40$</p>
					<p className="text-xs text-white">per month</p>
				</div>
				<div className="text-center px-1 pt-5">
					<h2 className="text-sm font-bold">For Small Bussiness Use</h2>
					<p className="text-sm pt-1 pb-5 font-semibold">Everthing encluded in Starter,plus</p>
					<button className="bg-transparent border-blue-400 border-2 text-sm px-10 py-1 rounded-2xl text-blue-800">
						Get Started
					</button>
					<ul className="pt-6 px-4 space-y-3 h-96">
						<li className="flex items-center gap-3">
							<AiOutlineCheck className="text-indigo-700" />
							<p className="text-sm font-medium">
								<span className="font-bold">Unlimited</span> Toltal Memories
							</p>
						</li>
						<li className="flex items-center gap-3">
							<AiOutlineCheck className="text-indigo-700" />
							<p className="text-sm font-medium">
								<span className="font-bold">Unlimited</span> Ai persona
							</p>
						</li>
						<li className="flex items-center gap-3">
							<AiOutlineCheck className=" text-indigo-700" />
							<p className=" text-sm font-medium">Api Access</p>
						</li>
						<li className="flex items-center gap-3">
							<div>
								<AiOutlineCheck className=" text-indigo-700" />
							</div>
							<p className="text-sm font-medium text-start">Synci Memories from Google Drive & Zapier</p>
						</li>
						<li className="flex items-center gap-3">
							<div>
								<AiOutlineCheck className=" text-indigo-700" />
							</div>
							<p className="text-sm font-medium text-start">Synci Memories from Google Drive & Zapier</p>
						</li>
						<li className="flex items-center gap-3">
							<div>
								<AiOutlineCheck className=" text-indigo-700" />
							</div>
							<p className="text-sm font-medium text-start">Synci Memories from Google Drive & Zapier</p>
						</li>
					</ul>
				</div>
			</div>
		</main>
	</>
);
export default Subscription;
