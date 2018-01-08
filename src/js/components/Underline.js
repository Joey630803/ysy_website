import React, { Component } from 'react'

class Underline extends Component{
    constructor(props){
        super(props)
        this.state={
        }
    }

    render(){
      return (
        <div className="Underline">
          {this.props.MyText}
        </div>
      )

    }
}

export default Underline;