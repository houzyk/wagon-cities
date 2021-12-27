import React, { Component } from 'react';
import CityList from "../containers/city_list";
import ActiveCity from "../containers/active_city";
import cities from "../../data/cities";

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      activeCity: cities[0]
    };
  }

  updateCity = city => this.setState({ activeCity: city });

  render () {
    return (
      <div className="app">
        <CityList updateCity={this.updateCity} />
        <ActiveCity activeCity={this.state.activeCity} />
      </div>
    );
  }
}

export default App;
