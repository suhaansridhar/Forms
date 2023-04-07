import React from 'react';

const Cards = (props) => {
  return (
    <div>
        <h4>{props.Data.firstName}</h4>
        <h4>{props.Data.lastName}</h4>
        <h4>{props.Data.age}</h4>
        <h4>{props.Data.email}</h4>
        <h4>{props.Data.isFriendly}</h4>
        <h4>{props.Data.color}</h4>
    </div>
  )
}

export default Cards