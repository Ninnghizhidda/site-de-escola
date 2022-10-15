import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  :root {
    --main-color:#008000;
    --link-color:#666666;
    --text1:#999999;
    --highligth-text:#333333;
    --input-text:#555555;
    --white-color:#FFFFFF;
    --points-list:#CCCCCC;
    --line-input:#D9D9D9;
  }

  /*
  Fontes


  @font-face {
    font-family: 'Poppins-Regular';
    src: local('Poppins-Regular')  url('../../src/fonts/Poppins/Poppins-Regular.ttf') format('truetype');
  }

  @font-face {
      font-family: 'Poppins-Medium';
      src: local('Poppins-Medium')  url('../../src/fonts/Poppins/Poppins-Medium.ttf') format('truetype');
  }

  @font-face {
      font-family: 'Poppins-Bold';
      src: local('Poppins-Bold')  url('../../src/fonts/Poppins/Poppins-Bold.ttf') format('truetype');
  }

  @font-face {
      font-family: 'Poppins-SemiBold';
      src:  local('Poppins-Semibold') url('../../src/fonts/Poppins/Poppins-SemiBold.ttf') format('truetype');
  }


  Zerar estilos 

  */

  * {
    margin:0px;
    padding:0px;
    box-sizing: border-box;
  }

  body, html{
    height:100%;
    font-family:Poppins-Regular, sans-serif;
  }

  ul,li {
    margin:0px;
    list-style-type:none;
  }

  input, button{
    outline:none !important;
    border: none;
  }

  button:hover{
    cursor:pointer;
  }

  /*
  Utilitarios 
  */

  .text1{
    font-family:Poppins-Regular, sans-serif;
    font-size: 15px;
    color:var(--text1);
    line-height: 1.5;
  }

  .text2{
    font-family:Poppins-Regular, sans-serif;
    font-size: 15px;
    color:var(--main-color);
    line-height: 1.5;
    margin-left: 10px;
  }

  .margin-bottom-35{
    margin-bottom:35px;
  }
  .margin-top-35{
    margin-top:35px;
  }

  .margin-bottom-8{
    margin-bottom:8px;
  }

  .margin-top-8{
    margin-top:8px;
  }

  .margin-left-50{
    margin-left:50px;
  }

  /*
  Login 
  */

  .container{
    width:100%;
    margin:0 auto;
  }

  .container-login{
    width:100%;
    min-height:100vh;
    display: flex;
    flex-wrap: wrap;
    justify-content:center;
    align-items: center;
    padding: 15px;
    background-color:var(--white-color);
  }

  .wrap.login{
    width:370px;
    margin-right: 50px;
    background-color:var(--white-color);
  }
  
  /*
  Formulario 
  */
  .login-form{
    width: 100%;
  }
  .login-form-title{
    display: block;
    font-family: 'Poppins-Bold', sans-serif;
    font-weight: 900;
    font-size: 39px;
    color:var(--highligth-text);
    line-height: 1.2;
    text-align: center;
  }

  /*
  Input 
  */

  .wrap-input{
    width: 100%;
    position: relative;
    border-bottom: 2px solid var(--line-input);
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
    transition: all 1.0s;
    background-color: var(--main-color);
  }

  .focus-input-form::after{
    font-family:'Poppins-Medium', sans-serif;
    font-size: 12px;
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

  
  .input-form:focus + .focus-input-form::before{
    width: 100%;
  }

  .input-form:focus + .focus-input-form::after{
    top:-20px;
    font-size: 15px;
  }

  .has-val.input-form + .focus-input-form::before{
    width: 100%;
  }

  .has-val.input-form + .focus-input-form::after{
    top:-20px;
    font-size: 15px;
  }

  /*
  Links - login utlis
  */

  a{
    font-family: 'Poppins-Regular', sans-serif;
    font-size: 14px;
    line-height: 1.7;
    color:var(--link-color);
    margin:0px;
    transition: all 0.4s;
  }

  a:focus{
   outline: none !important;
  }

  a:hover{
    text-decoration: none;
    color:var (--highlight-text);
  }

  .login-utils{
    margin-top: 20px;
  }

  .login-utils li{
    position: relative;
    padding-left:  16px;
  }

  .login-utils li::before{
      content: "";
      display: block;
      position: absolute;
      width: 5px;
      height: 5px;
      border-radius: 50%;
      background-color:var(--points-list);
      top:45%;
      transform: translateY(-50%);
      left:0;
  }
`;

export default GlobalStyle;