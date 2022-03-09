import styled from "styled-components";
import FooterlogoPic from '../../statics/FooterLogo.png'

export const FooterWrapper = styled.div`
    z-index: 1;
    position absolute;
    height: 100px;
    bottom:0;
    left:0;
    right:0;
`;

export const FooterNav = styled.div `
    width: 500px;
    height: 25px;
    padding: 0 50px;
    text-align: center;
    margin: 10px auto;
    
`;

export const FooterNavItem = styled.a`
    color: grey;
    padding: 0 25px;
    text-decoration : none ;
`;

export const FooterImage = styled.div`
    margin: 10px auto;
    width: 80px;
    height: 20px;
    background: url(${FooterlogoPic});
`;

export const FooterInfo = styled.div`
    text-align: center;
    margin: 10px auto;
    color: grey;
`;

