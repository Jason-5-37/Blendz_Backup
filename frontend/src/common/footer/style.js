import styled from "styled-components";
import FooterlogoPic from '../../statics/FooterLogo.png'

export const FooterWrapper = styled.div`
    z-index: 1;
    position absolute;
    height: 10%;
    bottom:0;
    left:0;
    right:0;
`;

export const FooterNav = styled.div `
    height: 10%;
    padding: 0 5%;
    text-align: center;
    margin: 1% auto;
    
`;

export const FooterNavItem = styled.a`
    color: grey;
    padding: 0 1%;
    text-decoration : none ;
`;

export const FooterImage = styled.div`
    margin: auto;
    width: 5%;
    height: 25%;
    background: url(${FooterlogoPic});    
    background-size: contain;
    background-repeat: no-repeat;

`;

export const FooterInfo = styled.div`
    text-align: center;
    margin:auto;
    color: grey;
`;

