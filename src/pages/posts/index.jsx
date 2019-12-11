import React from 'react';

const PostsPage = ({ text = 'meh...' }) => (
  <h1>Posts page, {text}</h1>
);

PostsPage.getInitialProps = () => {
  return {
    text: 'Super!',
  };
};

export default PostsPage;
