const initialState = {
  baseCurrency: "Please select",
  rates: {},
  averageRate: 0
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case "SWITCH_CURRENCY":
      let nextState = {
        baseCurrency: action.baseCurrency,
        rates: action.rates,
        averageRate: 0
      };
      // console.log(nextState);
      return nextState;
    case "AVERAGE_EXCHANGE_RATE":
      let rates = Object.keys(action.rates);
      // console.log(rates);
      let sumRates = rates.reduce(function(tot, el){
        // console.log(action.rates[el]);
        return tot + action.rates[el];
      }, 0);
      // console.log(sumRates);
      let avg = sumRates/Object.keys.length;
      console.log(avg);
      // debugger
      let averageRateState = {
        baseCurrency: action.baseCurrency,
        rates: {},
        averageRate: avg
      };
      console.log(averageRateState);
      return averageRateState;
    default:
      return state; // remove this and fill out the body of the reducer function
  }
};
window.reducer = reducer; //for testing

export default reducer;
