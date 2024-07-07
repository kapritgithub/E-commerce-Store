// categories-preview.component.jsx

import React from 'react';
import { connect } from 'react-redux';
import { getCategories } from '../../store/categories/categories.selector'; // Adjusted import path

const CategoriesPreview = ({ categories }) => {
  return (
    <div>
      {/* Render categories */}
    </div>
  );
};

const mapStateToProps = (state) => ({
  categories: getCategories(state),
});

export default connect(mapStateToProps)(CategoriesPreview);
