const initState = JSON.parse(localStorage.getItem("songs")) ?? [];

export const songReducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_ALL_SONG":
      state = [...action.payload];
      localStorage.setItem("songs", JSON.stringify(state));
      return state;
    default:
      return state;
  }
};
