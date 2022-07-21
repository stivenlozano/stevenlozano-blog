import React, {lazy} from 'react';
import { 
  Routes,
  Route,
  Navigate
} from 'react-router-dom'
import { PATHS } from '../constants';

const PostsPage = lazy(() => import('../pages/posts'));

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path={PATHS.POSTS} element={ <PostsPage/> }/>
      <Route path='*' element={ <Navigate to="/posts" replace /> }/>
    </Routes>
  );
}
