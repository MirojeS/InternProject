import React, { useEffect, useState } from 'react';
import Promotion from './Promotion';

function AllPromotions() {
  const [promotions, setPromotions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://www.mocky.io/v2/5bc3b9cc30000012007586b7') 
      .then((response) => response.json())
      .then((data) => {
        setPromotions(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching promotions:', error);
        setLoading(false);
      });
      
  }, []);
  

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {promotions.map((promotion) => (
        <Promotion key={promotion.id} promotion={promotion} className="fade-in" />
      ))}
    </div>
  );
}

export default AllPromotions;
