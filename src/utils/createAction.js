import React from 'react';

export default (Component) => {
  let initialProps = () => ({});
  if (Component.getInitialProps) {
    initialProps = Component.getInitialProps;
  }

  return async (...params) => {
    const props = await initialProps(...params);
    console.log('props!!!', props);
    return React.createElement(Component, props);
  }
};
