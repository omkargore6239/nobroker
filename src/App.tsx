import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Video from './pages/index/video';
import SinglePropertyOne from './pages/property/single-property-1';
import ListLayoutTwo from './pages/property/list-layout-two';
import AboutUs from './pages/about-us';
import Contact from './pages/contact';
import SubmitProperty from './pages/property/submit-property';
import ScrollToTop from './components/scroll-to-top';

function App() {
  return (
    <>
      <Routes>
        {/* Main Video Theme */}
        <Route path='/' element={<Navigate to="/video" replace />} />
        <Route path='/video' element={<Video/>}/>
        
        {/* Property Pages */}
        <Route path='/single-property-1/:id' element={<SinglePropertyOne/>}/>
        <Route path='/list-layout-two' element={<ListLayoutTwo/>}/>
        <Route path='/submit-property' element={<SubmitProperty/>}/>
        
        {/* Additional Pages */}
        <Route path='/about-us' element={<AboutUs/>}/>
        <Route path='/contact' element={<Contact/>}/>
        
        {/* Redirect all other routes to video */}
        <Route path='*' element={<Navigate to="/video" replace />} />

        
        <Route path='/single-property-1' element={<SinglePropertyOne/>}/>
      </Routes>
      <ScrollToTop/>
    </>
  );
}

export default App;