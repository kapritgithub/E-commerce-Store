// category.component.jsx

import React from 'react';
import { connect } from 'react-redux';
import { getCategories } from '../../store/categories/categories.selector'; // Adjusted import path

const CategoryComponent = ({ categories }) => {
  return (
    <div>
      {/* Render category information */}
    </div>
  );
};

const mapStateToProps = (state) => ({
  categories: getCategories(state),
});

export default connect(mapStateToProps)(CategoryComponent);
