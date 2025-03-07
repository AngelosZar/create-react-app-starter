import { useState, useEffect } from 'react';

export default function StarRating({
  defaultRating,
  maxRating = 5,
  color = '#fcc419',
  size = 42,
}) {
  const [rating, setRating] = useState(defaultRating);

  useEffect(() => {
    setRating(defaultRating);
  }, [defaultRating]);
  // const starNum = Number(rating);
  const fullStars = Math.floor(rating);
  const halfStars = rating % 1 !== 0;
  return (
    <div className=" flex center gap-2">
      <div className="flex">
        {Array.from({ length: rating }).map((_, index) => {
          // return <Star key={index} color={color} size={size} />;
          // return <HalfStar key={index} color={color} size={size} />;
          return <EmptyStar key={index} color={color} size={size} />;
        })}
        <HalfStar />
      </div>
    </div>
  );
}

function Star({ rating, color, size }) {
  const starStyle = {
    width: `${size}px`,
    height: `${size}px`,
    display: 'block',
  };
  return (
    <span style={starStyle}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill={color}
        stroke={color}
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    </span>
  );
}
function HalfStar({ color, size }) {
  const starStyle = {
    width: `${size}px`,
    height: `${size}px`,
    display: 'block',
    position: 'relative',
  };
  //
  return (
    <span style={starStyle}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="none"
        stroke={color}
        style={{ position: 'absolute' }}
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill={color}
        stroke={color}
        style={{ clipPath: 'polygon(0 0, 50% 0, 50% 100%, 0 100%)' }}
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    </span>
  );
}

function EmptyStar({ color, size }) {
  const starStyle = {
    width: `${size}px`,
    height: `${size}px`,
    display: 'block',
    position: 'relative',
  };
  return (
    <span style={starStyle}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="none"
        stroke={color}
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    </span>
  );
}
