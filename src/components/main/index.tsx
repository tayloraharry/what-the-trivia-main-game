import { useSelector } from "react-redux";
import { RootState } from "../../store";
import NewGame from "../new-game";
import Questions from "../questions";
import Rules from "../rules";
import "./index.css";

const Main = () => {
  const { room } = useSelector<RootState, RootState["roomReducer"]>(
    (state) => state.roomReducer
  );

  return (
    <div
      className="main"
      style={{ backgroundImage: `url(images/title-background.jpg)` }}
    >
      {room.started ? (
        room.currentQuestion.number === 0 ? (
          <Rules />
        ) : (
          <Questions />
        )
      ) : (
        <NewGame />
      )}
    </div>
  );
};

export default Main;
