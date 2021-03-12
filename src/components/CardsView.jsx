import React from 'react'
import PropTypes from 'prop-types'
import ShopCard from './ShopCard'

function CardsView({products}) {
    return (
        products &&  products.map((item) =>  (
        <ShopCard 
            name = {item.name}
            price = {item.price}
            color={item.color}
            img={item.img}
            key={item.img+item.price}
            />
      ))
    )
    }

CardsView.propTypes = {
    products:PropTypes.shape({
        name: PropTypes.string,
        price:PropTypes.string,
        color:PropTypes.string,
        img:PropTypes.string
    })
}

export default CardsView

