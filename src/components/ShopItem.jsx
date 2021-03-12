import React from 'react'
import PropTypes from 'prop-types'

function ShopItem({name,color,img,price}) {
    return (
        <div className="card-list" key={name+color}>
            <img className="card__image" src={img} alt="shooes"/>
            <div>{name}</div>
            <div className="card__small-font">{color}</div>
            <div className="card__color">${price} </div>
            <button className="card__color card__button">Add to card</button>
        </div>)
}

ShopItem.propTypes = {

}

export default ShopItem

