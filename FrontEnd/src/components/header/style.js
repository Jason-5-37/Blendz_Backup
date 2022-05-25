import styled from "styled-components";
import logoPic from '../../assets/logo.jpg';
import { mobile } from "../../responsive";

export const HeaderWrapper = styled.nav`
    background: #FF9900;
    position: sticky;
    height: 100px;
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    // border-bottom: 2px solid #7B7776;

    ${mobile({ height: "80px", padding: "10px 0px" })}
`;

export const Logo = styled.a`
    width: 200px;
    height: 100px;
    background: url(${logoPic});   
    background-size: contain;
    background-repeat: no-repeat;
    
    ${mobile({ width: "180px", height: "80px" })}
`;

export const Nav = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;

    ${mobile({ justifyContent: "center" })}
`;

export const NavItem = styled.a`   
    font-size: 15px;
    cursor: pointer;
    margin-left: 25px;
    color: #FDFEFE;
    text-decoration: none;

    ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

// export const HeaderWrapper = styled.div`
//     z-index: 1;
//     position absolute;
//     height: 100px;
//     top:0;
//     left:0;
//     right:0;
//     background: #FF9900;
//     border-bottom: 2px solid #7B7776;
// `;

// export const Logo = styled.a`
//     position: absolute;
//     top: 10;
//     left: 50px;
//     display: block;
//     width: 200px;
//     height: 100px;
//     background: url(${logoPic});
//     background-size: 200px 100px;
//     background-repeat: no-repeat;
// `;

// export const Nav = styled.div`
//     height: 100%;
//     width: 500px;
//     margin: 0 auto;
// `;

// export const NavItem = styled.a`
//     line-height: 100px;
//     padding: 0 10px;
//     font-size: 15px;
//     float: right;
//     color: #FDFEFE;
//     text-decoration : none ;
// `;

// export const Addition = styled.div`
//     position: absolute;
//     right: 0;
//     top: 0;
//     height: 100px;
//     width: 300px;
// `;

// export const Button = styled.a`
//     float: right;
//     color: #FDFEFE;
//     background: #A0A0A0  ;
//     margin-top: 25px;
//     margin-right: 50px;
//     padding: 0 30px;
//     line-height:45px;
//     border-radius: 5px;
//     border: 1px solid #9EA482;
//     text-decoration : none ;
//     box-shadow: 12px 12px 2px 1px rgba(0, 0, 255, .2);
// `;