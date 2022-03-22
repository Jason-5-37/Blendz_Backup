import styled from "styled-components";

export const ShopWrapper = styled.div`
    z-index:-1;
    position absolute;
    top: 0;
    bottom 0;
    left: 0;
    right: 0;
    padding-top:5%;
    padding-left: 2%;
    padding-right: 2%;
    margin-bottom:5%;
    margin-top: 1%;  
`;

export const ShopNav = styled.div`
    width: 10%;
    height: 60%;
    margin-top: 5%;
    margin-right: 2%;
    float: left;
    border: 1px solid #787878;
    border-radius: 1%;
`;

export const ShopNavTitle = styled.div`
    width:100%;
    height:10%;
    background: #FF9900;
    border-bottom: 1px solid #787878;
    font-size: 130%;
    text-align: center;
    line-height: 200%;
    font-weight: bold;
`

export const ShopNavItem = styled.div`
    width: 100%;
    height: 7%;
    margin: 5% auto;
    font-size: 130%;
    font-size: 110%;
    text-align: center;
    line-height: 150%;
    cursor: pointer;
    border-bottom: 1px solid #787878;
`;

export const ShopInforWrapper = styled.div`
    width: 85%;
    height:90%;
    float: left;
    background: #EEB764;
`;

export const ShopInforTitle = styled.div`
    width:100%;
    height: 10%;
    font-size: 250%;
    text-align: center;
    line-height: 150%;
    font-weight: bold;
    background: #FF9900;
`;

export const ShopInforItem = styled.a`
    width: 15%;
    height: 35%;
    display: block;
    float: left;
    border: 5px solid #FF9900;
    border-radius: 2px;
    margin: 5% 5%;
`;