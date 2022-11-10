import Home from '../Pages/Home/Home';
import About from '../Pages/About/About';
import Appointment from '../Pages/Appointment/Appointment';
import Login from '../Pages/Login/Login'
import Registration from '../Pages/Shared/GoogleLogIn/Registration';
// import Home from '../Pages'

 const publicRoutes = [
    { path: "/", name: "Home", Component: Home },
    { path: "/login", name: "login", Component: Login },
    { path: "/registration", name: "Registration", Component: Registration },
    { path: "/about", name: "About", Component: About },
   
  ];

  export default publicRoutes;

//   <Route path="/"element={<Home></Home>} />
//   <Route path="/appoinment"element={<appoinment></Appointment>} />
//   <Route path="/"element={<About></About>} />
//   <Route path="/login"element={<login></Login>} />
//   <Route path="/registration"element={<Registration></Registration>} />