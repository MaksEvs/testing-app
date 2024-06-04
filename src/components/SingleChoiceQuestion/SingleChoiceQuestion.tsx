import React from "react";
import { SingleChoiceQuestionProps } from "../../interface/interface";
import "./SingleChoiceQustion.css";

const SingleChoiceQuestion: React.FC<SingleChoiceQuestionProps> = ({
	options,
	onChange,
}) => {
	const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		onChange(e.target.value);
	};

	return (
		<ul className="radio-group">
			{options.map((option) => (
				<li key={option} className="radio-label">
					<label>
						<input
							type="radio"
							name="singleChoice"
							value={option}
							onChange={handleOptionChange}
							className="radio-input"
						/>
						<span className="custom-radio"></span>
						{option}
					</label>
				</li>
			))}
		</ul>
	);
};

export default SingleChoiceQuestion;
