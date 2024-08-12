import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ title, backgroundColor,hyper }) => {
   
  return (
    <Link to={`/assetsmaster/${hyper}`} className={`sm:w-48 m-2 h-20 bg-red-600 rounded-lg shadow-lg flex items-center justify-center text-white text-2xl font-bold`}>
     {title}
    </Link>
  );
};
export default Card;
