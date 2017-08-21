import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import { AppBar } from 'material-ui';
import StorageHelper from '../utils/StorageHelper';
import { fetchJson } from '../utils/fetchHelper';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.
class App extends React.Component {
  setItem() {
    // StorageHelper.setItem('some',{token:123},{expire:1})
    // console.log(StorageHelper.getItem('some'))
  }

  getItem() {
    // console.log(StorageHelper.getItem('some'))
  }

  removeItem() {
    // StorageHelper.removeItem('some')
    // console.log(StorageHelper.getItem('some'))
  }

  clear() {
    // StorageHelper.clear()
    // console.log(StorageHelper.getItem('some'))
  }

  componentDidMount() {
    fetchJson('sso/login', {
      method: 'POST',
      body: {username: "18902466666", password: "Ab123456*"},
    }).then(data=>{
      // console.log(data)
    })
  }

  render() {
    return (
      <div>
        <AppBar
          title="Title"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
        />
        <IndexLink to="/">Home123</IndexLink>
        {' | '}
        <Link to="/fuel-savings">Demo App456</Link>
        {' | '}
        <Link to="/about">About789</Link>
        <br/>
        <div onTouchTap={this.setItem}>setItem</div>
        <div onTouchTap={this.getItem}>getItem</div>
        <div onTouchTap={this.removeItem}>removeItem</div>
        <div onTouchTap={this.clear}>clear</div>
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;
