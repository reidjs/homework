import React from 'react';
import Currency from './currency';
import {averageCurrency} from '../actions';

class Average extends React.Component {
  constructor(props) {
    super(props);
    this.forceUpdate = this.forceUpdate.bind(this);
    this.props.store.subscribe(this.forceUpdate);
    this.currencies = ["USD", "EUR", "CAD", "JPY", "GBP", "CNY"];
    this.averageCurrency = averageCurrency.bind(this);

  }

  fetchRates(currency) {
    $.ajax({
      url: `http://api.fixer.io/latest?base=${currency}`,
      type: "GET",
      dataType: "JSON",
      success: function(resp) {

        // tell the store to update with the new base currency and rates;
        // use the action creator 'selectCurrency' to build the object to
        // be dispatched
        this.props.store.dispatch(
          this.averageCurrency(resp.base, resp.rates)
        );
      }.bind(this)
    });
  }

  render() {
    const { rates, baseCurrency, averageRate } = this.props.store.getState();


    const currencyOptions = this.currencies.map( (currency) => (
        <div onClick={ () => { this.fetchRates(currency) }}
             key={currency}
             className="currency-option">
          {currency}
        </div>
      )
    );
    console.log(rates);
    const currencyNames = Object.keys(rates);

    const currencyRates = currencyNames.map( (currency) => (
      <Currency name={currency}
                rate={rates[currency]}
                key={currency} />
      )
    );
    return (
      <div>
        <h1>Average exchange rate</h1>
          <div className="currency-selector">
            Get Average: {currencyOptions}
          </div>
          <div className= "average-rate">
            {averageRate}
          </div>
      </div>
    );
  }
}
// {currencyOptions}

export default Average;
