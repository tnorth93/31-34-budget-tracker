import React from 'react';
import PropTypes from 'prop-types';

const emptyState = { content: ''};

export default class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.expense || emptyState;
  }

  handleChangeExpenseName = (event) => {
    const value = event.target.value;
    this.setState({ expenseName: value});
  };

  handleChangeExpenseCost = (event) => {
    const value = event.target.value;
    this.setState({ cost: value});
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const categoryId = this.props.category ? this.props.category.id : this.props.expense.categoryId;
    this.props.onComplete({
      ...this.state,
      categoryId,
    });
    this.setState(emptyState);
  };

  render() {
    const { expense } = this.props;
    const buttonText = expense ? 'Update Expense' : 'Create Expense';

    return (
      <form
        className='expense-form'
        onSubmit={this.handleSubmit}
      >
        <input
          type='text'
          name='expense-name'
          placeholder='Expense Name'
          value={this.state.expenseName}
          onChange={this.handleChangeExpenseName}
        />
        <input
          type='number'
          name='expense'
          placeholder='0.00'
          step='.01'
          value={this.state.cost}
          onChange={this.handleChangeExpenseCost}
        />
        <button type='submit'> {buttonText} </button>
      </form>
    );
  }
}

ExpenseForm.propTypes = {
  onComplete: PropTypes.func,
  category: PropTypes.object,
  expense: PropTypes.object,
};
