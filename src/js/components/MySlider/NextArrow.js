import React from 'react'
class NextArrow extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    const {className, style, onClick} = this.props
    return (
      <div className="gotoNext" onClick={onClick}>
        <img src="./src/images/home_icon_right_nor.png"/>
      </div>
    )
  }
}

export default NextArrow