import React, { Component } from "react";
import ErrorImage from '../../assets/404.png';
import { Image, Message } from "./style";

class NotFound extends Component {
    render(){
        return(
            <div>
                <Image src={ErrorImage} alt=""></Image>
                <Message>Page not found. Go back to <a href="/">homepage</a></Message>
            </div>

        )
    }
}

export default NotFound;