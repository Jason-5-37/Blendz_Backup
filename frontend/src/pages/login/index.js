import React, { Component } from "react";
import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button, Input, LoginBox, LoginWrapper, Content, RegisterWrapper, Register } from './style';
import { actionCreators } from './store/index';

class Login extends Component {
    render(){
        const { loginStatus } = this.props;
        
        if (!loginStatus) {
            return(
                <LoginWrapper>
                    <LoginBox>
                        <Content className="Title">Blendz Login</Content>
                        <Content className="STitle">Email:</Content>
                        <Input placeholder="Email" ref={(input) => {this.email = input}}/>
                        <Content className="STitle">Password:</Content>
                        <Input placeholder="Password" type='password' ref={(input) => {this.password = input}}/>
                        <Button onClick={() => this.props.login(this.email, this.password)}>Login</Button>
                        <RegisterWrapper><Register href="/register">Register</Register></RegisterWrapper>
                        <RegisterWrapper><Register href="/resetpassword">forget password</Register></RegisterWrapper>
                    </LoginBox>
                </LoginWrapper>    
            )
        }else{
            return <Navigate to='/'/>
        }
    }
}

const mapState = (state) => ({
    loginStatus: state.get('login').get('login')
});

const mapDispatch = (dispatch) => ({
    login(emailElem, passwordELEM){
        dispatch(actionCreators.log_in(emailElem.value, passwordELEM.value));
    }
});

export default connect(mapState, mapDispatch)(Login);