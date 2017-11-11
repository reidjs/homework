const selectCurrency = (baseCurrency, rates) => ({
  type: "SWITCH_CURRENCY",
  baseCurrency,
  rates
});

const averageCurrency = (baseCurrency, rate) => ({
  type: "AVERAGE_EXCHANGE_RATE",
  baseCurrency,
  rate
});

// window.selectCurrency = selectCurrency; //for testing
export {selectCurrency, averageCurrency};
// export default averageCurrency;
