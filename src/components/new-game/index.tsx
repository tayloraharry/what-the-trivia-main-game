import { Space } from "antd";
import { useEffect, useState } from "react";
import UserAvatar from "../user-avatar";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import "./index.css";

const NewGame = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const { room, connectionError } = useSelector<
    RootState,
    RootState["roomReducer"]
  >((state) => state.roomReducer);

  useEffect(() => {
    setIsMobile(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent));
  }, []);

  if (isMobile) {
    return (
      <Space className="new-game__mobile" direction="horizontal">
        <h1>Please enjoy ¿What the Trivia? on a non-mobile device.</h1>
      </Space>
    );
  }

  return (
    <Space direction="horizontal" className="new-game">
      <h1 className="new-game__title">¿What the Trivia?</h1>

      {room.code ? (
        <>
          <div className="new-game__room-code-container">
            <h2 className="new-game__room-code-instructions">
              Go to wtt.tv and enter room code
            </h2>
            <h1 className="new-game__room-code">
              {room.code.split("").map((character, index) => {
                return <span key={index}>{character}</span>;
              })}
            </h1>
          </div>
          <div className="new-game__player-container">
            {room.users.map((user) => {
              return <UserAvatar key={user.id} user={user} answering={false} />;
            })}
            {new Array(8 - room.users.length)
              .fill(undefined)
              .map((_, index) => {
                return (
                  <div
                    key={index}
                    className="floating new-game__join-placeholder"
                    style={{
                      animationDuration: Math.random() * 5 + 1 + "s",
                    }}
                  >
                    <b>JOIN</b>
                  </div>
                );
              })}
          </div>
        </>
      ) : (
        <h1>
          {connectionError
            ? "Room error encountered.  Please try again later."
            : "Connecting to room..."}
        </h1>
      )}
    </Space>
  );
};

export default NewGame;
