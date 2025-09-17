// FIX: Create the PastEntries component to display a list of saved journal entries.
import React from 'react';
import { type PastEntry } from '../types';

interface PastEntriesProps {
  entries: PastEntry[];
}

const PastEntries: React.FC<PastEntriesProps> = ({ entries }) => {
  if (entries.length === 0) {
    return (
      <section className="past-entries-section">
        <h2>Entradas Anteriores</h2>
        <p>Você ainda não tem nenhuma entrada. Escreva uma acima para começar!</p>
      </section>
    );
  }

  return (
    <section className="past-entries-section">
      <h2>Entradas Anteriores</h2>
      <ul className="entries-list">
        {entries.map(entry => (
          <li key={entry.id} className="entry-item">
            <div className="entry-header">
              <span className="entry-mood">{entry.feeling}</span>
              <span className="entry-date">{entry.date}</span>
            </div>
            <p className="entry-text">{entry.entryText}</p>
            <div className="entry-reflection">
              <strong>Reflexão da IA:</strong>
              <p>{entry.reflection.message}</p>
              <em>{entry.reflection.question}</em>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default PastEntries;
