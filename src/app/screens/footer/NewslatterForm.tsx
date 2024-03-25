import Button from '@/components/common/button/Button';

const NewslatterForm = () => (
	<form className="pt-[75px] mx-auto sm:pl-3 xl:mx-0 xl:w-201">
		<p className="text-white text-center text-2xl pb-5 pt-1 font-semibold sm:pr-6">Stay up to date</p>
		<div className="flex flex-col items-center gap-4 pb-8 pt-2 sm:flex-row">
			<input
				type="email"
				placeholder="Enter Your email"
				className="w-full rounded-401 outline-none border-2 focus:border-blue-600 bg-102 focus:bg-white px-7 py-3.5 placeholder:text-gray-500 placeholder:text-lg sm:pr-28 md:w-96 sm:px-5 sm:py-4"
			/>
			<Button>Subscribe</Button>
		</div>
		<p className="text-white text-center text-lg">By subscribing you agree with our Privacy Policy</p>
	</form>
);

export default NewslatterForm;
