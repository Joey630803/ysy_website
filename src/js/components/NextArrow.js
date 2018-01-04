import React from 'react'
function NextArrow(props) {
    const {className, style, onClick} = props
    return (
      <div className="gotoNext" onClick={onClick}>
        <img src="./src/images/right.png"/>
      </div>
    )
}

export default NextArrow