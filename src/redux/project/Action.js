import api from "@/config/api";

export const fetchProjects = (category, tag) => async (dispatch) => {
  dispatch({ type: "FETCH_PROJECTS_REQUEST" });
  try {
    const { data } = await api.get(`/api/projects`, {
      params: { category, tag },
    });
    dispatch({ type: "FETCH_PROJECTS_SUCCESS", payload: data });
    console.log("all projects", data);
  } catch (error) {
    dispatch({ type: "FETCH_PROJECTS_FAILURE", payload: error.message });
    console.log("error", error);
  }
};

export const fetchProjectById = (id) => async (dispatch) => {
  dispatch({ type: "FETCH_PROJECT_BY_ID_REQUEST" });
  try {
    const { data } = await api.get(`/api/projects/${id}`);
    dispatch({ type: "FETCH_PROJECT_BY_ID_SUCCESS", payload: data });
    console.log("project by id", data);
  } catch (error) {
    dispatch({ type: "FETCH_PROJECT_BY_ID_FAILURE", payload: error.message });
    console.log("error", error);
  }
};

export const createProject = (projectData) => async (dispatch) => {
  dispatch({ type: "CREATE_PROJECT_REQUEST" });
  try {
    const { data } = await api.post(`/api/projects`, projectData);
    dispatch({ type: "CREATE_PROJECT_SUCCESS", payload: data });
    console.log("project created", data);
  } catch (error) {
    dispatch({ type: "CREATE_PROJECT_FAILURE", payload: error.message });
    console.log("error", error);
  }
};

export const updateProject = (id, projectData) => async (dispatch) => {
  dispatch({ type: "UPDATE_PROJECT_REQUEST" });
  try {
    const { data } = await api.patch(`/api/projects/${id}`, projectData);
    dispatch({ type: "UPDATE_PROJECT_SUCCESS", payload: data });
    console.log("project updated", data);
  } catch (error) {
    dispatch({ type: "UPDATE_PROJECT_FAILURE", payload: error.message });
    console.log("error", error);
  }
};

export const deleteProject = (id) => async (dispatch) => {
  dispatch({ type: "DELETE_PROJECT_REQUEST" });
  try {
    const { data } = await api.delete(`/api/projects/${id}`);
    dispatch({ type: "DELETE_PROJECT_SUCCESS", id });
    console.log("project deleted", data);
  } catch (error) {
    dispatch({ type: "DELETE_PROJECT_FAILURE", payload: error.message });
    console.log("error", error);
  }
};

export const searchProject = (keyword) => async (dispatch) => {
  dispatch({ type: "SEARCH_PROJECT_REQUEST" });
  try {
    const { data } = await api.get(`/api/projects/search`, {
      params: { keyword },
    });
    dispatch({ type: "SEARCH_PROJECT_SUCCESS", payload: data });
    console.log("project searched", data);
  } catch (error) {
    dispatch({ type: "SEARCH_PROJECT_FAILURE", payload: error.message });
    console.log("error", error);
  }
};

export const inviteToProject = (invitation) => async (dispatch) => {
  dispatch({ type: "INVITE_TO_PROJECT_REQUEST" });

  try {
    const { data } = await api.post(`/api/projects/invite`, invitation);
    console.log("invitation sent", data);
  } catch (error) {
    dispatch({ type: "INVITE_TO_PROJECT_FAILURE", payload: error.message });
    console.log("error", error);
  }
};

export const acceptInvitation = (token, navigate) => async (dispatch) => {
  dispatch({ type: "ACCEPT_INVITATION_REQUEST" });
  try {
    const { data } = await api.get("/api/projects/accept_invitation", {
      params: { token },
    });
    navigate("/projects" + data.projectId);
    dispatch({ type: "ACCEPT_INVITATION_SUCCESS", payload: data });
    console.log("invitation accepted", data);
  } catch (error) {
    dispatch({ type: "ACCEPT_INVITATION_FAILURE", payload: error.message });
    console.log("error", error);
  }
};
