import { Question } from "../interface/interface";

interface UserAnswers {
	[questionId: number]: any;
}

let userAnswers: UserAnswers = {};

export const saveUserAnswer = (questionId: number, answer: any) => {
	userAnswers[questionId] = answer;
};

export const getUserAnswers = () => {
	return userAnswers;
};

export const clearUserAnswers = () => {
	userAnswers = {};
};

const questionsData: Question[] = [
	{
		id: 6,
		question: "Какие из перечисленных чисел являются простыми?",
		type: "multiple",
		options: ["8", "12", "19", "29"],
	},

	{
		id: 2,
		question: "Что такое ДНК?",
		type: "short",
	},
	{
		id: 3,
		question: "Как называется слово, выражающее качество предмета или явления?",
		type: "single",
		options: ["Слово-синоним", "Слово-антоним", "Прилагательное", "Наречие"],
	},
	{
		id: 4,
		question: "Какой орган является основным органом дыхания у человека?",
		type: "single",
		options: ["Легкие", "Сердце", "Печень", "Почки"],
	},
	{
		id: 5,
		question: "В каком году началась Первая мировая война?",
		type: "single",
		options: ["1914", "1917", "1939", "1941"],
	},
	{
		id: 1,
		question: "Назовите столицу Франции",
		type: "single",
		options: ["Париж", "Лондон", "Берлин", "Москва"],
	},
	{
		id: 7,
		question: "Какие страны входят в состав Скандинавии?",
		type: "multiple",
		options: ["Норвегия", "Дания", "Швеция", "Финляндия"],
	},
	{
		id: 8,
		question: "Опишите вкратце принцип работы двигателя внутреннего сгорания",
		type: "long",
	},
	{
		id: 9,
		question:
			"Назовите все планеты Солнечной системы, которые ближе Земли к солнцу",
		type: "short",
	},
	{
		id: 10,
		question: "Продолжите строчку: 'Люблю грозу в начале мая...'",
		type: "long",
	},
];

export default questionsData;
