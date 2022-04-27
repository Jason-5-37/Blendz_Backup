import React, { Component } from "react";
import { HeaderWrapper, Logo, Nav, NavItem } from './style';
import { Badge } from "@material-ui/core";
import { AccountCircle, ShoppingCartOutlined } from "@material-ui/icons";
import { connect } from 'react-redux';
import { actionCreators as loginActionCreators } from '../../pages/Login/store/index';

class Header extends Component {
    render() {
        const { login, logout} = this.props;
        return (
        <HeaderWrapper>
            <Logo href="/" />
            <Nav>
                <NavItem href="/">HOME</NavItem>
                <NavItem href="/shop">SHOP</NavItem>
                <NavItem href="/help">HELP</NavItem>
                <NavItem href="/about">ABOUT</NavItem>
                {this.Islogin()}
                <NavItem href="/cart">
                    <Badge badgeContent={2} color="primary">
                        <ShoppingCartOutlined />
                        </Badge>
                        </NavItem>
                        </Nav>
                        </HeaderWrapper>
            )
        }

    Islogin() {
        var storage=window.localStorage;
        var Islogin = storage.getItem("Islogin");
        if(Islogin == 0){
            return(<NavItem href="/login"><AccountCircle /></NavItem>);
        }else if(Islogin == 1){
            return(<NavItem href="/user"><AccountCircle /></NavItem>);
        }else{
            return(<NavItem href="/login"><AccountCircle /></NavItem>);
        }
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

export default connect(mapStateToProps, mapDispathToProprs)(Header);