import styled from "styled-components";
import { mobile } from "../../responsive";

export const Wrapper = styled.div`
    padding: 20px 100px;
    ${mobile({ padding: "10px 0px" })}
`

export const Title = styled.div`
    width:100%;
    height:10%;
    border-bottom: 1px solid #787878;
    font-size: 130%;
    text-align: center;
    line-height: 200%;
    font-weight: bold;
`

export const Button = styled.div`
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

export const Button2 = styled.div`
    height: 35px;
    line-height: 30px;
    color: #fff;
    background: #A0A0A0;
    border-radius: 5px;
    margin: 10px;
    text-align: center;
    font-size: 20px;
    cursor:pointer;
`;

export const TitleWrapper= styled.div`
    display: flex;
    border-bottom: 1px solid #787878;
`

export const TitleContent = styled.div`
    margin:0% 2%;
    height:10%;
    font-size: 130%;
    text-align: center;
    line-height: 200%;
    font-weight: bold;
    cursor: pointer;
`

export const ProdutcTitleContent = styled.div`
    margin:0% 2%;
    height:10%;
    font-size: 130%;
    text-align: center;
    line-height: 200%;
    font-weight: bold;
    cursor: pointer;

    button:focus{
    cursor: pointer;
    background: #FCA71B;
}
`


export const UserListWrapper = styled.div`
    display: flex;
`


export const UserWrapper = styled.div`
    margin: 1% auto;
    padding:1%;
    border: 2px solid #787878;
`


export const ProductWrapper = styled.div`
display: flex;
margin: 1% auto;
`


export const ProductFromWrapper = styled.div`
    margin: 1% auto;
`

export const ShopInforItem = styled.div`
    width: 150px;
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

export const ProductFrom = styled.div`
    margin: 1% auto;
    width: 30%;
`

export const Input = styled.input`
    width:50%;
    height:20%;
    margin: 1%;
    margin: 0% auto;
`