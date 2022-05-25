import React, { Component } from "react";
import { HeaderWrapper, Logo, Nav, NavItem } from './style';
import { Badge } from "@material-ui/core";
import { AccountCircle, ShoppingCartOutlined } from "@material-ui/icons";
import { connect } from 'react-redux';
import { actionCreators as loginActionCreators } from '../../pages/Login/store/index';
import { actionCreators as cartActionCreators } from '../../pages/Cart/store/index';

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
                    <Badge badgeContent={this.props.NumberofCartitem.size} color="primary">
                        <ShoppingCartOutlined />
                        </Badge>
                        </NavItem>
                        </Nav>
                        </HeaderWrapper>
            )
        }
    componentDidMount(){
        var storage=window.localStorage;
        var UID = storage.getItem("UID");
        this.props.getcartInfo(UID);
    }

    Islogin() {
        var storage=window.localStorage;
        var Islogin = storage.getItem("Islogin");
        var UID = storage.getItem("UID");

        if(Islogin === "Notlogin"){
            return(<NavItem href="/login"><AccountCircle /></NavItem>);
        }else if(Islogin === "login"){
            if(UID === "VsRZyRY71BennFQZOOnS04s876F2"){
                return(
                    <>
                    <NavItem href="/Administrators">Administrators</NavItem>
                    <NavItem href="/user"><AccountCircle /></NavItem>
                    </>
                )
            }else{
                return(<NavItem href="/user"><AccountCircle /></NavItem>);
            }
        }else{
            return(<NavItem href="/login"><AccountCircle /></NavItem>);
        }
    }
}

const mapStateToProps = (state) => {
    return {
        login: state.get('login').get('login'),
        NumberofCartitem: state.getIn(['cart', 'cartlist'])
    }
}

const mapDispathToProprs = (dispatch) => {
    return{
        logout(){
            dispatch(loginActionCreators.log_out())
        },
        getcartInfo(id){
            dispatch(cartActionCreators.getCart(id))
        }
    }
}

export default connect(mapStateToProps, mapDispathToProprs)(Header);