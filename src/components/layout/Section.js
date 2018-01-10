import React from 'react';
import PropTypes from 'prop-types';

import './styles/Section.css';

const Section = (props) => {
  return (
    <section className={`centered ${props.class}`}>
      {props.children}
    </section>
  );
}

Section.propTypes = {
  children: PropTypes.node,
  class: PropTypes.string
};

export default Section;