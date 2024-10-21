import React from 'react';
import MosaicLayout from './components/Mosaic';

const App: React.FC = () => {
  return (
      <div className="min-h-screen bg-gray-100 p-4">
        <header className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Company Dashboard</h1>
          <p className="text-gray-600 text-sm">Select a company from the dropdown to view information</p>
        </header>
        <main className="container mx-auto">
          <MosaicLayout />
        </main>
      </div>
  );
};

export default App;
