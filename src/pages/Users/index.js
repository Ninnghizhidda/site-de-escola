import React from "react";
import UsersLogo from "../../assets/home.png";
import NavbarComp from "../../components/Navbar";
import * as C from "./styles";


const Users = () =>{

    return (
    <body>
        <main>
            <NavbarComp /> 
        </main>

        <div class="container">
            <main>
                <div class="py-5 text-center">
                    <img class="d-block mx-auto mb-4" src={UsersLogo} alt="" width="250" height="250"></img>
                    <h2>Cadastro de novos Alunos</h2>
                    <p class="lead">Autenticação dos nossos novos alunos, no Centro Educacional Tucanos.</p> 
                </div>

                <div class="row g-3">
                  <div class="col-sm-6">
                    <label for="Nome" class="form-label">Nome</label>
                    <input type="text" class="form-control" id="Nome" placeholder="" value="" required=""/>
                    <div class="invalid-feedback">
                      Necessário colocar um nome valido obrigatorio!
                    </div>
                  </div>

                  <div class="col-sm-6">
                    <label for="Sobrenome" class="form-label">Sobrenome</label>
                    <input type="text" class="form-control" id="Sobrenome" placeholder="" value="" required=""/>
                    <div class="invalid-feedback">
                      Necessário colocar um sobre nome!
                    </div>
                  </div>

                  <div class="col-sm-6">
                    <label for="senha" class="form-label">Senha<span class="text-muted"></span></label>
                    <input type="password" id="senha" class="form-control" aria-describedby="passwordHelpBlock" placeholder="" required=""/>
                    <small id="passwordHelpBlock" class="form-text text-muted"></small>
                    <div class="invalid-feedback">
                      Insira uma Senha de 8-20 caracters.
                    </div>
                  </div>


                  <div class="col-sm-6">
                    <label for="confirmarSenha" class="form-label">Confirmar Senha<span class="text-muted"></span></label>
                    <input type="password" id="confirmarSenha" class="form-control" aria-describedby="passwordHelpInline" placeholder="" required=""/>
                    <small id="passwordHelpInline" class="text-muted"></small>
                    <div class="invalid-feedback">
                     Confirme a Senha.
                    </div>
                  </div>

                  <div class="col-12">
                    <label for="email" class="form-label">E-mail <span class="text-muted"></span></label>
                    <input type="email" class="form-control" id="email" placeholder="you@example.com" required=""/>
                    <div class="invalid-feedback">
                      Insira um endereço de e-mail válido para envio de materiais e confirmações.
                    </div>
                  </div>

                  <div class="col-12">
                    <label for="Endereço" class="form-label">Endereço</label>
                    <input type="text" class="form-control" id="Endereço" placeholder="1234 Main St" required=""/>
                    <div class="invalid-feedback">
                      Por favor insira seu endereço.
                    </div>
                  </div>

                  <div class="col-md-5">
                    <label for="estado" class="form-label">Estado</label>
                    <select class="form-select" id="estado" required="">
                      <option value="">escolher</option>
                      <option>Minas Gerais</option>
                      <option>Espirito Santo</option>
                      <option>Ceará</option>
                    </select>
                    <div class="invalid-feedback">
                      Selecione um país válido.
                    </div>
                  </div>

                  <div class="col-md-4">
                    <label for="cidade" class="form-label">Cidade</label>
                    <select class="form-select" id="cidade" required="">
                      <option value="">Cidade...</option>
                      <option>Belo Horizonte</option>
                      <option>Vitoria</option>
                      <option>Quixeramobim</option>
                    </select>
                    <div class="invalid-feedback">
                      Forneça um estado válido.
                    </div>
                  </div>


                  <div class="col-md-3">
                    <label for="cep" class="form-label">CEP</label>
                    <input type="text" class="form-control" id="cep" placeholder="" required=""/>
                    <div class="invalid-feedback">
                      Cep válido requirido.
                    </div>
                  </div>
                </div>

                <hr class="my-4"></hr>

                <div class="form-check">
                  <input type="checkbox" class="form-check-input" id="same-address"/>
                  <label class="form-check-label" for="same-address">O endereço de entrega é o mesmo que meu endereço de cobrança</label>
                </div>


                <hr class="my-4"></hr>

                <h4 class="mb-3">Turmas</h4>

                <div class="my-3">
                  <div class="form-check">
                    <input id="educainfantil" name="educacao" type="radio" class="form-check-input" checked="" required=""/>
                    <label class="form-check-label" for="educainfantil">Educação Infantil</label>
                  </div>
                  <div class="form-check">
                    <input id="ensfunda" name="educacao" type="radio" class="form-check-input" required=""/>
                    <label class="form-check-label" for="ensfunda">Esino Fundamental</label>
                  </div>
                  <div class="form-check">
                    <input id="ensmedio" name="educacao" type="radio" class="form-check-input" required=""/>
                    <label class="form-check-label" for="ensmedio">Ensino Médio</label>
                  </div>
                </div>

                <div class="row gy-3">
                    <div class="col-md-6">
                      <label for="cc-name" class="form-label">Nome do Professor</label>
                      <input type="text" class="form-control" id="cc-name" placeholder="" required=""/>
                      <small class="text-muted">Nome completo do professor</small>
                      <div class="invalid-feedback">
                       Nome requirido do professor!
                      </div>
                    </div>

                    <div class="col-md-6">
                      <label for="cc-number" class="form-label">Numero da nova turma</label>
                      <input type="text" class="form-control" id="cc-number" placeholder="" required=""/>
                      <div class="invalid-feedback">
                        Numero da sala em que o aluno será matriculado.
                      </div>
                    </div>
                </div>

                <div class="col-md-12 col-lg-12">
                    <h4 class="mb-3">Cadastro</h4>
                    <form class="needs-validation" novalidate="">
                        <hr class="my-4"></hr>

                        <button  class="w-100 btn btn-success btn-lg" type="submit">Salvar</button>

                        <hr class="my-4"></hr>
                    </form>
                </div>
            </main>
        
        </div> 
    </body>
    );
};

export default Users;