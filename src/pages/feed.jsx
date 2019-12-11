import React from 'react';

const FeedPage = ({ list }) => (
  <h1>Feed page. {list.length} items</h1>
);

FeedPage.getInitialProps = () => {
  return {
    list: (new Array(5)).fill(null),
  };
};

export default FeedPage;
