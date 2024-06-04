import React, { useState, useEffect } from "react";
import { Question, TestPageProps } from "../../interface/interface";
import QuestionDisplay from "../QuestionDisplay/QuestionDisplay ";
import CustomButton from "../../UI/CustomButton";
import Timer from "../Timer/Timer";
import ProgressBar from "../ProgressBar/ProgressBar";
import { useNavigate } from "react-router-dom";
import "./TestPage.css";

const TestPage: React.FC<TestPageProps> = ({ questions }) => {
	const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
	const [answers, setAnswers] = useState<{ [key: number]: any }>({});
	const [timeRemaining, setTimeRemaining] = useState<number>(600);
	const [timeExpired, setTimeExpired] = useState<boolean>(false);
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const navigate = useNavigate();

	useEffect(() => {
		const savedCurrentQuestionIndex = localStorage.getItem(
			"currentQuestionIndex"
		);
		const savedAnswers = localStorage.getItem("answers");
		const savedTimeRemaining = localStorage.getItem("timeRemaining");

		if (savedCurrentQuestionIndex !== null) {
			setCurrentQuestionIndex(parseInt(savedCurrentQuestionIndex, 10));
		}

		if (savedAnswers) {
			setAnswers(JSON.parse(savedAnswers));
		}

		if (savedTimeRemaining !== null) {
			setTimeRemaining(parseInt(savedTimeRemaining, 10));
		}

		setIsLoading(false);
	}, []);

	useEffect(() => {
		if (!isLoading) {
			const timer = setInterval(() => {
				setTimeRemaining((prevTime) => {
					if (prevTime > 0) {
						const newTime = prevTime - 1;
						localStorage.setItem("timeRemaining", newTime.toString());
						return newTime;
					} else {
						setTimeExpired(true);
						clearInterval(timer);
						return prevTime;
					}
				});
			}, 1000);

			return () => clearInterval(timer);
		}
	}, [isLoading]);

	useEffect(() => {
		if (!isLoading) {
			localStorage.setItem(
				"currentQuestionIndex",
				currentQuestionIndex.toString()
			);
			localStorage.setItem("answers", JSON.stringify(answers));
		}
	}, [currentQuestionIndex, answers, isLoading]);

	const answerChangeHandler = (questionId: number, answer: any) => {
		setAnswers((prevAnswers) => ({
			...prevAnswers,
			[questionId]: answer,
		}));
	};

	const nextQuestionHandler = () => {
		setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
	};

	const isValidAnswer = (question: Question, answer: any) => {
		switch (question.type) {
			case "single":
				return answer !== undefined && answer !== "";
			case "multiple":
				return Array.isArray(answer) && answer.length > 0;
			case "short":
				return typeof answer === "string" && answer.length >= 3;
			case "long":
				return typeof answer === "string" && answer.length >= 10;
			default:
				return false;
		}
	};

	const currentQuestion = questions[currentQuestionIndex];
	const isAnswerProvided = currentQuestion
		? isValidAnswer(currentQuestion, answers[currentQuestion.id])
		: false;

	useEffect(() => {
		if (timeExpired || currentQuestionIndex === questions.length) {
			navigate("/results", { state: { answers, questions } });
		}
	}, [timeExpired, currentQuestionIndex, navigate, answers, questions]);

	if (isLoading) {
		return <div>Loading...</div>;
	}

	return (
		<div>
			<Timer timeRemaining={timeRemaining} timeExpired={timeExpired} />
			<ProgressBar
				currentQuestionIndex={currentQuestionIndex}
				totalQuestions={questions.length}
			/>
			{currentQuestion ? (
				<>
					<QuestionDisplay
						question={currentQuestion}
						onAnswerChange={(answer) =>
							answerChangeHandler(currentQuestion.id, answer)
						}
						answer={answers[currentQuestion.id]}
					/>
					<CustomButton
						disabled={!isAnswerProvided}
						onClick={nextQuestionHandler}
					>
						{currentQuestionIndex === questions.length - 1
							? "Завершить"
							: "Ответить"}
					</CustomButton>
				</>
			) : null}
		</div>
	);
};

export default TestPage;
