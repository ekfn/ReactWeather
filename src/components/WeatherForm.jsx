import React from 'react';

export default React.createClass({
  onSubmit(e){
    e.preventDefault();
    const input = this.refs.input, value = input.value;

    if (!value.length) {
      return;
    }

    this.props.onSearch(value);
    input.value = '';
  },
  render(){
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input type="text" ref="input" placeholder="enter city name"/>
          <button>Get Weather</button>
        </form>
      </div>
    );
  }
})
