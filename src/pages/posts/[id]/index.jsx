import React from 'react';

const PostPage = ({ id }) => (
  <h1>Post page {id}</h1>
);

PostPage.getInitialProps = (ctx, { id }) => {
  return {
    id,
  };
};

export default PostPage;
