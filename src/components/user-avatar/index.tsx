import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { IRoomUserObject } from "what-the-trivia-types";
import { RootState } from "../../store";
import "./index.css";

interface IUserAvatarProps {
  user: IRoomUserObject;
  answering: boolean;
}

const UserAvatar = ({
  user: { id, name, vip, currentAnswerPoints, totalPoints },
  answering,
}: IUserAvatarProps) => {
  const {
    room: {
      currentQuestion: { usersAnswered },
    },
  } = useSelector<RootState, RootState["roomReducer"]>(
    (state) => state.roomReducer
  );

  return (
    <div className="user-avatar">
      <div className="user-avatar__main" key={id}>
        <img src={`images/player_${id}.png`} className={`user-avatar__image ${answering && !usersAnswered.includes(id) ? 'user-avatar__blackout' : '' }`} />
        { answering && !usersAnswered.includes(id)  ? null :(
          <>
            <b className="user-avatar__name">{name}</b>
            {vip ? <b className="user-avatar__vip">VIP</b> : null}
            {answering ? <b>{currentAnswerPoints}</b> : null}
          </>
        ) 
        }
      </div>
    </div>
  );
};

export default UserAvatar;
