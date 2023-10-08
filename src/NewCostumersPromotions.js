import React, { useEffect, useState } from 'react';
import Promotion from './Promotion';

function NewCustomersPromotions() {
  const [newCustomersPromotions, setNewCustomersPromotions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://www.mocky.io/v2/5bc3b9cc30000012007586b7') 
      .then((response) => response.json())
      .then((data) => {
        const newCustomersPromos = data
          .filter((promotion) => promotion.onlyNewCustomers)
          .sort((a, b) => a.sequence - b.sequence);

        setNewCustomersPromotions(newCustomersPromos);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching new customer promotions:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {newCustomersPromotions.map((promotion) => (
        <Promotion key={promotion.id} promotion={promotion} />
      ))}
    </div>
  );
}

export default NewCustomersPromotions;
