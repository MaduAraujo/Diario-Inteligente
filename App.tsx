import React from 'react';
import EntryForm from './components/EntryForm';

const App: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen font-sans text-gray-800 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        <header className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Diário <span className="text-indigo-600">Inteligente</span>
          </h1>
          <p className="text-gray-600 mt-2 text-lg">
            Reflita, Aprenda e Evolua.
          </p>
        </header>
        <main>
          <EntryForm />
        </main>
      </div>
    </div>
  );
};

export default App;