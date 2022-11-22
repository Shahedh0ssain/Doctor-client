

import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Pages/Shared/Navbar/Navbar';
import Footer from './Pages/Footer/Footer';
import publicRoutes from './Routes/publicRoutes';
import privateRoutes from './Routes/privateRoutes';
import PrivateRoute from './Authentication/PrivateRoute';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyAppoinment from './Pages/Dashboard/MyAppoinment';
import MyReview from './Pages/Dashboard/MyReview';




function App() {

  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        {publicRoutes.map(({ path, Component }, index) => (
          <Route key={index} path={path} element={<Component />} />
        ))}
        {/* privateRoute */}
        <Route element={<PrivateRoute></PrivateRoute>}>
          {privateRoutes.map(({ path, Component }, index) => (
            <Route key={index} path={path} element={<Component />} />
          ))}
        </Route>
        <Route element={<PrivateRoute></PrivateRoute>}>
          <Route
            path="dashboard"
            element={<Dashboard />}>
            <Route index element={<MyAppoinment></MyAppoinment>}></Route>
            <Route path='review' element={<MyReview></MyReview>}></Route>
          </Route>

        </Route>
      {/* 
        <Route path='/dashboard' element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }>
          <Route index element={<MyAppoinment></MyAppoinment>}></Route>
          <Route path='review' element={<MyReview></MyReview>}></Route>
        </Route> */}

      </Routes>
      <ToastContainer />
      <Footer></Footer>

    </div>
  );
}

export default App;
