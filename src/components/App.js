import React, { PropTypes } from 'react';


// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.
class App extends React.Component {
  render() {
    const { store } = this.props;
    console.log(store)
    return this.props.children
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;
