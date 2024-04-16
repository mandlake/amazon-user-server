import { createAction } from "redux-actions";
export const boardConstants = {
  BOARDS_REQUEST: "BOARDS_REQUEST",
  BOARDS_SUCCESS: "BOARDS_SUCCESS",
  BOARDS_FAILURE: "BOARDS_FAILURE",
};
export const getBoardsRequest = createAction(boardConstants.BOARDS_REQUEST);
export const getArticlesSuccess = createAction(boardConstants.BOARDS_SUCCESS);
export const getArticlesFailure = createAction(boardConstants.BOARDS_FAILURE);
