import styled, { createGlobalStyle, css } from 'styled-components';
import { mobile } from "../../responsive";

export const GlobalStyle = createGlobalStyle`
  html {
    height: 100%
  }
  body {
    background: linear-gradient(#ffff, #3D550C);
    height: 100%;
    margin: 0;
    color: #1A5653;
  }

  ${mobile({ padding: '0px 10px'})}
`;

export const sharedStyles = css`
  background-color: #ffff;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #ddd;
  margin: 10px 0 20px 0;
  padding: 20px;
  box-sizing: border-box;
`;

export const StyledFormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 0 20px;

    ${mobile({ padding: '0px 10px'})}
`;

export const StyledForm = styled.form`
  width: 100%;
  max-width: 700px;
  padding: 40px;
  background-color: #f2f3f4;
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);

  h1 {
    color: #3D550C;
    position: relative;
    width: max-width;
    font-size: 35px;
    margin-bottom: 50px;
    font-weight: bold;
  }
`;

export const StyledInput = styled.input`
  display: block;
  width: 100%;
  ${sharedStyles}
`;

export const StyledTextArea = styled.textarea`
  background-color: #eee;
  width: 100%;
  min-height: 100px;
  resize: none;
  ${sharedStyles}
`;
export const StyledButton = styled.button`
  display: block;
  background-color: #FF9900;
  color: #fff;
  font-size: 0.9rem;
  border: 0;
  border-radius: 5px;
  height: 40px;
  padding: 0 20px;
  cursor: pointer;
  box-sizing: border-box;
`;

export const StyledError = styled.div`
  color: red;
  font-weight: 800;
  margin: 0 0 40px 0;
`;