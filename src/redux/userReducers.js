const user = { user: {}, loggedinStatus: "NOT_LOGGED_IN" };

const userReducers = (state = user, action) => {
  switch (action.type) {
    case "LOGIN_USER":
      return {
        ...state,
        user: action.user,
        loggedinStatus: "LOGGED_IN",
      };
    case "LOGOUT_USER":
      return {
        ...state,
        user: {},
        loggedinStatus: "NOT_LOGGED_IN",
      };
    case "ERROR":
      return {
        loggedinStatus: "THERE_WAS_AN_ERROR",
      };
    default:
      return state;
  }
};

export default userReducers;
