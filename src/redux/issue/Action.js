import axios from "axios";
import * as actionTypes from "./ActionType";

export const getIssuesById = (issueId) => async (dispatch) => {
  dispatch({ type: actionTypes.FETCH_ISSUES_BY_ID_REQUEST });
  try {
    const { data } = await axios.get(`/api/issues/${issueId}`);
    dispatch({ type: actionTypes.FETCH_ISSUES_BY_ID_SUCCESS, payload: data });
    console.log("fetched issue:", data);
  } catch (error) {
    dispatch({
      type: actionTypes.FETCH_ISSUES_BY_ID_FAILURE,
      payload: error.message,
    });
    console.log("Error fetching issue:", error);
  }
};

export const getIssuesByProjectId = (projectId) => async (dispatch) => {
  dispatch({ type: actionTypes.FETCH_ISSUES_BY_PROJECT_ID_REQUEST });
  try {
    const { data } = await axios.get(`/api/issues/project/${projectId}`);
    dispatch({
      type: actionTypes.FETCH_ISSUES_BY_PROJECT_ID_SUCCESS,
      payload: data,
    });
    console.log("fetched issue:", data);
  } catch (error) {
    dispatch({
      type: actionTypes.FETCH_ISSUES_BY_PROJECT_ID_FAILURE,
      payload: error.message,
    });
    console.log("Error fetching issue:", error);
  }
};

export const createIssue = (issueData) => async (dispatch) => {
  dispatch({ type: actionTypes.CREATE_ISSUE_REQUEST });
  try {
    const { data } = await axios.post("/api/issues", issueData);
    dispatch({ type: actionTypes.CREATE_ISSUE_SUCCESS, payload: data });
    console.log("Issue created:", data);
  } catch (error) {
    dispatch({
      type: actionTypes.CREATE_ISSUE_FAILURE,
      payload: error.message,
    });
    console.log("Error creating issue:", error);
  }
};

export const deleteIssue = (issueId) => async (dispatch) => {
  dispatch({ type: actionTypes.DELETE_ISSUE_REQUEST });
  try {
    const { data } = await axios.delete(`/api/issues/${issueId}`);
    dispatch({
      type: actionTypes.DELETE_ISSUE_SUCCESS,
      issueId,
      payload: data,
    });
    console.log("Issue deleted:", data);
  } catch (error) {
    dispatch({
      type: actionTypes.DELETE_ISSUE_FAILURE,
      payload: error.message,
    });
    console.log("Error deleting issue:", error);
  }
};

export const assignIssueToUser = (issueId, assigneeId) => async (dispatch) => {
  dispatch({ type: actionTypes.ASSIGN_ISSUE_TO_USER_REQUEST });
  try {
    const { data } = await axios.put(`/api/issues/${issueId}`, {
      params: { assigneeId },
    });
    dispatch({
      type: actionTypes.ASSIGN_ISSUE_TO_USER_SUCCESS,
      issueId,
      payload: data,
    });
    console.log("Issue assigned:", data);
  } catch (error) {
    dispatch({
      type: actionTypes.ASSIGN_ISSUE_TO_USER_FAILURE,
      payload: error.message,
    });
    console.log("Error assigning issue:", error);
  }
};

export const updateIssueStatus = (issueId, status) => async (dispatch) => {
  dispatch({ type: actionTypes.UPDATE_ISSUE_STATUS_REQUEST });
  try {
    const { data } = await axios.patch(`/api/issues/${issueId}`, {
      params: { status },
    });
    dispatch({
      type: actionTypes.UPDATE_ISSUE_STATUS_SUCCESS,
      issueId,
      payload: data,
    });
    console.log("Issue status updated:", data);
  } catch (error) {
    dispatch({
      type: actionTypes.UPDATE_ISSUE_STATUS_FAILURE,
      payload: error.message,
    });
    console.log("Error updating issue status:", error);
  }
};
