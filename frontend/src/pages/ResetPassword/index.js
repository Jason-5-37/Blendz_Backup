import React, { Component } from "react";
import { ResetWrapper, ResetBox, Content, Input, Button } from './style';
import { connect } from 'react-redux';
import { actionCreators as ActionCreators3 } from '../login/store/index';

class ResetPassword extends Component {
    render(){
            return(
                <ResetWrapper>
                    <ResetBox>
                        <Content className="Title">Reset Your Password</Content>
                        <Content className="STitle">Email:</Content>
                        <Input placeholder="Email" ref={(input) => {this.email = input}}/>
                        <Button onClick={() => this.props.ResetPassword(this.email)}>Send</Button>
                    </ResetBox>
                </ResetWrapper>    
            )
        }
}

const mapState = (state) => ({
    loginStatus: state.getIn(['login','login'])
})

const mapDispatch = (dispatch) => ({
    ResetPassword(emailElem){
        dispatch(ActionCreators3.Reset_Password(emailElem.value));
    }
});


export default connect(mapState, mapDispatch)(ResetPassword);