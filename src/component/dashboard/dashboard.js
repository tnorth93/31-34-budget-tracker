import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as categoryActions from '../../action/category-actions';
import CategoryForm from '../category-form/category-form';
import Category from '../category/category';

class Dashboard extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <CategoryForm onComplete={this.props.categoryCreate}/>
         { this.props.categories.map((currentCategory, i) => <Category
           category={currentCategory} key={i}/>)}
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
    categories: state.categories,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    categoryCreate: (category) => {
      dispatch(categoryActions.create(category));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
