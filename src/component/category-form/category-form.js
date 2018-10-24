import React from 'react';
import PropTypes from 'prop-types';

const emptyState = {
  title: '',
  budget: 0,
};

class CategoryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.category || emptyState;
  }

  handleChangeTitle = (event) => {
    const { value } = event.target;
    this.setState({title: value});
  };

  handleChangeBudget = (event) => {
    const { value } = event.target;
    this.setState({budget: value});
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onComplete(this.state);
    this.setState(emptyState);
  };

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}>

        <input
          type='text'
          name='title'
          placeholder='tooter'
          value={this.state.title}
          onChange={this.handleChangeTitle}
          />
        <input
          type='number'
          name='budget'
          placeholder='0'
          value={this.state.budget}
          onChange={this.handleChangeBudget}
          />
        <button type='submit'> Create </button>

      </form>
    );
  }
};

CategoryForm.propTypes = {
  category: PropTypes.object,
  onComplete: PropTypes.func,
};

export default CategoryForm;