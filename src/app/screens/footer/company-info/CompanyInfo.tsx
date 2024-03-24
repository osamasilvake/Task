import { CompanyInformations } from './CompanyInfo.list';

const CompanyInfo = () => (
	<div className="flex justify-between flex-wrap gap-10 xl:justify-start">
		{CompanyInformations.map((info) => (
			<div key={info.title} className="xl:w-36">
				<p className="text-white pb-2">{info.title}</p>
				{info.items.map((item) => (
					<p key={item} className="text-103 pb-2">
						{item}
					</p>
				))}
			</div>
		))}
	</div>
);

export default CompanyInfo;
