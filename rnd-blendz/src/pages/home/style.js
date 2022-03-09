import styled from "styled-components";
import HomePic from '../../statics/HomeImage.png'

export const HomeWrapper = styled.div`
    z-index:-1;
    position absolute;
    top: 0;
    bottom 0;
    left: 0;
    right: 0;
    padding-top: 200px;
    padding-right:300px;
    padding-left: 300px;
`;

export const RightArea = styled.div`
    float: right;
    height: 500px;
    width: 700px;
`;

export const RightItem = styled.div`
    color: grey;
    &.title{
        line-height: 200px;
        text-align: center;
        height: 200px;
        font-size: 50px;
    }
    &.text{
        text-align: left;
        font-size: 20px;
    }
`;

export const LeftArea = styled.div`
    float: left;
    height: 500px;
    width: 500px;
    background: url(${HomePic});
    background-size: contain;
`;
