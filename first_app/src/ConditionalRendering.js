import React, { Component } from 'react'

class ConditionalRendering extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: false
      }
    }
    // render() {
        // if (this.state.isLoggedIn) {
        //     return <div>Welcome Mojjam</div>
        // } else {
        // return <div>Welcome Guest</div>
        // }

        // render() {

        //     let message
        //     if (this.state.isLoggedIn) {
        //         message = <div>Welcome Mojjam</div>
        //     } else {
        //         message = <div>Welcome Guest</div>
        //     }

        //     return(
        //         <div>{message}</div>
        //     )
        // }

        // render() {
        //     return (
        //         this.state.isLoggedIn ?
        //         <div>Welcome Mojjam</div> :
        //         <div>Welcome Guest</div>
        //     )
        // }

        render() {
            return this.state.isLoggedIn && <div>Welcome Mojjam</div>
        }
}


export default ConditionalRendering

// Ways of conditional rendering
// 1 - if/else
// 2 - Element Variable
// 3 - Tenary conditional operator
// 4 - Short circuit operator