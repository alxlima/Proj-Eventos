import React from 'react'; // importo tudo que tenho dentro da pasta react.
import './login.css';

//&#2605; - é um simbolo html pegar codigo DEC. - ref: https://www.w3schools.com/charsets/ref_utf_symbols.asp  
function Login(){
    return(
     
 <div className='login-content d-flex align-items-center'>  
      <form className="form-signin mx-auto">
          <div className='text-center mb-4'>
            <h1 className="h3 mb-3 font-weight-normal text-white font-weight-bold">Login</h1>
          </div>
          

          <div className="form-floating">
            <input type="email" class="form-control my-2" id="floatingInput" placeholder="name@example.com" />
            <label for="floatingInput"> &#128231; Email</label>
          </div>
          
          <div className="form-floating">
            <input type="password" className="form-control my-2" id="floatingPassword" placeholder="Senha" />
            <label for="floatingPassword"> &#128273; Senha</label>
          </div>

          <div className="checkbox mb-3">
            <label className='text-white'>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div>
          <button className="w-100 btn btn-lg btn-login" type="submit">Sign in </button>

          <div className='msg-login text-white text-center m-2'>
            <span><strong> Sucesso! </strong> Você está conectado! &#128526;</span>
            <br></br>
            <span><strong> Ops! </strong> Veja sua Senha ou Usuário estão corretos! &#128549;</span>
          </div>

          <div className='opcoes-login mt-3 text-center'>
            <a href='#' className='mx-2'> Recuperar Senha</a>
            <span className='text-white'>&#128274;</span> 
            <a href='#' className='mx-2'>Cadastrar-se</a>
          </div>
            
          
      </form>
  </div>


    )
}


export default Login; 