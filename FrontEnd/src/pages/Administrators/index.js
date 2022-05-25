import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Wrapper, Title, Button} from "./style";

class Administrators extends Component {
    render(){
        var storage=window.localStorage;
        var UID = storage.getItem("UID");
        if(UID === "VsRZyRY71BennFQZOOnS04s876F2"){
            return(
                <Wrapper>
                    <Title>Administrators</Title>
                    <Button  onClick={() => window.location.href = '/Administrators/ManageProduct'}>Manage Product</Button>
                    <Button  onClick={() => window.location.href = '/Administrators/ManageUser'}>Check Request</Button>
                    <Button  onClick={() => window.location.href = '/Administrators/ManageAllUser'}>Check All Order</Button>
                </Wrapper>
            )
        }else{
            return <Redirect to='/'/>
        }
    }
}

export default Administrators;