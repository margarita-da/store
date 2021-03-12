import React from 'react'
import PropTypes from 'prop-types'
import ShopItem from './ShopItem'

function ListView({products}) {
    return (
        products &&  products.map((item, i) =>  (
            <ShopItem 
                name = {item.name}
                price = {item.price}
                color={item.color}
                img={item.img}
                key={item.img + i}
            />
          ))
        )
}

ListView.propTypes = {

}

export default ListView

