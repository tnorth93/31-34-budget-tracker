import React from 'react';
import PropTypes from 'prop-types';

class Expense extends React.Component {
  render() {
    return (
      <p key={this.props.key}>{ this.props.expense.content }</p>
    );
  }
}

Expense.propTypes = {
  expense: PropTypes.object,
  key: PropTypes.number,
};

export default Expense;
