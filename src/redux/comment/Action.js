import api from "@/config/api";
import * as actionType from "./ActionType";

export const createComment = (commentData) => async (dispatch) => {
  dispatch({ type: actionType.CREATE_COMMENT_REQUEST });
  try {
    const { data } = await api.post(`/api/comment`, commentData);
    dispatch({ type: actionType.CREATE_COMMENT_SUCCESS, payload: data });
    console.log("Comment created successfully:", data);
  } catch (error) {
    dispatch({
      type: actionType.CREATE_COMMENT_FAILURE,
      payload: error.message,
    });
    console.log("Error creating comment:", error);
  }
};

export const deleteComment = (commentId) => async (dispatch) => {
  dispatch({ type: actionType.DELETE_COMMENT_REQUEST });
  try {
    const { data } = await api.delete(`/api/comment/${commentId}`);
    dispatch({ type: actionType.DELETE_COMMENT_SUCCESS, commentId, payload: data });
    console.log("Comment deleted successfully:", data);
  } catch (error) {
    dispatch({
      type: actionType.DELETE_COMMENT_FAILURE,
      payload: error.message,
    });
    console.log("Error deleting comment:", error);
  }
};

export const fetchComments = (issueId) => async (dispatch) => {
  dispatch({ type: actionType.FETCH_COMMENTS_REQUEST });
  try {
    const { data } = await api.get(`/api/comment/${issueId}`);
    dispatch({ type: actionType.FETCH_COMMENTS_SUCCESS, payload: data });
    console.log("Comment fetched successfully:", data);
  } catch (error) {
    dispatch({
      type: actionType.FETCH_COMMENTS_FAILURE,
      payload: error.message,
    });
    console.log("Error fetching comment:", error);
  }
};
