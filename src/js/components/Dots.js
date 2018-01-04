import React from 'react'
function Dots(props) {
    const {className, style, onClick} = props
    return (
      <div className="Dots" onClick={onClick}>
        <img src="./src/images/right.png"/>
      </div>
    )
}

export default Dots