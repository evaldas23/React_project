import React from 'react';
import PropTypes from 'prop-types';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
    };
  }

  componentDidCach() {
    this.setState({ error: true });
  }

  render() {
    const { error } = this.state;
    const { children, message } = this.props;

    if (error) {
      return message;
    }

    return children;
  }
}
ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
  message: PropTypes.node.isRequired,
};

ErrorBoundary.defaultProps = {
  message: 'Default Error',
};

export default ErrorBoundary;
