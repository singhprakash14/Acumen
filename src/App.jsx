import React, { useState } from 'react';
import './App.css';
import SearchBar from './components/pages/SearchBar';
import Gallery from './components/pages/Gallery';
import fetchPictures from './components/pages/Search';

const App = () => {
  const [pictures, setPictures] = useState([]);

  const handleSearch = async (category) => {
    const fetchedPictures = await fetchPictures(category);
    setPictures(fetchedPictures);
  };

  return (
    <div className="app">  
    
    <h1>Picture Gallery Application</h1>
      <SearchBar onSearch={handleSearch} />
      <Gallery pictures={pictures} />
    </div>
  );
};

export default App;
