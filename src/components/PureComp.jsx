import React, { PureComponent } from 'react'

export default class PureComp extends PureComponent {
    constructor(props) {
      super(props)
    
      this.state = {
         name:"Bittu"
      }
    }
     changeName=()=>{
        this.setState({name:"Pitambar"})
    }
  render() {
   
    return (
      <div>
        <h3>{this.state.name}</h3>
        <button  onClick={()=>this.changeName()}>Click Me</button>
      </div>
    )
  }
}
