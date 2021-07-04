import axios from "axios";

const API_URL = process.env.API_URL;

export function loginAction(data) {
  let config = {
    method: "POST",
    url: `${API_URL}/users/login`,
    data: data,
  };
  return (dispatch) => {
    dispatch({
      type: "LOGIN_PENDING",
    });
    axios(config)
      .then((res) => {
        dispatch({ type: "LOGIN_FULFILLED", payload: res.data.data });
      })
      .catch((err) => {
        dispatch({
          type: "LOGIN_REJECTED",
          payload: err.response,
        });
      });
  };
}
export function logoutHandler() {
  return (dispatch) => {
    dispatch({ type: "LOGOUT" });
  };
}
