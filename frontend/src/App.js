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

function App() {
  // Use state to bring in the data
  const [editedActivity, setEditedActivity] = useState();
  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
          <h1>
            Tongxin Sun
            <span className='logo-span'><img src={logo} className="App-logo" alt="logo" /></span>
          </h1>
        </header>
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
        <footer>
          <p>&copy; 2023 Tongxin Sun</p>
        </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
