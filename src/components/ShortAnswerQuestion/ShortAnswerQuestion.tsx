import React, { useState } from "react";
import { ShortAnswerQuestionProps } from "../../interface/interface";
import "./ShortAnswerQuestion.css";

const ShortAnswerQuestion: React.FC<ShortAnswerQuestionProps> = ({
	onChange,
}) => {
	const [value, setValue] = useState<string>("");

	const handleAnswerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newValue = e.target.value;
		setValue(newValue);
		onChange(newValue);
	};

	return (
		<div className="short-answer">
			<input type="text" value={value} onChange={handleAnswerChange} />
		</div>
	);
};

export default ShortAnswerQuestion;
