import React from 'react'
function PrevArrow(props) {
  const {className, style, onClick} = props
    return (

      <div className="gotoPrev" onClick={onClick}>
        <img src="./src/images/home_icon_left_nor.png"/>
      </div>

    )
}
export default PrevArrow