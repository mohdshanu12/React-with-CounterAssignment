 

import React, { Component } from 'react';

 

class Counter extends Component {

  state = {

    count: 0,

  };

//increment the count by 1

  increment = () => {

    this.setState((prevState) => ({

      count: prevState.count + 1,

    }));

  };

  //decrement the count by 1

  decrement = () => {

    this.setState((prevState) => ({

      count: prevState.count - 1,

    }));

  };

  render() {

    const { count } = this.state;

    return (

      <div class="container">

        <h1>Simple Counter</h1>

        <p>Count: {count}</p>

        <button onClick={this.increment}>Increment</button>

        <button onClick={this.decrement}>decrement</button>

      </div>

    );

  }

}

 

export default Counter;
