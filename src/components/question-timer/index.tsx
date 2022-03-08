import { Progress, Timeline } from "antd";
import React, { useEffect, useState } from "react";
import Countdown from "react-countdown";
import { useSelector } from "react-redux";
import { disconnectSocket, expireCurrentQuestion } from "../../socketio.service";
import { RootState } from "../../store";

const QuestionTimer = () => {
  const {
    room: { id, currentQuestion },
  } = useSelector<RootState, RootState["roomReducer"]>(
    (state) => state.roomReducer
  );

  const [showTimer, setShowTimer] = useState<boolean>(false);

  const handleTimeExpiration = () => {
    // expireCurrentQuestion(id);
    setShowTimer(false);
  };

  useEffect(() => {
    setShowTimer(true);
    if (currentQuestion.timeExpired) {
      setShowTimer(false);
    }
  }, [currentQuestion.number, currentQuestion.timeExpired]);

  return (
    <div style={{position:'relative'}}>
      <h1 style={{ fontSize: '5vw', top:0,right: 0 }}>
        {showTimer ? (
          <Countdown
            date={Date.now() + 15000}
            intervalDelay={0}
            precision={3}
            renderer={props => <div>{(props.total / 1000).toFixed(0)}</div>}
            onComplete={handleTimeExpiration}
          />
        ) : null}
      </h1>
    </div>
  );
};

export default QuestionTimer;
