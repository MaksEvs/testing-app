import React from "react";
import { Question } from "../../interface/interface";
import LongAnswerQuestion from "../LongAnswerQuestion/LongAnswerQuestion";
import ShortAnswerQuestion from "../ShortAnswerQuestion/ShortAnswerQuestion";
import SingleChoiceQuestion from "../SingleChoiceQuestion/SingleChoiceQuestion";
import MultipleChoiceQuestion from "../MultipleChoiceQuestion/MultipleChoiceQuestion";
import "./QuestionDisplay.css";

interface QuestionDisplayProps {
	question: Question;
	onAnswerChange: (answer: any) => void;
	answer: any;
}

const questionComponents: { [key: string]: React.FC<any> } = {
	single: SingleChoiceQuestion,
	multiple: MultipleChoiceQuestion,
	short: (props: any) => <ShortAnswerQuestion {...props} minLength={3} />,
	long: (props: any) => <LongAnswerQuestion {...props} minLength={10} />,
};

const QuestionDisplay: React.FC<QuestionDisplayProps> = ({
	question,
	onAnswerChange,
	answer,
}) => {
	const QuestionComponent = questionComponents[question.type];

	if (!QuestionComponent) {
		return <div>Неизвестный тип вопроса: {question.type}</div>;
	}

	return (
		<div className="question">
			<p>{question.question}</p>
			<QuestionComponent
				onChange={onAnswerChange}
				answer={answer}
				options={question.options}
			/>
		</div>
	);
};

export default QuestionDisplay;
