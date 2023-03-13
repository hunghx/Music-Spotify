const initState = JSON.parse(localStorage.getItem("user-login")) ?? {
  isLogin: false,
  userLogin: {},
};

export const userReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOG_IN":
      state = { isLogin: true, userLogin: action.payload };
      localStorage.setItem("user-login", JSON.stringify(state));
      return state;
    default:
      return state;
  }
};
