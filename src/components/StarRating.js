import { useState, useEffect } from 'react';

export default function StarRating({ defaultRating }) {
  const [rating, setRating] = useState('');

  useEffect(() => {
    console.log(rating);
    setRating(defaultRating);
  }, [rating, defaultRating]);

  return (
    <div>
      <h1>{defaultRating}</h1>
    </div>
  );
}
