import React from 'react';

function Promotion({ promotion }) {
  return (
    <div className="promotion">
      <div className="image-container">
        <img src={promotion.heroImageUrl} alt={promotion.name} className="image" />
      </div>
      <div className="content-container">
        <h2>{promotion.name}</h2>
        <p className='description'>{promotion.description}</p>
        <div className="button-container">
          <button className="terms-button">{promotion.termsAndConditionsButtonText}</button>
          <button className="join-button">{promotion.joinNowButtonText}</button>
        </div>
      </div>
    </div>
  );
}

export default Promotion;
