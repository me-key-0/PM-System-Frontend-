import * as actionType from "./ActionType";

const initialState = {
  projects: [],
  loading: false,
  error: null,
  projectDetails: null,
  searchProjects: [],
};

const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.FETCH_PROJECTS_REQUEST:
    case actionType.CREATE_PROJECT_REQUEST:
    case actionType.UPDATE_PROJECT_REQUEST:
    case actionType.DELETE_PROJECT_REQUEST:
    case actionType.SEARCH_PROJECTS_REQUEST:
    case actionType.FETCH_PROJECT_BY_ID_REQUEST:
      return { ...state, loading: true };

    case actionType.FETCH_PROJECTS_SUCCESS:
      return { ...state, loading: false, projects: action.payload };
    case actionType.FETCH_PROJECT_BY_ID_SUCCESS:
      return { ...state, loading: false, projectDetails: action.payload };
    case actionType.CREATE_PROJECT_SUCCESS:
      return {
        ...state,
        loading: false,
        projects: [...state.projects, action.payload],
      };
    case actionType.UPDATE_PROJECT_SUCCESS:
      return {
        ...state,
        loading: false,
        projects: state.projects.map((project) =>
          project.id === action.payload.id ? action.payload : project
        ),
      };
    case actionType.DELETE_PROJECT_SUCCESS:
      return {
        ...state,
        loading: false,
        projects: state.projects.filter((project) => project.id !== action.id),
      };
    case actionType.SEARCH_PROJECTS_SUCCESS:
      return { ...state, loading: false, searchProjects: action.payload };
    default:
      return state;
  }
};

export default projectReducer;
