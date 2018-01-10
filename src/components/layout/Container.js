import React from 'react';
import PropTypes from 'prop-types';

import './styles/Container.css';

const Container = (props) => {
  return (
    <div className={`container ${props.class}`}>
      {props.children}
    </div>
  );
}

Container.propTypes = {
  children: PropTypes.node
};

export default Container;