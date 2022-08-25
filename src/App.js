import * as React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import AuthScreen from './screens/auth/Auth.screen';
import CategoryForm from './screens/category/Category.form';
import Category from './screens/category/Category.screen';
import CourseForm from './screens/course/Course.form';
import Course from './screens/course/Course.screen';
import Layout from './screens/layout/Layout.screen';
import PageNotFound from './screens/pageNotFound/PageNotFound.screen';
function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/course' element={<Course />} />
        <Route path='/category' element={<Category />} />
        <Route path='/category-form' element={<CategoryForm />} />
        <Route path='/course-form' element={<CourseForm />} />
      </Route>
      <Route path='/Auth' element={<AuthScreen />} />
      <Route path='*' element={<PageNotFound />} />
    </Routes>
  );
}
export default App;
