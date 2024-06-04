import React, { useState } from "react";
import { LongAnswerQuestionProps } from "../../interface/interface";
import "./LongAnswerQuestion.css";

const LongAnswerQuestion: React.FC<LongAnswerQuestionProps> = ({
	onChange,
	minLength,
}) => {
	const [value, setValue] = useState<string>("");

	const handleAnswerChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		const newValue = e.target.value;
		setValue(newValue);
		onChange(newValue);
	};

	return (
		<div className="long-answer-container">
			<textarea rows={4} value={value} onChange={handleAnswerChange} />
			{value.length < minLength && (
				<p style={{ color: "red" }}>
					Ответ должен быть не короче {minLength} символов.
				</p>
			)}
		</div>
	);
};

export default LongAnswerQuestion;
