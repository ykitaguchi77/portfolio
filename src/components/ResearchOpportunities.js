import React from 'react';
import { Mail } from 'lucide-react';

const ResearchOpportunities = () => (
  <div className="space-y-4 bg-purple-50 p-6 rounded-lg mt-8 border-2 border-purple-200">
    <h3 className="text-2xl font-semibold mb-4 flex items-center text-purple-700">
      <Mail className="mr-3" size={24} />
      Research Opportunities
    </h3>
    <p className="text-lg text-gray-800">We accept joint research and contract-based custom software development.</p>
    <p className="text-lg text-gray-800">
      If you have any enquiries, please{' '}
      <span className="inline-block bg-blue-100 px-2 py-1 rounded">
        <a 
          href="https://docs.google.com/forms/d/e/1FAIpQLScwhdc8wNyHJXG4UzGflXiJoIzmz5jGXGQfZ4HVUyS5T5f-ww/viewform?usp=sf_link" 
          className="text-blue-500 hover:underline font-medium text-xl"
        >
          click here
        </a>
      </span>.
    </p>
  </div>
);

export default ResearchOpportunities;
