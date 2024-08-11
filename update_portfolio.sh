#!/bin/bash

# Update App.js to ensure correct routing and component rendering
cat << 'EOT' > src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import ExpertiseSection from './components/ExpertiseSection';
import Skills from './components/Skills';
import RecentWork from './components/RecentWork';
import CurriculumVitae from './components/CurriculumVitae';

function App() {
  return (
    <Router>
      <div className="App">
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
          <Route path="/cv" element={<CurriculumVitae />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
EOT

# Update CurriculumVitae.js to ensure it's exporting correctly
sed -i '' '1i\
import React from '\''react'\'';
' src/components/CurriculumVitae.js

# Add a console.log to CurriculumVitae component for debugging
sed -i '' '/const CurriculumVitae = () => {/a\
  console.log('\''CurriculumVitae component rendered'\'');
' src/components/CurriculumVitae.js

# Update ExpertiseSection.js to use Link from react-router-dom
sed -i '' '1i\
import { Link } from '\''react-router-dom'\'';
' src/components/ExpertiseSection.js
sed -i '' 's|<a href="/cv"|<Link to="/cv"|' src/components/ExpertiseSection.js
sed -i '' 's|</a>|</Link>|' src/components/ExpertiseSection.js

# Update Header.js to use NavLink from react-router-dom for active link styling
sed -i '' '1i\
import { NavLink } from '\''react-router-dom'\'';
' src/components/Header.js
sed -i '' 's|<a|<NavLink|g' src/components/Header.js
sed -i '' 's|</a>|</NavLink>|g' src/components/Header.js

# Rebuild Tailwind CSS
npm run build:css

echo "Portfolio update complete. Please run 'npm start' to see the changes."
