import React from 'react';

const cardStyle = {
  width: '300px',
  border: '1px solid #ccc',
  borderRadius: '12px',
  overflow: 'hidden',
  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  fontFamily: 'sans-serif'
};

const imgStyle = {
  width: '100%',
  height: '200px',
  objectFit: 'cover'
};

const contentStyle = {
  padding: '15px'
};

const DestinationCard = ({ data }) => {
  return (
    <div style={cardStyle}>
      <img src={data.image} alt={data.name} style={imgStyle} />
      <div style={contentStyle}>
        <h2>{data.name}</h2>
        <h4>{data.location}</h4>
        <p>{data.description}</p>
        <strong>{data.price}</strong>
      </div>
    </div>
  );
};

export default DestinationCard;
