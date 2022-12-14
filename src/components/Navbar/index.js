import React from 'react'
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import NavBarLogo from "../../assets/navbar.png";

const Navbar = () => {
  const { signout } = useAuth();
  const navigate = useNavigate();
  
  return (
    <header class="p-3 bg-success text-white">
      <div class="container">
        <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          
          
          
          <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
          </a>
  
          <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <img src={NavBarLogo} width="30" height="30"  alt="navbar-logo"/>
            <li><a href="/home" class="nav-link px-2 text-white">Agenda</a></li>
            <li><a href="/users" class="nav-link px-2 text-white">Dados Cadastrais</a></li>
          </ul>

          <div class="text-end">
              <button type="button" class="btn btn-warning" onClick={() => [signout(), navigate("/")]}>Sair</button>
          </div>
  
          
        </div>
      </div>
    </header>
  );
};

export default Navbar;