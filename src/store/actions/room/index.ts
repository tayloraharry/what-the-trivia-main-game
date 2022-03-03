import { IRoomObject } from "what-the-trivia-types";

export type SetRoomCodeAction = { type: "SET_ROOM_CODE"; payload: string };
export type UpdateRoomAction = { type: "UPDATE_ROOM"; payload: IRoomObject };
export type SetRoomConnectionError = {
  type: "SET_ROOM_CONNECTION_ERROR";
  payload: boolean;
};

export type RoomAction =
  | SetRoomCodeAction
  | UpdateRoomAction
  | SetRoomConnectionError;

export const setRoomCode = (roomCode: string): SetRoomCodeAction => ({
  type: "SET_ROOM_CODE",
  payload: roomCode,
});

export const updateRoom = (room: IRoomObject): UpdateRoomAction => ({
  type: "UPDATE_ROOM",
  payload: room,
});

export const setRoomConnectionError = (): SetRoomConnectionError => ({
  type: "SET_ROOM_CONNECTION_ERROR",
  payload: true,
});
