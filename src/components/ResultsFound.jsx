import React from 'react';
import '../assets/scss/pages/Jobs.scss';

export default function ResultsFound(props) {
  const { totalItems } = props;
  return (
    <div className="results-found">
      {totalItems > 0 ? (
        totalItems === 1 ? (
          <h4>Se encontró un resultado</h4>
        ) : (
          <span>
            Se encontraron <strong>{totalItems}</strong> avisos 🕵️‍
          </span>
        )
      ) : null}
    </div>
  );
}
