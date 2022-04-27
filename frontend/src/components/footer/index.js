import React, { Component } from "react";
import { FooterNav, FooterNavItem, FooterWrapper, FooterInfo, FooterInfoItem, Copyright } from "./style";

class Footer extends Component {
    render() {
        return (
            <FooterWrapper>
                <FooterNav>
                    <FooterNavItem href="/">Home</FooterNavItem>
                    <FooterNavItem href="/shop">Shop</FooterNavItem>
                    <FooterNavItem href="/help">Help</FooterNavItem>
                    <FooterNavItem href="/about">About</FooterNavItem>
                </FooterNav>

                <FooterInfo>
                    <FooterInfoItem>
                        Address: 
                        282 Fordyce Road
                        Helensville
                        Auckland 0874
                    </FooterInfoItem>
                    <FooterInfoItem>
                        Contact: 0800 2 MIX IT (0800 264 948)
                    </FooterInfoItem>
                    <FooterInfoItem>
                        Email: &nbsp; <a href="mailto:info&#64;blendz&#46;co&#46;nz">info&#64;blendz&#46;co&#46;nz</a>
                    </FooterInfoItem>
                    <FooterInfoItem>
                        Opening Hours: Monday-Friday 8:30am - 5:00pm
                    </FooterInfoItem>
                    <Copyright>Copyright &copy; Blendz All rights reserved.</Copyright>
                </FooterInfo>

            </FooterWrapper>
        )
    }
}

export default Footer;