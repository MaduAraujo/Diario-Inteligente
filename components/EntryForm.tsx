import React, { useState } from 'react';
import { getReflection } from '../services/geminiService';
import Modal from './Modal';
import { LoadingIcon, SparklesIcon } from './Icons';
import { type ReflectionResponse } from '../types';


const EntryForm: React.FC = () => {
  const [entryText, setEntryText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [reflection, setReflection] = useState<ReflectionResponse | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!entryText.trim()) {
      setError("Por favor, escreva algo sobre o seu dia.");
      return;
    }
    setIsLoading(true);
    setError(null);
    try {
      const reflectionResult = await getReflection(entryText);
      setReflection(reflectionResult);
      
    } catch (err) {
      setError("Não foi possível obter uma reflexão. Por favor, tente novamente.");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const closeModal = () => {
    setReflection(null);
    setEntryText('');
  };

  return (
    <section className="bg-white p-6 sm:p-8 rounded-xl shadow-lg">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="diary-entry" className="block text-lg font-medium text-gray-800 mb-2">
            Como foi o seu dia?
          </label>
          <textarea
            id="diary-entry"
            value={entryText}
            onChange={(e) => setEntryText(e.target.value)}
            placeholder="Querido diário..."
            rows={10}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200 bg-white text-gray-900"
            disabled={isLoading}
          />
        </div>
        
        <button 
          type="submit" 
          disabled={isLoading || !entryText.trim()}
          className="w-full flex items-center justify-center bg-indigo-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-indigo-700 disabled:bg-indigo-400 disabled:cursor-not-allowed transition-all duration-200 transform hover:scale-105"
        >
          {isLoading ? (
            <>
              <LoadingIcon className="h-5 w-5 text-white" /> 
              <span className="ml-2">Refletindo...</span>
            </>
          ) : (
            'Refletir'
          )}
        </button>

        {error && <p className="text-red-600 mt-4 text-center">{error}</p>}
      </form>
      
      {reflection && (
        <Modal onClose={closeModal}>
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 text-indigo-500">
                <SparklesIcon className="h-12 w-12" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Reflexão</h3>
            
            <div className="w-full bg-gray-50 p-5 rounded-lg text-left space-y-4 border border-gray-200">
                <blockquote className="border-l-4 border-indigo-500 pl-4">
                    <p className="text-gray-700 italic leading-relaxed">"{reflection.message}"</p>
                </blockquote>
                
                <p className="font-semibold text-gray-800 pt-2">{reflection.question}</p>
            </div>
            
            <button 
              onClick={closeModal}
              className="mt-8 w-full bg-indigo-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-indigo-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Fechar
            </button>
          </div>
        </Modal>
      )}
    </section>
  );
};

export default EntryForm;