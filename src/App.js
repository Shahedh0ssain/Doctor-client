

import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Pages/Shared/Navbar/Navbar';
import Footer from './Pages/Footer/Footer';
import publicRoutes from './Routes/publicRoutes';
import privateRoutes from './Routes/privateRoutes';
import PrivateRoute from './Authentication/PrivateRoute';



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
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
