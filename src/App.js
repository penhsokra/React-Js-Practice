import * as React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import AuthScreen from './screens/auth/Auth.screen';
import Category from './screens/category/Category.screen';
import Course from './screens/course/Course.screen';
import Layout from './screens/layout/Layout.screen';
function App() {
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path='/course' element={<Course />} />
          <Route path='/category' element={<Category />} />
        </Route>
        <Route path='/Auth' element={<AuthScreen />} />
      </Routes>
  );
}
export default App;
