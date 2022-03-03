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
  const [userIds, setUserIds] = useState<number[]>([]);

  useEffect(() => {
    if (answering) {
      setUserIds(usersAnswered.map(user => user.id));
    }
  }, [usersAnswered])

  return (
    <div className="user-avatar">
      <div className="user-avatar__main" key={id}>
        <img src={`images/player_${id}.png`} className={`user-avatar__image ${answering && !userIds.includes(id) ? 'user-avatar__blackout' : '' }`} />
        { answering && !userIds.includes(id)  ? null :(
          <>
            <b className="user-avatar__name">{name}</b>
            {vip ? <b className="user-avatar__vip">VIP</b> : null}
          </>
        ) 
        }
      </div>
    </div>
  );
};

export default UserAvatar;
