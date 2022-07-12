import logo from './logo.svg';
import './App.css';
import MyAppBar from './commponents/appBar/MyAppBar';
import { Box, Container } from '@mui/material';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import HomeScreen from './screens/home/HomeScreen';
import LoginScreen from './screens/login/LoginScreen';
import StudentScreen from './screens/student/StudentScreen';
import CoursScreen from './screens/cours/CoursScreen';
import RegisterScreen from './screens/register/RegisterScreen';
import TeacherScreen from './screens/teacher/TeacherScreen';
function App() {
  return (
    <>
      <BrowserRouter>
        <MyAppBar />
        <Container>
          <Box>
            <Routes>
              <Route path='/' element={<HomeScreen />} />
              <Route path='/student' element={<StudentScreen />} />
              <Route path='/cours' element={<CoursScreen />} />
              <Route path='/register' element={<RegisterScreen />} />
              <Route path='/teacher' element={<TeacherScreen />} />
              <Route path='/login' element={<LoginScreen />} />
            </Routes>
          </Box>
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
