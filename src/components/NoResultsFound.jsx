import React from 'react';
import '../assets/scss/pages/Jobs.scss';

export default function NoResultsFound() {
  return (
    <div className="no-results-found">
      No se encontraron resultados{' '}
      <span role="img" aria-label="Sad Face">
        😢
      </span>{' '}
    </div>
  );
}
