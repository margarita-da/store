import React from 'react'
import PropTypes from 'prop-types'

function ShopCard({name,color,img,price}) {
    return (
        <div className="card" key={img+name+price}>
            <div>{name}</div>
            <div className="card__small-font">{color}</div>
            <img className="card__image" src={img} alt="shooes"/>
            <div className="flex">
                <div className="card__color">${price} </div>
                <button className="card__color card__button">Add to card</button>
            </div>
        </div>)
    
}

ShopCard.propTypes = {
    name: PropTypes.string,
    price:PropTypes.string,
    color:PropTypes.string,
    img:PropTypes.string
}

export default ShopCard

