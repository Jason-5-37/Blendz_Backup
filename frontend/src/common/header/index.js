import React, { Component } from "react";
import { HeaderWrapper, Logo, Nav, NavItem, Addition, Button } from './style';
import { connect } from 'react-redux'; 
import { actionCreators as loginActionCreators } from '../../pages/login/store/index';

class Header extends Component {    

    render() {
        const { login, logout} = this.props;
        return(
            <HeaderWrapper>
                <Logo href="/"/>
                <Nav>               
                    <div>Login as: {this.props.Currentuser}</div>
                    <NavItem href="about">About</NavItem>
                    <NavItem>|</NavItem>                                          
                    <NavItem href="help">Help</NavItem>
                    <NavItem>|</NavItem>                  
                    <NavItem href="/shop">Shop</NavItem>
                    <NavItem>|</NavItem>              
                    <NavItem href="/">Home</NavItem>    
                </Nav>
                <Addition>
                    <Button>Cart</Button>
                    {
                        login ? <Button onClick={logout} >Log out</Button> : <Button href="/login">Login</Button>
                    }
                </Addition>
            </HeaderWrapper>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        login: state.get('login').get('login'),
        Currentuser: state.getIn(['login','Currentuser'])
    }
}

const mapDispathToProprs = (dispatch) => {
    return{
        logout(){
            dispatch(loginActionCreators.log_out())
        },
        getUser(){
            dispatch(loginActionCreators.get_User())
        }
    }
}



export default connect(mapStateToProps, mapDispathToProprs)(Header);