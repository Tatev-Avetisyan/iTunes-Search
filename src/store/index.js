export const initialState = {
  defaultValue: "",
};

export const filterReducer = (state , action) => {
  switch (action.type) {
    case "SEARCH":
      return {
        defaultValue: action.payload,
      };

    default:
      return state;
  }
};
