import styled from "styled-components";

export const Input = styled.input`
  .wrap-input{
    width: 100%;
    position: relative;
    border-bottom: 2px solid var(--line-input);
  }

  .input-form{
    font-family: Poppins-SemiBold;
    font-size: 18px;
    color:var(--input-text);
    line-height: 1.2;
    display: block;
    width: 100%;
    height: 52px;
    background: transparent;
    padding: 0 5px;

  }

  .focus-input-form{
      position: absolute;
      display: block;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      pointer-events: none;

  }

  .focus-input-form::before{ /* colocar stilus antes e depois do elemento sem precisar colocar um elemento novo pra poder estilizar*/
      content: "";
      display: block;
      position: absolute;
      bottom:-2px;
      left: 0;
      width: 0;
      height: 2px;
      transition: all 0.4s;
      background-color: var(--main-color);

  }

  .focus-input-form::after{
      font-family:Poppins-Medium;
      font-size: 18px;
      color: var(--text1);
      line-height:1.2;
      content: attr(data-placeholder);
      display: block;
      width: 100%;
      position: absolute;
      top: 15px;
      left: 0px;
      padding: 5px;
      transition:all 0.4s;
  }

  .input-form:focus + .focus-input-form::after{
      top:-20px;
      font-size: 15px;
  }

  .input-form:focus + .focus-input-form::before{
      width: 100%;
  }

  .has-val.input-form + .focus-input-form::after{
      top:-20px;
      font-size: 15px;
  }

  .has-val.input-form + .focus-input-form::before{
      width: 100%;
  }
`;

