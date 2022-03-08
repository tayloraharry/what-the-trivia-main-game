import { Card, Col, Row } from "antd";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import QuestionTimer from "../question-timer";
import UserAvatar from "../user-avatar";
import QuestionAnswer from "./answer";
import QuestionText from "./text";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

import "./index.css";
import Standings from "../standings";

const Questions = () => {
  const {
    room: {
      currentQuestion: { number: questionNumber, question, usersAnswered },
      users,
    },
  } = useSelector<RootState, RootState["roomReducer"]>(
    (state) => state.roomReducer
  );

  if (questionNumber < 1) {
    return null;
  }

  return (
    <div className="questions-container">
      <QuestionText text={question.text} />
      {question.answers.map((answer, index) => {
        return (
          <QuestionAnswer
            index={index}
            option={answer.option}
            text={answer.text}
          />
        );
      })}
      <div style={{ marginTop: 50 }}>
        {users.map((user, index) => {
          return <UserAvatar key={index} answering user={user} />;
        })}
      </div>
      <QuestionTimer />
    </div>
  );
};

export default Questions;
