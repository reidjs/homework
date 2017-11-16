import React from 'react';
import { Route, Link, NavLink } from 'react-router-dom';
import Indigo from './indigo';


class Blue extends React.Component {
  render() {
    return (
      <div>
        <h2 className="blue"></h2>
        {/* Links here */}
        <Link to="/blue/indigo">Add Indigo</Link>
        <Link to="/blue">Blue only</Link>
        {/* Routes here */}
        <Route path="/blue/indigo" component={Indigo} />
      </div>
    );
  }
};

export default Blue;
