import React from 'react';
const Card = ({ title, description, image }) => {
    return (
        <div className="card">
            <div className='card-head'>
                <img src={require(`../../assets/Cards/${image}`)} alt="Card Icon" className="card-icon" />
                <h3 className="card-title">{title}</h3>
            </div>
            <p className="card-description">{description}</p>
        </div>
    );
};

export default Card;
