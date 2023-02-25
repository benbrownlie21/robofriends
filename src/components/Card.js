import React from 'react';

const Card = ({name, email, id, phone}) => {
    return (
        <div className='tc bg-washed-red dib br4 pa3 ma2 grow be2 shadow-5'>
            <img alt='robots' src={`https://robohash.org/${id}?200x200`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;