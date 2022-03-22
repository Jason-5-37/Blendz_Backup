import styled from "styled-components";
import logoPic from '../../statics/BlendzLogo.png'

export const HeaderWrapper = styled.div`
    z-index: 1;
    position absolute;
    height: 10%;
    top:0;
    left:0;
    right:0;
    background: #FF9900;
    border-bottom: 2px solid #7B7776;
`;

export const Logo = styled.a`
    position: absolute;
    left: 0;
    display: block;
    width: 20%;
    height: 100%;
    background: url(${logoPic});
    background-size: 100% 100%;
    background-repeat: no-repeat;
`;

export const Nav = styled.div`
    height: 100%;
    width: 50%;
    top: 0;
    margin: 0 auto;
`;

export const NavItem = styled.a`
    line-height: 500%;
    padding: 0 2%;
    font-size: 130%;
    float: right;
    color: #FDFEFE;
    text-decoration : none ;
`;

export const Addition = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    width: 25%;

`;

export const Button = styled.a`
    float: right;
    color: #FDFEFE;
    background: #A0A0A0  ;
    margin-top: 5%;
    margin-right: 20%;
    padding: 0 7%;
    line-height:300%;
    border-radius: 7%;
    border: 1px solid #9EA482;
    text-decoration : none ;
    box-shadow: 12px 12px 2px 1px rgba(0, 0, 255, .2);
`;