import React, { Component } from 'react';
import  { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { Card, CardSection, Input, Button, Spinner } from './common';

class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(password) {
    this.props.passwordChanged(password);
  }

  onLoginPress() {
    const { email, password } = this.props;
    this.props.loginUser({email, password });
  }

  renderError() {
    if (this.props.error && this.props.error !== '') {
      return (
        <View style={{ backgroundColor: 'white'}}>
          <Text style={styles.errorTextStyle}>{this.props.error}</Text>
        </View>
      );
    }
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="email@gmail.com"
            onChangeText={this.onEmailChange.bind(this)}
            value={this.props.email}
          />
        </CardSection>
        <CardSection>
          <Input
            secureTextEntry
            label="Password"
            placeholder="password"
            onChangeText={this.onPasswordChange.bind(this)}
            value={this.props.password}
          />
        </CardSection>
        {this.renderError()}
        <CardSection>
          { !this.props.showSpinner &&
            <Button
              onPress={this.onLoginPress.bind(this)}
            >
              Login
            </Button>
          }
          { this.props.showSpinner &&
            <Spinner
              size="large"
            />
          }
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    color: 'red',
    fontSize: 20,
    alignSelf: 'center'
  }
};

function mapStateToProps({ auth }) {
  const { email, password, error, showSpinner } = auth;

  return {
    email,
    password,
    error,
    showSpinner
  }
}

export default connect(
  mapStateToProps,
  {
    emailChanged,
    passwordChanged,
    loginUser
  }
)(LoginForm);
