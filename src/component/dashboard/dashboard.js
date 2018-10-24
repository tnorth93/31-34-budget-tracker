import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as categoryActions from '../../action/category-actions';
import CategoryForm from '../category-form/category-form';

class Dashboard extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <CategoryForm onComplete={this.props.categoryCreate}/>
        <p> { this.props.categories.map(currentCategory =>
          <p key={currentCategory.id}>{currentCategory.title}<button name='booty'>booter</button></p>)}</p>
      </div>
    );
  }
}

Dashboard.propTypes = {
  categoryCreate: PropTypes.func,
  categories: PropTypes.array,
};

const mapStateToProps = (state) => {
  return {
    categories: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    categoryCreate: (category) => {
      return dispatch(categoryActions.create(category));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
