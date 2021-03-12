import React from 'react'
import PropTypes from 'prop-types'

function IconSwitch({icon, onSwitch}) {
    return (
        <div
        onClick={onSwitch}
        className = {icon}
        >
           {icon}
        </div>
    )
}

IconSwitch.propTypes = {
    icon:PropTypes.string,
    onClick: PropTypes.func
}

export default IconSwitch

