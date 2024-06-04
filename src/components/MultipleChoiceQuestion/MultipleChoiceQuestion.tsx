import React, { useState } from "react";
import "./MultipleChoiceQuestion.css";

interface MultipleChoiceQuestionProps {
	options: string[];
	onChange: (selectedOptions: string[]) => void;
}

const MultipleChoiceQuestion: React.FC<MultipleChoiceQuestionProps> = ({
	options,
	onChange,
}) => {
	const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

	const handleOptionChange = (option: string) => {
		const updatedOptions = selectedOptions.includes(option)
			? selectedOptions.filter((o) => o !== option)
			: [...selectedOptions, option];
		setSelectedOptions(updatedOptions);
		onChange(updatedOptions);
	};

	return (
		<div className="checkbox-group">
			{options.map((option) => (
				<label key={option} className="checkbox-label">
					<input
						type="checkbox"
						value={option}
						checked={selectedOptions.includes(option)}
						onChange={() => handleOptionChange(option)}
						className="checkbox-input"
					/>
					<span className="custom-checkbox"></span>
					{option}
				</label>
			))}
		</div>
	);
};

export default MultipleChoiceQuestion;
