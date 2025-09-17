// FIX: Create the Insights component to display AI-generated insights.
import React from 'react';
import { LoadingIcon, RefreshIcon } from './Icons';

interface InsightsProps {
  insights: string[];
  isLoading: boolean;
  error: string | null;
  onGenerate: () => void;
  canGenerate: boolean;
}

const Insights: React.FC<InsightsProps> = ({ insights, isLoading, error, onGenerate, canGenerate }) => {
  return (
    <aside className="insights-aside">
      <div className="insights-header">
        <h2>Seus Insights</h2>
        <button onClick={onGenerate} disabled={isLoading || !canGenerate} title="Gerar novos insights">
          <RefreshIcon />
        </button>
      </div>
      
      {isLoading && (
        <div className="loading-container">
          <LoadingIcon />
          <p>Analisando suas entradas...</p>
        </div>
      )}

      {error && <p className="error-message">{error}</p>}

      {!isLoading && !error && insights.length > 0 && (
        <ul>
          {insights.map((insight, index) => (
            <li key={index}>{insight}</li>
          ))}
        </ul>
      )}

      {!isLoading && !error && insights.length === 0 && canGenerate && (
        <p>Clique no botão de atualização para gerar insights de suas entradas.</p>
      )}

      {!isLoading && !canGenerate && (
         <p>Escreva pelo menos 3 entradas no diário para gerar insights.</p>
      )}

    </aside>
  );
};

export default Insights;
