const initState = JSON.parse(localStorage.getItem("albums")) ?? [];

export const albumsReducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_ALL_ALBUM":
      state = [...action.payload];
      localStorage.setItem("albums", JSON.stringify(state));
      return state;
    default:
      return state;
  }
};
