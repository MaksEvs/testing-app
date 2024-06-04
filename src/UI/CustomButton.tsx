import React from "react";
import { CustomButtonProps } from "../interface/interface";
import "./CustomButton.css";

const CustomButton: React.FC<CustomButtonProps> = ({
	disabled,
	onClick,
	children,
}) => {
	const handleClick = () => {
		if (!disabled) {
			onClick!();
		}
	};
	return (
		<button
			disabled={disabled}
			onClick={handleClick}
			className={`custom-button ${disabled ? "disabled" : ""}`}
		>
			{children}
		</button>
	);
};

export default CustomButton;
