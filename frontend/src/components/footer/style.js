import styled from "styled-components";
import { mobile } from "../../responsive";

export const FooterWrapper = styled.div`
    background: #383838;
    display: flex;
    flex-direction: column;

    ${mobile({ flexDirection: "column" })}
`;

export const FooterNav = styled.div `
    text-align: center;
    margin: 10px auto;
`;

export const FooterNavItem = styled.a`
    color: grey;
    padding: 0 10px;
    text-decoration : none;
    &:hover {
        color: white;
    }
`;

export const FooterInfo = styled.div`
    text-align: center;
    margin: 10px auto;
`;

export const FooterInfoItem = styled.p`
    color: grey;  
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`;

export const Copyright = styled.p`
    text-align: center;
    margin: 0px auto;
    color: grey;
`;