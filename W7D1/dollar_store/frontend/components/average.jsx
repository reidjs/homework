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
          this.selectCurrency(resp.base, resp.rates)
        );
      }.bind(this)
    });
  }

  render() {
    const { rates, baseCurrency } = this.props.store.getState();
    return (
      <div>
        <h1>Average exchange rate</h1>
      </div>
    );
  }
}

export default Average;
