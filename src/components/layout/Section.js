import React from 'react';
import PropTypes from 'prop-types';

import './styles/Section.css';

const Section = ({addClass, children}) => {
  return (
    <section className={`centered ${addClass}`}>
      {children}
    </section>
  );
}

Section.propTypes = {
  children: PropTypes.node,
  addClass: PropTypes.string
};

export default Section;
