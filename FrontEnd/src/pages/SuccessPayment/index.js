import React, { Component } from "react";

class SuccessPayment extends Component {
    render(){
        return(
            <div>
                <h1>Payment Successful</h1>
                <h1>After 5 Second Auto direct to Home Page, If not please Click on <a href="/">This</a></h1>
                {setTimeout("window.location.href = '/'", 5000)}
            </div>
        )
    }
}

export default SuccessPayment;