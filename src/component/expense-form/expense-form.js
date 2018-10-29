import React from 'react';
import PropTypes from 'prop-types';

const emptyState = { content: ''};

export default class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.expense || emptyState;
  }

  handleChange = (event) => {
    const value = event.target.value;
    this.setState({ content: value});
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
          name='content'
          placeholder='hmm'
          value={this.state.content}
          onChange={this.handleChange}
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
