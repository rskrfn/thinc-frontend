import axios from "axios";

export function loginAction(data) {
  let config = {
    method: "POST",
    url: `${process.env.REACT_APP_API_URL}/users/login`,
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
export function logoutAction() {
  return (dispatch) => {
    dispatch({ type: "LOGOUT" });
  };
}
