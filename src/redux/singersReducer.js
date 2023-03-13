const initState = JSON.parse(localStorage.getItem("singers")) ?? [];

export const singersReducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_ALL_SINGER":
      state = [...action.payload];
      localStorage.setItem("singers", JSON.stringify(state));
      return state;
    default:
      return state;
  }
};