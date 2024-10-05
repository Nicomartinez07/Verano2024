// app/page.tsx
"use client"; // Add this line at the top of the file

import React, { useState } from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

// Your component code follows...

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div>
      <Header onSearch={setSearchTerm} />
      <MainContent searchTerm={searchTerm} />
      <Footer/>
    </div>
  );
};

export default App;
