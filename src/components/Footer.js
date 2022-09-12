import React from 'react'

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 3 };
  }
  render() {
    return <h2>Value {this.state.counter}</h2>;
  }
}

export default Footer
