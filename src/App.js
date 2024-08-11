import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ExpertiseSection from './components/ExpertiseSection';
import Skills from './components/Skills';
import RecentWork from './components/RecentWork';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <ExpertiseSection />
      <Skills />
      <RecentWork />
    </div>
  );
}

export default App;
