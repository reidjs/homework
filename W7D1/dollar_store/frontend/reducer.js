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
      // console.log(nextState);
      return nextState;
    case "AVERAGE_EXCHANGE_RATE":
      let rates = Object.keys(action.rates);
      let sumRates = rates.reduce(function(tot, el){
        return tot + el;
      });
      console.log(sumRates);
      let avg = sumRates/Object.keys.length;
      console.log(avg);
      // debugger
      let averageRateState = {
        baseCurrency: action.baseCurrency,
        average_rate: avg
      };
      console.log(averageRateState);
      return averageRateState;
    default:
      return state; // remove this and fill out the body of the reducer function
  }
};
window.reducer = reducer; //for testing

export default reducer;
