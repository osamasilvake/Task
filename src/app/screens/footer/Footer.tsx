import logo from '../../../assets/images/logo.svg';
import message from '../../../assets/images/message.png';
import CompanyInfo from './company-info/CompanyInfo';
import NewslatterForm from './NewslatterForm';

const Footer = () => (
	<footer className="bg-black mx-6 my-8 rounded-401 lg:mx-14">
		<div className="max-w-301 mx-auto px-6 pb-20 lg:px-20">
			<section className="flex flex-col justify-between border-b-[1px] border-103 pt-10 pb-16 sm:pt-20 xl:flex-row">
				<div className="flex flex-col items-center xl:w-201 xl:items-start">
					<img src={message} alt="Message icon" className="w-20" />
					<h1 className="text-3xl text-center text-white pb-8 pt-8 leading-tight sm:text-5xl lg:text-start lg:text-501">
						Keep up with the latest
					</h1>
					<p className="text-white text-502 text-center md:text-start">
						Join our newsletter to say up to date on feature and release
					</p>
				</div>
				<NewslatterForm />
			</section>
			<section className="flex flex-col justify-between pt-20 xl:flex-row">
				<div className="xl:w-72 pl-4">
					<div className="flex text-3xl gap-2 pt-1">
						<img src={logo} alt="logo" className="mb-5" />
						<p className="text-white">IQTEST.ai</p>
					</div>
					<p className="text-lg text-103 pb-9 xl:pb-4">Test your IQ in a very easy and simple step not complex</p>
				</div>
				<CompanyInfo />
			</section>
		</div>
	</footer>
);

export default Footer;
