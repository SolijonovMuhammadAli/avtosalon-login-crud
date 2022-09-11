import React, { Component } from "react";
import "./errorBoundry.css";
class Error extends Component {
  state = {
    hasError: false,
  };

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    return this.state.hasError ? (
      <div className="error-boundy">
        <h1>Error!</h1>
      </div>
    ) : (
      this.props.children
    );
  }
}

export default Error;
