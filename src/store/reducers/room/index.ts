import { getEmptyRoom, IRoomObject } from "what-the-trivia-types";
import { RoomAction } from "../../actions/room";

export interface IRoomState {
  room: IRoomObject;
  connectionError: boolean;
}

const initialState: IRoomState = {
  room: getEmptyRoom(),
  connectionError: false,
};

export const roomReducer = (
  state: IRoomState = initialState,
  action: RoomAction
): IRoomState => {
  switch (action.type) {
    case "SET_ROOM_CODE":
      return { ...state, room: { ...state.room, code: action.payload } };
    case "UPDATE_ROOM":
      return { ...state, room: action.payload };
    case "SET_ROOM_CONNECTION_ERROR":
      return { ...state, connectionError: action.payload };
    default:
      return state;
  }
};
