import styled from "styled-components";

const Wrapper = styled.section`
  width: 100%;
  height: 100vh;
  padding-top: 40px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  background: #fff;
  margin: 50px auto;
  border: 2px solid #2991a6;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

const Form = styled.form`
  margin: 25px auto;
  width: 300px;
`;

const Input = styled.input`
  box-sizing: border-box;
  overflow: hidden;
  font-size: 16px;
  margin: 0 auto 20px;
  padding: 15px;
  width: 300px;
  height: 40px;
  background: inherit;
  border-radius: 10px;
  border: 1px solid #a19ea1;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  outline: none !important;
  user-select: none;
`;

const Label = styled.label`
  display: flex;
  font-size: 18px;
  padding-bottom: 10px;
  background: inherit;
  color: #000;
`;

const Submit = styled.input`
  font-family: "Lato", sans-serif;
  cursor: pointer;
  width: 150px;
  text-align: center;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 14px;
  letter-spacing: 2px;
  margin: 20px auto;
  height: 36px;
  background: #2991a6;
  border-radius: 5px;
  border-color: transparent;
  outline: none;
  color: #fff;
  &:active {
    background-color: #d533cf;
  }

  &:hover {
    background-color: #217586;
  }
`;

const SubmitSuccess = styled.span`
  color: red;
  font-size: 20px;
  font-weight: 500;
`;

const Error = styled.p`
  font-family: "Lato", sans-serif;
  color: red;
  font-size: 14px;
  width: 400px;
  margin: 0 0 10px;
  &::before {
    display: inline;
    content: "⚠ ";
  }
`;

export { Wrapper, Container, Form, Input, Label, Submit, SubmitSuccess, Error };
