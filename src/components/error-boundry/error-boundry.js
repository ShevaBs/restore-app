import React, { Component } from 'react';
import ErrorIndicator from '../error-indicator';

export default class ErrorBoundry extends Component {
  state = {hasError: false}

  componentDidCatch(error) {
    this.setState({hasError: true});
    console.log(error);
  }

  render() {
    const {hasError} = this.state;
    return (
      <div>
        {hasError ? <ErrorIndicator/> : this.props.children}
      </div>
    )
  }
} 