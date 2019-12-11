import React from 'react';

const PostPage = ({ id, tab }) => (
  <h1>Post tab page {id}-{tab}</h1>
);

PostPage.getInitialProps = (ctx, { id, tab }) => {
  return {
    id,
    tab,
  };
};

export default PostPage;
