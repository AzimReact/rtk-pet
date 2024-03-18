import React, { FC } from 'react';
import Posts from '../components/Posts';
import Pagewrapper from '../layouts/Pagewrapper';

const PostsPage: FC = () => {
  return (
    <Pagewrapper>
      <h2>Posts page</h2>
      <Posts />
    </Pagewrapper>
  );
};

export default PostsPage;