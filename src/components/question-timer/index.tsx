import { Progress, Timeline } from "antd";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

const QuestionTimer = () => {
  const {
    room: { currentQuestion },
  } = useSelector<RootState, RootState["roomReducer"]>(
    (state) => state.roomReducer
  );

  const [timeLeft, setTimeLeft] = useState<number>(150);

  useEffect(() => {
    if (timeLeft === 0) {
      console.log("TIME LEFT IS 0");
      setTimeLeft(0);
    }

    // exit early when we reach 0
    if (!timeLeft) return;

    // save intervalId to clear the interval when the
    // component re-renders
    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 100);

    // clear interval on re-render to avoid memory leaks
    return () => clearInterval(intervalId);
    // add timeLeft as a dependency to re-rerun the effect
    // when we update it
  }, [timeLeft]);

  useEffect(() => {
    setTimeLeft(150);
  }, [currentQuestion.question.text]);

  return (
    <>
      <h1 style={{ textAlign: "center", fontSize: "3vw" }}>
        { timeLeft > 0 ? (timeLeft / 10).toFixed(0) : 'Time\s Up!'}
      </h1>
    </>
  );
};

export default QuestionTimer;
