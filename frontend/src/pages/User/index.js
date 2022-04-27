import React, { Component } from "react";
import { connect } from 'react-redux';
import { actionCreators as loginActionCreators } from '../../pages/Login/store/index';
import { Button, ProfileTitle } from "./style";

class User extends Component {
    render(){
        return(
            <div>
            <ProfileTitle>Welcome to your profiles </ProfileTitle>
            <Button onClick={() => this.props.logout()}>Logout</Button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        login: state.get('login').get('login')
    }
}

const mapDispathToProprs = (dispatch) => {
    return{
        logout(){
            dispatch(loginActionCreators.log_out())
        }
    }
}

export default connect(mapStateToProps, mapDispathToProprs)(User);