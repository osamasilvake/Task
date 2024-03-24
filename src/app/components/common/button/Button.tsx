import { ButtonVariantEnum } from './Button.enum';
import { ButtonInterface } from './Button.interface';

const Button = (props: ButtonInterface) => {
	const { children, variant = ButtonVariantEnum.CONTAINED_IN_DEFAULT, isDisabled, onClickHandler, buttonStyle } = props;

	const variants = {
		disabled: isDisabled ? 'opacity-50 bg-gray-300' : '',
		button: buttonStyle || 'py-2.5 px-5 rounded-401 mt-3 sm:mt-0 sm:px-7 sm:py-3.5',

		containedInDefault:
			variant === ButtonVariantEnum.CONTAINED_IN_DEFAULT
				? 'text-white  bg-101 outline-transparent hover:bg-gray-200 transition-all rounded-full text-2xl'
				: ''
	};

	return (
		<button
			disabled={isDisabled}
			onClick={onClickHandler}
			className={`${variants.disabled}
			  ${variants.button} 
			 ${variants.containedInDefault}
			   `}>
			{children}
		</button>
	);
};

export default Button;
