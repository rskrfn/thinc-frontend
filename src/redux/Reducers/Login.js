let initialState = {
  isPending: false,
  isRejected: false,
  isFulfilled: false,
  isLoggedIn: false,
  data: {},
  err: {},
};

export const loginReducers = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "LOGIN_PENDING":
      return {
        ...state,
        isPending: true,
        isRejected: false,
        isFulfilled: false,
        isLoggedIn: false,
        data: {},
        err: {},
      };
    case "LOGIN_REJECTED":
      return {
        ...state,
        isPending: false,
        isRejected: true,
        isFulfilled: false,
        isLoggedIn: false,
        data: {},
        err: payload,
      };
    case "LOGIN_FULFILLED":
      return {
        ...state,
        isPending: false,
        isRejected: false,
        isFulfilled: true,
        isLoggedIn: true,
        data: payload,
        err: {},
      };
    case "LOGOUT":
      return {
        ...state,
        isPending: false,
        isRejected: false,
        isFulfilled: true,
        isLoggedIn: false,
        data: {},
        err: {},
      };
    default:
      return state;
  }
};
