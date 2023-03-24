import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';

dayjs.extend(utc);

/**
 * locale
 * @param language
 * @returns
 */
const dateLocale = (language: string) => {
	return dayjs.locale(language);
};

export { dateLocale };
