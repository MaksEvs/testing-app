export interface Question {
	id: number;
	question: string;
	type: "single" | "multiple" | "short" | "long";
	options?: (string | number)[];
}

export interface CustomButtonProps {
	disabled: boolean;
	onClick: () => void;
	children?: React.ReactNode;
}

export interface SingleChoiceQuestionProps {
	options: string[];
	onChange: (answer: string) => void;
}

export interface MultipleChoiceQuestionProps {
	options: string[];
	onChange: (answer: string[]) => void;
}

export interface ShortAnswerQuestionProps {
	onChange: (answer: string) => void;
	minLength: number;
}

export interface LongAnswerQuestionProps {
	onChange: (answer: string) => void;
	minLength: number;
}

export interface ResultsProps {
	questions?: Question[];
	answers?: { [key: number]: any };
}

export interface TestPageProps {
	questions: Question[];
}
