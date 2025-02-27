import api from "@/config/api";
import * as actionType from "./ActionType";

export const sendMessage = (messageData) => async (dispatch) => {
  dispatch({ type: actionType.SEND_MESSAGE_REQUEST });
  try {
    const { response } = await api.post("/api/messages/send", messageData);
    dispatch({ type: actionType.SEND_MESSAGE_SUCCESS, payload: response.data });
    console.log("Message sent successfully:", response.data);
  } catch (error) {
    dispatch({ type: actionType.SEND_MESSAGE_FAILURE, error: error.message });
    console.log("Error sending message:", error.message);
  }
};

export const fetchChatByProject = (projectId) => async (dispatch) => {
  dispatch({ type: actionType.FETCH_CHAT_BY_PROJECT_REQUEST });
  try {
    const { response } = await api.get(`/api/projects/${projectId}/chat`);
    dispatch({
      type: actionType.FETCH_CHAT_BY_PROJECT_SUCCESS,
      payload: response.data,
    });
    console.log("fetch chat successfully:", response.data);
  } catch (error) {
    dispatch({
      type: actionType.FETCH_CHAT_BY_PROJECT_FAILURE,
      error: error.message,
    });
    console.log("Error fetching chat:", error.message);
  }
};

export const fetchChatMessages = (chatId) => async (dispatch) => {
  dispatch({ type: actionType.FETCH_CHAT_MESSAGES_REQUEST });
  try {
    const { response } = await api.get(`/api/messages/chat/${chatId}`);
    dispatch({
      type: actionType.FETCH_CHAT_MESSAGES_SUCCESS,
      chatId,
      payload: response.data,
    });
    console.log("fetch chat messages:", response.data);
  } catch (error) {
    dispatch({
      type: actionType.FETCH_CHAT_MESSAGES_FAILURE,
      error: error.message,
    });
    console.log("Error fetching chat nessages:", error.message);
  }
};
