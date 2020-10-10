import React from "react";
import styled, { createGlobalStyle, css } from "styled-components";

const GlobalStyle = createGlobalStyle`

html{
  height: 100%;
}

body{
 font-family: BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
  Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

  background-color: linear-gradient(to bottom, #6C63FF, #C77CF1);
  height: 100%;
  margin: 0;
}

`;

const shareStyles = css`
  background-color: #eee;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #ddd;
  margin: 10px 0 20px 0;
  padding: 20px;
  box-sizing: border-box;
`;

const StyleFormWrapper = styled.div`
  font-family: BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell,
    "Open Sans", "Helvetica Neue", sans-serif;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200vh;
  padding: 0 20px;
  border-radius: 4px;
  background: linear-gradient(to bottom, #6c63ff, #c77cf1) !important;
  /* background-color: red; */
`;
const StyleForm = styled.form`
  font-family: BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell,
    "Open Sans", "Helvetica Neue", sans-serif;
  width: 150%;
  max-width: 700px;
  padding: 40px;
  background-color: #fff;
  box-sizing: border-box;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.5);
  border-radius: 5px;
`;

const StyleInput = styled.input`
  font-family: BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell,
    "Open Sans", "Helvetica Neue", sans-serif;
  display: block;
  width: 100%;
  background-color: #eee;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #ddd;
  margin: 10px 0 20px 0;
  padding: 20px;
  box-sizing: border-box;
`;

const StyleInputCountry = styled.input`
  font-family: BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell,
    "Open Sans", "Helvetica Neue", sans-serif;
  display: block;
  width: 50%;
  background-color: #eee;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #ddd;
  margin: 10px 0 20px 0;
  padding: 20px;
  box-sizing: border-box;
`;

const StyleTextArea = styled.textarea`
  font-family: BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell,
    "Open Sans", "Helvetica Neue", sans-serif;
  background-color: #eee;
  width: 100%;
  min-height: 100px;
  resize: none;
  background-color: #eee;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #ddd;
  margin: 10px 0 20px 0;
  padding: 20px;
  box-sizing: border-box;
`;
const StyleButton = styled.button`
  font-family: BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell,
    "Open Sans", "Helvetica Neue", sans-serif;
  display: block;
  background-color: #6c63ff;
  color: #fff;
  border: 0px;
  border-radius: 5px;
  height: 40px;
  padding: 0 20px;
  cursor: pointer;
  box-sizing: border-box;
`;

const StyleFieldSet = styled.fieldset`
  font-family: BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell,
    "Open Sans", "Helvetica Neue", sans-serif;
  border: 1px solid #ddd;
  padding: 10px;
  padding-right: 500px;
  margin: 20px 0;
  border-radius: 5px;

  legend {
    padding: 0;
  }

  label {
    padding-right: 200px;
    color: red;
  }

  input {
    align-items: space-between;
    margin-right: 10px;
    margin-left: 10px;
    flex-direction: row;
  }
`;
const StyleError = styled.div`
  font-family: BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell,
    "Open Sans", "Helvetica Neue", sans-serif !important;
  color: red;
  font-weight: 800;
  margin: 0 0 40px 0;
`;

function ContactForm() {
  return (
    <>
      <GlobalStyle />
      <StyleFormWrapper>
        <StyleForm>
          <h2>Contact Form</h2>

          <lebal htmlfor="email"> Email </lebal>
          <StyleInput type="email" name="email" />

          <lebal htmlfor="password"> Password </lebal>
          <StyleInput type="password" name="password" />

          <StyleFieldSet>
            <legend>Gender</legend>
            <lebel>
              <input type="radio" value="female" name="gender" />
              Buying
            </lebel>

            <lebel>
              <input type="radio" value="male" name="gender" />
              Selling
            </lebel>
          </StyleFieldSet>

          <lebal htmlfor="country"> Country </lebal>
          <StyleInputCountry type="country" name="country" width="20%" />

          <lebal htmlfor="location">
            {" "}
            Location interested in doing Business{" "}
          </lebal>
          <StyleInputCountry type="location" name="location" width="20%" />

          <lebal htmlfor="goods">
            {" "}
            What goods do you want to buy or sel?l{" "}
          </lebal>
          <StyleInputCountry type="goods" name="goods" width="20%" />

          <lebel htmlfor="message"> Message</lebel>
          <StyleTextArea name="message" />

          <StyleError>
            <p>Error message here</p>
          </StyleError>
          <StyleButton type="summit"> Summit</StyleButton>
        </StyleForm>
      </StyleFormWrapper>
    </>
  );
}

export default ContactForm;
