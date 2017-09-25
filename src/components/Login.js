import StorageHelper from '../utils/StorageHelper';
import { fetchJson } from '../utils/fetchHelper';
import React, { Component } from 'react';
import { Link } from 'react-router';
import { Field, reduxForm, reducer as reduxFormReducer } from 'redux-form';
import { TextField } from 'redux-form-material-ui';
import { cyan500, pinkA200 } from 'material-ui/styles/colors';
import ActionAccountBox from 'material-ui/svg-icons/action/account-box';
import { Avatar, Card, RaisedButton, CircularProgress } from 'material-ui';

const styles = {
  login: {
    backgroundColor: cyan500,
  },
  loginIcon: {
    backgroundColor: pinkA200
  }
}

class Login extends Component {
  componentDidMount() {
    this.refs.username // the Field
      .getRenderedComponent() // on Field, returns ReduxFormMaterialUITextField
      .getRenderedComponent() // on ReduxFormMaterialUITextField, returns TextField
      .focus(); // on TextField
  }
  render() {
    const { handleSubmit, isLoading } = this.props;
    return (
      <div className="login" style={styles.login}>
        <Card className="login-box">
          <div className="login-icon text-center">
            <Avatar style={styles.loginIcon} icon={<ActionAccountBox />} size={64} />
          </div>
          <form onSubmit={handleSubmit}>
            <Field
              name="username"
              component={TextField}
              floatingLabelText="手机号"
              disabled={isLoading}
              ref="username"
              withRef
              fullWidth
            />
            <Field
              name="password"
              component={TextField}
              floatingLabelText="密码"
              type="password"
              disabled={isLoading}
              fullWidth
            />
            <RaisedButton
              className="login-btn"
              type="submit"
              primary
              disabled={isLoading}
              icon={isLoading && <CircularProgress size={25} thickness={2} />}
              label="登录"
              fullWidth
            />
          </form>
        </Card>
      </div>
    )
  }
}

export default reduxForm({
  form: 'Login',
})(Login)
