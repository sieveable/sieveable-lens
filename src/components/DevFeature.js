import React, { PropTypes } from 'react';

const DevFeatureComponent = function devFeatureComponent(props) {
  return (
    <h1>Dev Feature: {props.params.featureName}</h1>
  );
};

DevFeatureComponent.propTypes = {
  params: PropTypes.object.isRequired
};

export default DevFeatureComponent;
