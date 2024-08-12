import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import ExpertiseSection from './components/ExpertiseSection';
import Skills from './components/Skills';
import RecentWork from './components/RecentWork';
import ProjectPage from './pages/ProjectPage';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <ExpertiseSection />
            <Skills />
            <RecentWork />
          </>
        } />
        <Route path="/project/:id" element={<ProjectPage />} />
      </Routes>
    </div>
  );
}

export default App;