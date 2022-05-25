import styled from "styled-components";
import { mobile } from "../../responsive";

export const CartWrapper = styled.div`
    padding: 20px 100px;
    ${mobile({ padding: "10px 0px" })}

`;

export const CartHeader = styled.div`
    width:100%;
    background: #FCB745;
`

export const CartHeaderTitle = styled.div`
    font-size: 40px;
    padding:20px 20px;
`
export const CartHeaderContent = styled.div`
    font-size: 20px;
    padding:10px 20px;
`
export const CartContentWrappet = styled.div`
    width: 100%;
    margin-top:10px;
`
export const CartItemTitle = styled.div`
    width: 60%;
    padding: 20px;
    margin: 10px 10%;
    display: flex;
    text-align: center;
    font-size: 30px;
    font-weight: bold;

`

export const CartItemWrapper = styled.div`
    width: 60%;
    border: 1px solid #FF9900;
    padding: 20px;
    margin: 10px 10%;
    display: flex;
    text-align: center;
    font-size: 20px;
`

export const CartItem = styled.div`
    width:40%;
    margin-left:1%;
`

export const Item = styled.div`
    display: flex;
`

export const Button = styled.button`
    margin: auto 2%;
    color: #FDFEFE;
    background: #A0A0A0;
    border-radius: 5px;
    border: 1px solid #9EA482;
    text-decoration : none;
    cursor: pointer;
    box-shadow: 12px 12px 2px 1px rgba(0, 0, 255, .2);
`

export const PayButton = styled.button`
    color: #FDFEFE;
    background: #A0A0A0;
    border-radius: 5px;
    border: 1px solid #9EA482;
    text-decoration : none;
    cursor: pointer;
    box-shadow: 12px 12px 2px 1px rgba(0, 0, 255, .2);
`


export const SummaryWrapper = styled.div`
    width: 100%;
    margin-top:50px;
    margin-left:10%;
    margin-bottom: 20px;
    background: white;
    font-size: 40px;

    h1{
    font-size: 20px;
    }
`
export const Summarytext= styled.div`
    width: 90%;
    font-size: 40px;
    height: 80px;
`

export const Disappear=styled.div`
    display:none;
`

export const AddressWrapper =styled.div`
    width:50%;
    height:20%;
    background:black;
`

export const Input =styled.input`
    width:70%;
`


export const Img = styled.img`
    display: block;
    margin:auto;
`