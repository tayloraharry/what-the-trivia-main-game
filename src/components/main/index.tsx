import { useSelector } from "react-redux";
import { RoomStatus } from "what-the-trivia-types";
import { RootState } from "../../store";
import NewGame from "../new-game";
import Questions from "../questions";
import Rules from "../rules";
import Standings from "../standings";
import "./index.css";

const Main = () => {
  const { room: { status } } = useSelector<RootState, RootState["roomReducer"]>(
    (state) => state.roomReducer
  );

  const { Waiting, Rules : RulesStatus, Question, CurrentScore, FinalScore } = RoomStatus;

  return (
    <div
      className="main"
      style={{ backgroundImage: `url(images/title-background.jpg)` }}
    >
      { status === Waiting && <NewGame/> }
      { status === RulesStatus && <Rules /> }
      { status === Question && <Questions/> }
      { status === CurrentScore && <Standings/> }
      { status === FinalScore && <h1>Final Score Component Needed</h1> }
    </div>
  );
};

export default Main;