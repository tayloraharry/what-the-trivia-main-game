import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import UserAvatar from '../user-avatar';
import './index.css';

const Standings = () => {
    const {
        room: {
            users,
        },
    } = useSelector<RootState, RootState["roomReducer"]>(
        (state) => state.roomReducer
    );

    const sortedUsers = () => {
        return users.sort((a, b) => {
            return a.totalPoints - b.totalPoints
        });
    }

    const places = ['st', 'nd', 'rd', 'th', 'th', 'th', 'th', 'th']

    return (
        <div className="standings-container">
            <h1>Current Scores</h1>
            <div style={{ display: 'flex'}}>
                {sortedUsers().map((user, index) => {
                    return (
                        <div>
                            <UserAvatar key={index} user={user} answering={false} />
                            <div style={{ textAlign: 'center', marginLeft: 10 }}>
                                <b style={{fontSize: '1.5em'}}>{index + 1}{places[index]}</b>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
};

export default Standings;