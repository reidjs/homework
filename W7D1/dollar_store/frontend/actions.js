const selectCurrency = (baseCurrency, rates) => ({
  type: "SWITCH_CURRENCY",
  baseCurrency,
  rates
});

const averageCurrency = (baseCurrency, rates) => ({
  type: "AVERAGE_EXCHANGE_RATE",
  baseCurrency,
  rates
});

// window.selectCurrency = selectCurrency; //for testing
export {selectCurrency, averageCurrency};
// export default averageCurrency;
