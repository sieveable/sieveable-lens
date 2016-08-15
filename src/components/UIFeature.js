import React, { PropTypes } from 'react';

const UIFeatureComponent = function uiFeatureComponent(props) {
  return (
    <h1>UI Feature: {props.params.featureName}</h1>
  );
};

UIFeatureComponent.propTypes = {
  params: PropTypes.object.isRequired
};
export default UIFeatureComponent;
