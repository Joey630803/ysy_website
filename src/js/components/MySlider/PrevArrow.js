import React from 'react'
    class PrevArrow extends React.Component{
      constructor(props){
        super(props)
        this.state={
          Hover:false,
          imgSrc:'./src/images/home_icon_left_nor.png',
          imgSrcActive:'./src/images/home_icon_left_pressed.png'
        }
      }
      Hover(){
        const Hover=this.state.Hover
        this.setState({Hover:true})
      }
      Out(){
        const Hover=this.state.Hover
        this.setState({Hover:false})
      }
      render(){
        const {className, style, onClick} = this.props
        return (
          <div className="gotoPrev" onClick={onClick}
          onMouseOver={this.Hover.bind(this)}
          onMouseLeave={this.Out.bind(this)}>
            <img src={this.state.Hover?this.state.imgSrcActive:this.state.imgSrc}/>
          </div>
        )
      }
    }
    
export default PrevArrow