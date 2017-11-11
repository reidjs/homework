const initialState = {
  baseCurrency: "Please select",
  rates: {}
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case "SWITCH_CURRENCY":
      let nextState = {
        baseCurrency: action.baseCurrency,
        rates: action.rates
      };
      return nextState;
    default:
      return state; // remove this and fill out the body of the reducer function
  }
};
window.reducer = reducer;

export default reducer;
