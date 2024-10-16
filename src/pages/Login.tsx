import { useNavigate } from "react-router-dom";
import { CardLoginStyled } from "../components/styled/login/CardLoginStyled";
import { ContainerLoginStyled } from "../components/styled/login/ContainerLoginStyled";
import { InputGroupLoginStyled } from "../components/styled/login/InputGroupLoginStyled";
import { LeftLoginStyled } from "../components/styled/login/LeftLoginStyled";
import { LoginFormStyled } from "../components/styled/login/LoginFormSyled";
import { RightLoginStyled } from "../components/styled/login/RightLoginStyled";
import { useEffect } from "react";
import { login } from "../configs/services/growtwitter-api/auth/auth.service";

export function Login() {
  const navigate = useNavigate();

  useEffect(() => {
    const authToken = localStorage.getItem("authToken");

    if (authToken) {
      navigate("/feed");
    }
  }, [navigate]);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  
    const credentials = {
      email: event.currentTarget.email.value,
      password: event.currentTarget.password.value,
    };
  
    const resultado = await login(credentials);
  
    if (!resultado.ok) {
      alert(resultado.message);
      return;
    }
  
    if (resultado.authToken) {
      localStorage.setItem("authToken", resultado.authToken);
    } else {
      console.warn("Token de autenticação não encontrado.");
    }
  
    const user = resultado.userLogged;
  
    if (user?.name) {
      localStorage.setItem("name", user.name);
    } else {
      console.warn("Nome do usuário não encontrado");
    }
  
    if (user?.username) {
      localStorage.setItem("username", user.username);
    } else {
      console.warn("Username não encontrado");
    }
  
    if (user?.avatar) {
      localStorage.setItem("avatar", user.avatar);
    } else {
      console.warn("Avatar não encontrado");
    }
  
    alert(resultado.message);
    navigate("/feed");
  }
  
 return (
    <ContainerLoginStyled>
      <CardLoginStyled>
        <LeftLoginStyled>
          <h1>Growtwitter</h1>
          <h3>Trabalho final do bloco intermediário</h3>
          <p>
            O Growtwitter é a plataforma definitiva para todos os apaixonados
            por redes sociais que buscam uma experiência familiar e poderosa,
            semelhante ao Twitter, mas com um toque único. Seja parte desta
            comunidade que valoriza a liberdade de expressão, a conexão com
            pessoas de todo o mundo e a disseminação de ideias.
          </p>
        </LeftLoginStyled>
        <LoginFormStyled>
          <RightLoginStyled>
            <h2>Entrar no Growtwitter</h2>
            <form onSubmit={handleSubmit}>
              <InputGroupLoginStyled>
                <label htmlFor="email">E-mail</label>
                <input type="email" name="email" id="email" required />
              </InputGroupLoginStyled>
              <InputGroupLoginStyled>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" required />
              </InputGroupLoginStyled>
              <InputGroupLoginStyled>
                <button type="submit">Entrar</button>
              </InputGroupLoginStyled>
            </form>
          </RightLoginStyled>
        </LoginFormStyled>
      </CardLoginStyled>
    </ContainerLoginStyled>
  );
}

