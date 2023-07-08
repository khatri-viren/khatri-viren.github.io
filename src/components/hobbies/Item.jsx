import React from 'react'

const Item = (props) => {
  return (
    <div className="hobbies__card">
        <img src={props.img} alt="" className="hobbies__img" />
        <h3 className="hobbies__title">{props.name}</h3>
    </div>
  )
}

export default Item