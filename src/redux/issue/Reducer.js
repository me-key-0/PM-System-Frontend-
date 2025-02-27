import * as actionType from "./ActionType";

const initialState = {
  issues: [],
  loading: false,
  error: null,
  issueDetails: null,
};

const IssueReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.CREATE_ISSUE_REQUEST:
    case actionType.ASSIGN_ISSUE_TO_USER_REQUEST:
    case actionType.DELETE_ISSUE_REQUEST:
    case actionType.FETCH_ISSUES_BY_ID_REQUEST:
    case actionType.UPDATE_ISSUE_REQUEST:
    case actionType.UPDATE_ISSUE_STATUS_REQUEST:
      return { ...state, loading: true, error: null };
    case actionType.CREATE_ISSUE_SUCCESS:
      return {
        ...state,
        loading: false,
        issues: [...state.issues, action.payload],
      };
    case actionType.FETCH_ISSUES_BY_ID_SUCCESS:
      return {
        ...state,
        loading: false,
        issueDetails: action.payload,
      };
    case actionType.FETCH_ISSUES_BY_PROJECT_ID_SUCCESS:
      return {
        ...state,
        loading: false,
        issues: action.payload,
      };
    case actionType.DELETE_ISSUE_SUCCESS:
      return {
        ...state,
        loading: false,
        issues: state.issues.filter((issue) => issue.id != action.issueId),
      };
    case actionType.UPDATE_ISSUE_STATUS_SUCCESS:
    case actionType.ASSIGN_ISSUE_TO_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        issues: state.issues.map((issue) =>
          issue.id === action.issueId ? action.payload : issue
        ),
      };

    case actionType.CREATE_ISSUE_FAILURE:
    case actionType.FETCH_ISSUES_BY_ID_FAILURE:
    case actionType.FETCH_ISSUES_BY_PROJECT_ID_FAILURE:
    case actionType.DELETE_ISSUE_FAILURE:
    case actionType.UPDATE_ISSUE_STATUS_FAILURE:
    case actionType.ASSIGN_ISSUE_TO_USER_FAILURE:
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
};

export default IssueReducer;
