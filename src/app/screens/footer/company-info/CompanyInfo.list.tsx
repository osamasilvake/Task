import { CompanyInfoType } from './CompanyInfo.enum';
import CompanyInfoItem from './CompanyInfo.interface';

export const CompanyInformations: CompanyInfoItem[] = [
	{
		title: CompanyInfoType.IQTEST,
		items: ['Quiz', 'Result', 'Pricing']
	},
	{
		title: CompanyInfoType.Support,
		items: ['Help', 'Result', 'Contact']
	},
	{
		title: CompanyInfoType.LEGAL,
		items: ['Privacy Policy', 'Term of Service', 'Cookies Policy']
	}
];
