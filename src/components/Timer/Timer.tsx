import React from "react";
import "./Timer.css";
import logo from "../../assets/sand-clock.png";

interface TimerProps {
	timeRemaining: number;
	timeExpired: boolean;
}

const Timer: React.FC<TimerProps> = ({ timeRemaining, timeExpired }) => {
	const formatTime = (seconds: number) => {
		const minutes = Math.floor(seconds / 60);
		const remainingSeconds = seconds % 60;
		return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
	};

	return (
		<div className="timer">
			<img src={logo} alt="sand clock" />
			<div>{timeExpired ? "Время вышло!" : `${formatTime(timeRemaining)}`}</div>
		</div>
	);
};

export default Timer;
