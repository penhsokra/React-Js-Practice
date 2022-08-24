import * as React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import AuthScreen from './screens/auth/Auth.screen';
import Category from './screens/category/Category.screen';
import Course from './screens/course/Course.screen';
import Layout from './screens/layout/Layout.screen';
function App() {
  return (
    <div className='App'>
      <Routes>
        <Route index element={<AuthScreen />}></Route>
        <Route path='/home' element={<Layout />} />
        <Route path='/Auth' element={<AuthScreen />} />
        <Route path='/course' element={<Course />} />
        <Route path='/category' element={<Category />} />
      </Routes>
    </div>
  );
}
export default App;
