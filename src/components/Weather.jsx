import React from 'react';
import WeatherForm from 'WeatherForm';
import WeatherMessage from 'WeatherMessage';
import * as openweather from 'openweather';

export default React.createClass({
  getInitialState(){
    return {
      isLoading: false
    }
  },
  handleSearch(cityname){
    this.setState({ isLoading: true });
    openweather.getTemp(cityname).then((temp)=>{
      this.setState({
        isLoading: false,
        cityname,
        temp
      });
    }, (err)=>{
      console.log(err);
      this.setState({
        isLoading: false,
        cityname: ''
      });
    });
  },
  renderMessage(){
    if (this.state.isLoading) {
      return (
        <div>loading...</div>
      )
    }

    if (this.state.cityname) {
      return (
        <WeatherMessage cityname={this.state.cityname} temp={this.state.temp}/>
      )
    }

    return null;
  },
  render(){
    return (
      <div>
        <h3>Get Weather</h3>
        <WeatherForm onSearch={this.handleSearch}/>
        {this.renderMessage()}
      </div>
    );
  }
});
