import React, { lazy } from 'react';
import { 
  Routes,
  Route,
  Navigate
} from 'react-router-dom'
import { PATHS } from '../constants';

const PostsPage = lazy(() => import('../pages/posts'));
const PostByIdPage = lazy(() => import('../pages/postById'));
const MyPostsPage = lazy(() => import('../pages/myPosts'));

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path={PATHS.POSTS} element={ <PostsPage/> }/>
      <Route path={PATHS.POSTS_DETAIL} element={ <PostByIdPage/> }/>
      <Route path={PATHS.MY_POSTS} element={ <MyPostsPage/> }/>
      <Route path='*' element={ <Navigate to="/posts" replace /> }/>
    </Routes>
  );
}
