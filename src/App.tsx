import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TestPage from "./components/TestPage/TestPage";
import ResultsPage from "./components/ResultPage/ResultsPage";
import questionsData from "./components/questionsData";

const App: React.FC = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<TestPage questions={questionsData} />} />
				<Route path="/results" element={<ResultsPage />} />
			</Routes>
		</Router>
	);
};

export default App;
