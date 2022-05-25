import styled from "styled-components";
import { mobile } from "../../responsive";

export const AboutWrapper = styled.div`
    padding: 100px 100px;

    // ${mobile({ padding: "10px 0px" })}
`;

export const InfoWrapper = styled.div`
    margin: auto;
    border-radius: 35px;
    box-shadow: 12px 12px 2px 1px rgba(192, 109, 31, 0.2);
    background: rgba(255, 212, 22, 0.2);
`;

export const Title = styled.h1`
    padding-top: 40px;
    text-align: center;
    font-size: 25px;
    color: #008000;
`;

export const Content = styled.div`
    padding: 30px 30px;
    text-align: center;
    font-size: 15px;
    p {
        margin: 10px 0px;
    }
    strong {
        color: #008000;
    }
    a {
        color: #0000FF;
    }
`;