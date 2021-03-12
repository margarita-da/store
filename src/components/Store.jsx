import React, {useState} from 'react'
import IconSwitch from './IconSwitch'
import CardsView from './CardsView'
import {products} from "./product"
import ListView from './ListView'

function Store() {
    const [view, setView] = useState(true)
    const toggleView = ()=>{
        setView(!view)
    }
    return (
        <>
            <IconSwitch
                icon={view ? "material-icons view_list": "material-icons view_module"} 
                onSwitch={toggleView}
            />
            {
                <div className={view? "list" : "flex flex-center"}> {view ? <ListView products={products}/> : <CardsView  products={products}/> }</div>
            }
        </>
    )
}


export default Store

