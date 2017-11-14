import React from 'react';
import ReactDOM from 'react-dom';
import Widget from './components/widget';
import Average from './components/average';
import store from './store';

class Root extends React.Component {
  render() {
    return (
      <div>
        <Average store={store} />
        <Widget store={store} />
      </div>
    );
  }
}
// <Widget store={store} />

document.addEventListener("DOMContentLoaded", function(){
  ReactDOM.render(<Root />, document.getElementById('root'));
});
