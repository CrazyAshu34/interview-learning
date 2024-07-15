import './App.css';
import { Routes, Route } from 'react-router';

import Header from "./component/dashboard/Header"
// import Footer from "./component/dashboard/Footer"

import Home from "./component/pages/Home"
import Comic from "./component/pages/Comic"
import Man from "./component/pages/Man"
import Women from "./component/pages/Women"
import Wishlist from "./component/pages/Wishlist"
import Addtocart from './component/pages/Addtocart';
import Productdetails from './component/pages/Productdetails';
function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/Comic' element={<Comic />}></Route>
        <Route path='/man' element={<Man />}></Route>
        <Route path='/women' element={<Women />}></Route>
        <Route path='/wishlist' element={<Wishlist />}></Route>
        <Route path='/Addtocart' element={<Addtocart />}></Route>
        <Route path='/product/:id' element={<Productdetails />}></Route>
        

      </Routes>
      {/* <Footer /> */}
    </>
  )
}

export default App
