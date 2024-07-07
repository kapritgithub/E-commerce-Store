// final-shop-page.component.jsx

import React from 'react';
import { connect } from 'react-redux';
import { getCategories } from '../../store/categories/categories.selector'; // Adjusted import path

const FinalShopPage = ({ categories }) => {
  return (
    <div>
      {/* Render final shop page */}
    </div>
  );
};

const mapStateToProps = (state) => ({
  categories: getCategories(state),
});

export default connect(mapStateToProps)(FinalShopPage);

