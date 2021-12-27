/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setCities } from "../actions/index";
import City from "./city";

class CityList extends Component {
  componentWillMount () {
    this.props.setCities();
  }

  render () {
    return (
      <div className="cities">
        {this.props.cities.map(city =>
          <City key={city.name} city={city} updateCity={this.props.updateCity} />
        )}
      </div>
    );
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(
    { setCities: setCities },
    dispatch
  );
}

function mapStateToProps (reduxState) {
  return {
    cities: reduxState.cities
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CityList);
