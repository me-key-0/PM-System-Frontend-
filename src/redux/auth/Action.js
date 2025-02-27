import axios from "axios";
import { API_BASE_URL } from "@/config/api";

export const register = (userData) => async (dispatch) => {
  dispatch({ type: "REGISTER_REQUEST" });
  try {
    const { data } = await axios.post(`${API_BASE_URL}/auth/signup`, userData);
    if (data.jwt) {
      localStorage.setItem("jwt", data.jwt);
      dispatch({ type: "REGISTER_SUCCESS", payload: data });
    }
    console.log("register success", data);
  } catch (error) {
    console.log("register error", error);
    dispatch({ type: "REGISTER_FAILURE", payload: error.message });
  }
};

export const login = (userData) => async (dispatch) => {
  dispatch({ type: "LOGIN_REQUEST" });
  try {
    const { data } = await axios.post(`${API_BASE_URL}/auth/signin`, userData);
    if (data.jwt) {
      localStorage.setItem("jwt", data.jwt);
      dispatch({ type: "LOGIN_SUCCESS", payload: data });
    }
    console.log("login success", data);
  } catch (error) {
    console.log("login error", error);
    dispatch({ type: "LOGIN_FAILURE", payload: error.message });
  }
};

export const getUser = () => async (dispatch) => {
  dispatch({ type: "GET_USER_REQUEST" });
  try {
    const { data } = await axios.get(`${API_BASE_URL}/api/users/profile`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
    });
    dispatch({ type: "GET_USER_SUCCESS", payload: data });
    console.log("get user success", data);
  } catch (error) {
    console.log("get user error", error);
    dispatch({ type: "GET_USER_FAILURE", payload: error.message });
  }
};

export const logout = () => (dispatch) => {
  localStorage.clear();
  dispatch({ type: "LOGOUT" });
};
