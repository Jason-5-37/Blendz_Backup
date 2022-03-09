import React, { Component } from "react";
import { FooterImage, FooterNav, FooterNavItem, FooterWrapper, FooterInfo} from "./style";

class Footer extends Component {
    render(){
        return(
            <FooterWrapper>
                <FooterNav>
                    <FooterNavItem href="/">Home</FooterNavItem>
                    <FooterNavItem>|</FooterNavItem> 
                    <FooterNavItem href="/shop">Shop</FooterNavItem>
                    <FooterNavItem>|</FooterNavItem> 
                    <FooterNavItem href="/help">Help</FooterNavItem>
                    <FooterNavItem>|</FooterNavItem> 
                    <FooterNavItem href="/about">About</FooterNavItem>                    
                </FooterNav>
                <FooterImage/>
                <FooterInfo>
                    Contact:022022222 &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Address:55d ssdadsa
                </FooterInfo>
            </FooterWrapper>
        )
    }
}

export default Footer;