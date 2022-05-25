import styled from "styled-components";
import { mobile } from "../../responsive";

export const Title = styled.div`
    width:100%;
    height:10%;
    border-bottom: 1px solid #787878;
    font-size: 130%;
    text-align: center;
    line-height: 200%;
    font-weight: bold;
`

export const OrderButton = styled.div`
    width: 220px;
    height: 35px;
    line-height: 30px;
    color: #fff;
    background: #A0A0A0;
    border-radius: 5px;
    margin: 10px auto;
    margin-top: 40px;
    text-align: center;
    font-size: 20px;
    cursor:pointer;
`;

export const OrderWrapper = styled.div`
    padding: 20px 100px;
    ${mobile({ padding: "10px 0px" })}
`

export const OrderInfoWrapper = styled.div`
    display: flex;
    text-align: center;
    font-size: 20px;
    h1 {
        color:red;
    }
`

export const OrderName = styled.div`
    width:20%;
    margin:1% auto;
`
export const OrderNumber = styled.div`
    width:20%;
    margin:1% auto;
`
export const OrderPrice = styled.div`
    width:20%;
    margin:1% auto;

`

export const OrderInfo = styled.div`
    font-size: 20px;
    margin:2% ;
    display:flex;

    h1{
        color:red;
        margin-left:1%;
    }

`