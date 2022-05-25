import styled from "styled-components";

export const ShopWrapper = styled.div`
    display: flex; 
    padding: 5% 5%;

`;

export const ShopNav = styled.div`
    width: 15%;
    margin-right: 50px;
`;

export const ShopNavTitle = styled.div`
    font-size: 130%;
    text-align: center;
    line-height: 200%;
    font-weight: bold;
    margin-bottom: 10px;
`

export const ShopNavItem = styled.div`
    font-size: 110%;
    text-align: center;
    line-height: 150%;
    cursor: pointer;
    color: grey;
    &:hover {
        color: orange;
    }
`;

export const ShopInforWrapper = styled.div`
    width: 85%;
`;

export const ShopInforItem = styled.div`
    width: 150px;
    height: 275px;
    display: block;
    float: left;
    border: 2px solid #FF9900;
    margin-bottom: 30px;
    margin-right: 50px;
    padding: 2%;

    img {
        width: 150px;
        height: 175px;
        margin-bottom: 10px;
    }
    p {
        font-size: 15px;
        text-align: center;
        line-height: 150%;
        font-weight: bold;
    }
`;