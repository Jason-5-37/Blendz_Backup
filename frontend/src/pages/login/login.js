import React, { PureComponent } from "react";
import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button, Input, LoginBox, LoginWrapper, Content, RegisterWrapper, Register } from './style';
import { actionCreators } from './store/all.js';

class Login extends PureComponent {
    render(){
        const { loginStatus } = this.props;

        if (!loginStatus) {
            return(
                <LoginWrapper>
                    <LoginBox>
                        <Content className="Title">Blendz Login</Content>
                        <Content className="STitle">Account:</Content>
                        <Input placeholder="Account" ref={(input) => {this.account = input}}/>
                        <Content className="STitle">Password:</Content>
                        <Input placeholder="Password" type='password' ref={(input) => {this.password = input}}/>
                        <Button onClick={() => this.props.login(this.account, this.password)}>Login</Button>
                        <RegisterWrapper><Register href="/register">Register</Register></RegisterWrapper>
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
})

const mapDispatch = (dispatch) => ({
    login(accountElem, passwordELEM){
        dispatch(actionCreators.login(accountElem.value, passwordELEM.value));
    }
});

export default connect(mapState, mapDispatch)(Login);