export function dashboardAction() {
  return (dispatch) => {
    dispatch({
      type: "DASHBOARD",
    });
  };
}
export function activityAction() {
  return (dispatch) => {
    dispatch({
      type: "ACTIVITY",
    });
  };
}
export function helpAction() {
  return (dispatch) => {
    dispatch({
      type: "HELP",
    });
  };
}
export function profileAction() {
  return (dispatch) => {
    dispatch({
      type: "PROFILE",
    });
  };
}
export function resetAction() {
  return (dispatch) => {
    dispatch({
      type: "RESET",
    });
  };
}
