import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as expenseActions from '../../action/expense-actions';
import ExpenseForm from '../expense-form/expense-form';
import Expense from '../expense/expense';

class Category extends React.Component {
  render() {
    const categoryExpenses = this.props.expenses[this.props.category.id];
    return (
     <div>
       {
         categoryExpenses.map((currentExpense, i) => <Expense expense={currentExpense} key={i}/>)
       }
       <ExpenseForm category={this.props.category} onComplete={this.props.expenseCreate}/>
     </div>
    );
  }
}

Category.propTypes = {
  category: PropTypes.object,
  expenseCreate: PropTypes.func,
  expenses: PropTypes.object,
};

const mapStateToProps = state => ({
  expenses: state.expenses,
});

const mapDispatchToProps = (dispatch) => {
  return {
    expenseCreate: expense => dispatch(expenseActions.create(expense)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Category);
