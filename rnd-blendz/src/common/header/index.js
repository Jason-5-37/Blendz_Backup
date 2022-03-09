import React, { Component } from "react";
import { HeaderWrapper, Logo, Nav, NavItem, Addition, Button } from './style';
import { connect } from 'react-redux'; 
import { actionCreators } from './store';
import { actionCreators as loginActionCreators } from '../../pages/login/store/all.js';

class Header extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        const { login, logout} = this.props;
        return(
            <HeaderWrapper>
                <Logo href="/"/>
                <Nav>                        
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
        focused: state.get('header').get('focused'),
        login: state.get('login').get('login')
    }
}

const mapDispathToProprs = (dispatch) => {
    return{
        logout(){
            dispatch(loginActionCreators.logout())
        }
    }
}



export default connect(mapStateToProps, mapDispathToProprs)(Header);