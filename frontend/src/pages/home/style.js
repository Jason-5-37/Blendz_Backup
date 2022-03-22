import styled from "styled-components";
import HomePic from '../../statics/HomeImage.png'

export const HomeWrapper = styled.div`
    z-index:-1;
    position absolute;
    top: 0;
    bottom 0;
    left: 0;
    right: 0;
    padding-top:5%;
    margin-bottom:5%;
`;

export const LeftArea = styled.div`
    float: left;
    height: 50%;
    width: 30%;
    margin-left: 15%;
    margin-top: 10%;
    background: url(${HomePic});
    background-size: 100% 100%;
`;


export const RightArea = styled.div`
    float: right;
    height: 50%;
    width: 30%;
    margin-right: 15%;
    margin-top: 10%;
`;

export const RightItem = styled.div`
    color: grey;
    &.title{
        line-height: 200%;
        text-align: center;
        font-size: 200%;
        margin-bottom: 5%;
    }
    &.text{
        text-align: left;
        font-size: 100%;
    }
`;