import React from 'react';
import PropTypes from 'prop-types';

const Section = (props) => {
  return (
    <section>
      {props.children}
    </section>
  );
}

Section.propTypes = {
  children: PropTypes.node
};

export default Section;