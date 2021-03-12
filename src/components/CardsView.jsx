import React from 'react'
import PropTypes from 'prop-types'
import ShopCard from './ShopCard'
import {products} from './product'

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

}

export default CardsView

