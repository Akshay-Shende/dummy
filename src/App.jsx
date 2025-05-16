
import './App.css'
import Navbar from "./Components/HomepageComponents/Navbar";
import Footer from './Components/HomepageComponents/Footer';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Suspense, lazy } from 'react';

function App() {
const Men =  lazy(() => import("./Components/HomepageComponents/Men"));
const Women = lazy(() => import("./Components/HomepageComponents/Women"));
const Kids = lazy(() => import("./Components/HomepageComponents/Kids"));
const Beauty = lazy(()=> import("./Components/HomepageComponents/Beauty"));
const SignUp = lazy(()=> import("./Components/SignUp"));
const LogIn = lazy(()=> import("./Components/LogIn"));
const Home = lazy(() => import("./Components/HomepageComponents/Home"))
const ProductRegistration = lazy(()=> import("./Components/Staff/ProductRegistration"))
const ManufacturerRegistration = lazy(()=> import("./Components/Staff/ManufacturerRegistration"))

  return (
  <>
  <Router>

<Navbar/>
<Suspense fallback = {<h1>Loading 123...</h1>}>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/men" element={<Men />}/>
      <Route path="/women" element={<Women />}/>
      <Route path="/kids" element={<Kids />}/>
      <Route path="/beauty" element={<Beauty />}/>
      <Route path="/user-sign-up" element={<SignUp />}/>
      <Route path="/user-log-in" element={<LogIn />}/>
      <Route path="/product-registration" element={<ProductRegistration />}/>
      <Route path="/manufacturer-registration" element={<ManufacturerRegistration />}/>
    </Routes>
    <Footer/>
    </Suspense>
  </Router>
  </>
  )
}

export default App
