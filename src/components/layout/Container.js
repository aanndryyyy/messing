import React from 'react';
import PropTypes from 'prop-types';

import './styles/Container.css';

const Container = ({addClass, children}) => {
  return (
    <div className={`container ${addClass}`}>
      {children}
    </div>
  );
}

Container.propTypes = {
  children: PropTypes.node,
  addClass: PropTypes.string
};

export default Container;
