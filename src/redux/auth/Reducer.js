const initialState = {
  user: null,
  loading: false,
  error: null,
  jwt: null,
  projectSize: 0,
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case "REGISTER_REQUEST":
    case "LOGIN_REQUEST":
    case "GET_USER_REQUEST":
      return { ...state, loading: true };
    case "REGISTER_SUCCESS":
    case "LOGIN_SUCCESS":
      return {
        ...state,
        loading: false,
        // user: action.payload.user,
        jwt: action.payload.jwt,
      };
    case "GET_USER_SUCCESS":
      return { ...state, loading: false, user: action.payload.user };
    case "LOGOUT_REQUEST":
      return initialState;
    default:
      return state;
  }
};

export default AuthReducer;
