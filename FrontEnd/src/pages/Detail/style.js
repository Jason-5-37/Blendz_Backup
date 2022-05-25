import styled from "styled-components";

export const DetailWrapper = styled.div`
    display: flex; 
    flex-wrap: wrap;
    padding: 5% 10%;
    // background: grey;
`;

export const Itemimg = styled.div`
    //background: grey;
    width:50%;
    img {
        display:block;
        margin:auto;
        width: 350px;
        height: 400px;
    }
`;

export const ItemInfo = styled.div`
    //background:lightblue; 
    width:50%;
    h1 {
        font-size:25px;
        line-height: 150%;
        font-weight: bold;
        margin-bottom: 2%;

    }
    p {
        font-size:25px;
        line-height: 150%;
        color: red;
    }

    h2{
        margin-top:5%;
        margin-bottom:2%;
        font-size:22px;
        line-height: 150%;
    }
`;


export const Description = styled.div`
    padding: 2%;
    margin:auto;
    width:100%;
    //background:blue;

    h1 {
        font-size:20px;
        line-height: 150%;
        font-weight: bold;
        margin-bottom: 2%; 
        border-bottom: 2px solid grey;
    }
    li {
        font-size: 15px;
    }
`;

export const Button = styled.div`
    height: 50px;
    float: left;
    width:50%;
    margin: auto;
    color: #FDFEFE;
    background: #A0A0A0;
    margin-top: 25px;
    padding: 0 30px;
    line-height:45px;
    border-radius: 5px;
    border: 1px solid #9EA482;
    text-decoration : none ;
    text-align: center;
    cursor: pointer;
    box-shadow: 12px 12px 2px 1px rgba(0, 0, 255, .2);
`;

export const InputWrapper = styled.div`
    width: 50%;
    height:10%;
    display: flex;
    //background: pink;
`

export const InputButton = styled.span`
    display: inline-block;
    width: 20%;
    //height: ;
    line-height: 28px;
    text-align: center;
    font-size: 18px;
    color: black;
    cursor: pointer;
    border: 1px solid black;
`;

export const Input = styled.div`
    display: inline-block;
    width: 100%;
    //height: ;
    line-height: 28px;
    text-align: center;
    font-size: 18px;
    color: black;
    cursor: pointer;
    border: 1px solid black;
`;

export const Request = styled.div`
    width: 100%;
    margin-top:10%;
    padding-left:50%;
    //border: 1px solid black;
    margin:auto;
    
h1 {
    font-size:20px;
    font-weight: bold;
    margin-bottom: 2%; 
}
`;

export const RentInput = styled.input`
    display: block;
`
