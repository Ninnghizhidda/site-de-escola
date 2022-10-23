import React, { useState } from "react";
import Button from "../../components/Button";
import * as C from "./styles";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import LoginLogo from "../../assets/login.png";

const Signin = () => {
  const { signin } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");


  const handleLogin = () => {
    if (!email | !senha) {
      setError("Preencha todos os campos");
      return;
    }

    const res = signin(email, senha);

    if (res) {
      setError(res);
      return;
    }

    navigate("/home");
  };


  return (
    <body>
      <div class="container"> 
        <div class="container-login">
          <div class="wrap-Login">
            <form class="login-form">
              <span class="login-form-title">
                Centro Educacional Tucanos
              </span>
            
              <div class="wrap-input margin-top-35 margin-bottom-35">
                <input
                  class="input-form"
                  type="text"
                  name="E-mail"
                  autocomplete="off"
                  value={email}
                  onChange={(e) => [setEmail(e.target.value), setError("")]}
                />
                <span class="focus-input-form" data-placeholder="E-mail"></span>
              </div>

              <div></div>

              <div class="wrap-input margin-top-35 margin-bottom-35">
                <input
                  class="input-form"
                  type="password"
                  name="password"
                  value={senha}
                  onChange={(e) => [setSenha(e.target.value), setError("")]}
                />
                <span class="focus-input-form" data-placeholder="Senha"></span>
              </div>
              

              <div class="wrap-input">
                <C.labelError>{error}</C.labelError>
              </div>

              <div class="container-login-form-btn">
                <Button 
                  Text="Login"
                  onClick={handleLogin}
                />
              </div>
            </form>
            <ul class="login-utils">
                   <li class="margin-bottom-8 margin-top-8">
                       <span class="text1">
                           Primeiro acesso?
                       </span>
                       <a href="/signup" class="text2">
                        Criar cadastro!
                       </a>
                    </li>
                </ul>
          </div>
          <img src={LoginLogo} width="300" height="300" class="margin-left-50" alt="login-logo"/>
        </div>
      </div>
    </body>
  );
};

export default Signin;