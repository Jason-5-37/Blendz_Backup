import React, { Component } from "react";
import { RegisterBox, RegisterWrapper, Content, Input, Button } from './style';
import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { actionCreators } from './store/index';

class Register extends Component {
    render(){
        const { loginStatus } = this.props;

        if(!loginStatus) {
            return(
                <RegisterWrapper>
                    <RegisterBox>
                        <Content className="Title">Blendz Register</Content>
                        <Content className="STitle">Please enter your email:</Content>
                        <Input placeholder="Email" ref={(input) => {this.email = input}}/>
                        <Content className="STitle">Please enter your Password:</Content>
                        <Input placeholder="New Password" type='password' ref={(input) => {this.newpassword = input}}/>
                        <Button onClick={() => this.props.register(this.email, this.newpassword)}>Create Account</Button>                    
                    </RegisterBox>
                </RegisterWrapper>
            )
        }else{
            return <Navigate to='/'/>
        }
    }
}

const mapState = (state) => ({
    loginStatus: state.get('login').get('login')
})

const mapDispatch = (dispatch) => ({
    register(emailElem, newpasswordElem){
        dispatch(actionCreators.register(emailElem.value,newpasswordElem.value));
    }
});

export default connect(mapState, mapDispatch)(Register);