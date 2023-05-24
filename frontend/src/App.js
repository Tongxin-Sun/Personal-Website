import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import products from './data/products';
import Nav from './components/Nav.js';
import HomePage from './pages/HomePage.js';
import GalleryPage from './pages/GalleryPage.js';
import StaffPage from './pages/StaffPage.js';
import OrderPage from './pages/OrderPage.js';
/*import ContactPage from './pages/ContactPage.js';*/
import ActivityPage from './pages/ActivityPage';
import CreateActivity from './pages/CreateActivity';
import EditActivity from './pages/EditActivity';
import TopicsPage from './pages/TopicsPage';
import { BsLinkedin } from "react-icons/bs";

function App() {
  // Use state to bring in the data
  const [editedActivity, setEditedActivity] = useState();
  return (
    <div className="App">
    <BrowserRouter>
        <Nav/>
        <main>
          <section>
            <Routes>
              <Route path='/' element={<HomePage/>}/>
              <Route path='/log' element={<ActivityPage setEditedActivity={setEditedActivity}/>}/>
              <Route path='/add-activity' element={<CreateActivity/>}/>
              <Route path='topics' element={<TopicsPage/>}/>
              <Route path='/edit-activity' element={<EditActivity editedActivity={editedActivity}/>}/>
              <Route path='/gallery' element={<GalleryPage/>}/>
              <Route path='/order' element={<OrderPage products={products}/>}/>
              <Route path='/staff' element={<StaffPage/>}/>
            </Routes>
          </section>
        </main>
        <div class="area" >
          <ul class="circles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div >
        <footer>
          <p>&copy; 2023 Tongxin Sun</p>
          <p>Email: tongxinsun16@gmail.com</p>
          <p>Tel: 6502356613</p>
          <BsLinkedin size={30} onClick={() => window.open('https://www.linkedin.com/in/tongxin-sun-695972102/')} onMouseOver={({target})=>target.style.cursor="pointer"} style={{padding: '1vw'}}/>
        </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
