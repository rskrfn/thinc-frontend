let initialState = {
  dashboard: true,
  activity: false,
  help: false,
  profile: false,
};

export const pageReducers = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case "DASHBOARD":
      return {
        ...state,
        dashboard: true,
        activity: false,
        help: false,
        profile: false,
      };
    case "ACTIVITY":
      return {
        ...state,
        dashboard: false,
        activity: true,
        help: false,
        profile: false,
      };
    case "HELP":
      return {
        ...state,
        dashboard: false,
        activity: false,
        help: true,
        profile: false,
      };
    case "PROFILE":
      return {
        ...state,
        dashboard: false,
        activity: false,
        help: false,
        profile: true,
      };
    case "RESET":
      return {
        ...state,
        dashboard: true,
        activity: false,
        help: false,
        profile: false,
      };
    default:
      return state;
  }
};
