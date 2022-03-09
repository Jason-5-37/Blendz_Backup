import styled from "styled-components";

export const HelpWrapper = styled.div`
z-index:-1;
position absolute;
top: 0;
bottom 0;
left: 0;
right: 0;
padding-top: 200px;
padding-right:300px;
padding-left: 300px;
margin-left: auto;
margin-right: auto;
`;

export const QuestionWrapper = styled.div`
height:60%;
width:70%
margin: auto;
`;

export const Question = styled.div`
background: red;
height:10%;
width:100%;
margin:auto;
top: 5%;
text-align: center;
font-size: 25px;
`

export const Answer = styled.div`
background: green;
height:90%;
width:100%;
margin:auto;
bottom:0;
text-align: center;
font-size: 15px;
`

export const Button = styled.div`
background:yellow;
height:10%;
width:5%;
text-align: center;
font-size: 15px;
margin: auto;
top: 0;
&.left{
    float left;
}
&.right{
    float right;
}
`


