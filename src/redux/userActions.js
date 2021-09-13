import login from "../providers/login";
import checkLoginStatus from "../providers/checkLoginStatus";
import registrations from "../providers/registrations";
import logout from "../providers/logout";

export const checkForLogin = (loggedinStatus) => {
  return (dispatch) => {
    checkLoginStatus().then((data) => {
      if (data.logged_in && loggedinStatus === "NOT_LOGGED_IN") {
        dispatch({ type: "LOGIN_USER", user: data.user });
      }
    });
  };
};

export const loginUser = (user) => {
  return (dispatch) => {
    login(user).then((data) => {
      if (data.logged_in) {
        dispatch({ type: "LOGIN_USER", user: data.user });
      } else {
        dispatch({ type: "ERROR" });
      }
    });
  };
};

export const registerUser = (user) => {
  return (dispatch) => {
    registrations(user).then((data) => {
      if (data.status === "created") {
        console.log(data);
        dispatch({ type: "LOGIN_USER", user: data.user });
      } else {
        dispatch({ type: "ERROR" });
      }
    });
  };
};

export const logoutUser = () => {
  return (dispatch) => {
    logout().then(() => dispatch({ type: "LOGOUT_USER" }));
  };
};
