#!/bin/bash

# App.js の内容を置き換える
cat << 'EOT' > src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import ExpertiseSection from './components/ExpertiseSection';
import Skills from './components/Skills';
import RecentWork from './components/RecentWork';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Hero />
        <Routes>
          <Route path="/" element={
            <>
              <ExpertiseSection />
              <Skills />
              <RecentWork />
            </>
          } />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
EOT

echo "App.js has been updated successfully."
