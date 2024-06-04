import React from "react";
import "./ProgressBar.css";

interface ProgressBarProps {
	currentQuestionIndex: number;
	totalQuestions: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
	currentQuestionIndex,
	totalQuestions,
}) => {
	return (
		<div className="progress-bar">
			{Array.from({ length: totalQuestions }).map((value, index) => (
				<div
					key={index}
					className={`progress-bar-segment ${
						index < currentQuestionIndex
							? "completed"
							: index === currentQuestionIndex
							? "current"
							: "remaining"
					}`}
				></div>
			))}
		</div>
	);
};

export default ProgressBar;
