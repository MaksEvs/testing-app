import React from "react";
import { useLocation } from "react-router-dom";
import { ResultsProps } from "../../interface/interface";
import CustomButton from "../../UI/CustomButton";
import "./ResultsPage.css";

const ResultsPage: React.FC = () => {
	const location = useLocation();
	const { answers, questions } = location.state as ResultsProps;

	const handleRestartTest = () => {
		localStorage.clear();
		window.location.href = "/";
	};

	if (!questions || !answers) {
		return <div>Нет данных для отображения результатов.</div>;
	}

	const parseAnswers = (answer: any): string | string[] => {
		try {
			const parsed = JSON.parse(answer);
			if (Array.isArray(parsed)) {
				return parsed.map((item) => item.toString());
			}
			return parsed.toString();
		} catch (error) {
			if (Array.isArray(answer)) {
				return answer.map((item) => item.toString());
			}
			return answer.toString();
		}
	};

	const formatAnswer = (answer: any) => {
		const parsedAnswer = parseAnswers(answer);
		if (Array.isArray(parsedAnswer)) {
			return parsedAnswer.join(", ");
		}
		return parsedAnswer;
	};

	return (
		<div>
			<h2>Результаты</h2>
			{questions.map((question) => (
				<div key={question.id}>
					<p className="question">{question.question}</p>
					<p className="answer">Ответ: {formatAnswer(answers[question.id])}</p>
				</div>
			))}
			<CustomButton disabled={false} onClick={handleRestartTest}>
				Заново
			</CustomButton>
		</div>
	);
};

export default ResultsPage;
