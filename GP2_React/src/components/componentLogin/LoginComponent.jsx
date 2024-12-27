import { useState, useEffect } from "react";
import "./LoginComponent.css";
import { api } from "../../api/api";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export function LoginComponent() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [sucessMessage, setSucessMessage] = useState("");
  const history = useHistory();

  function reloadPage() {
    window.location.reload();
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("Teste: ", email, senha);
      const response = await api.get("/users", {
        params: { email: email, senha: senha }
      });
      console.log("Response: ", response);

      if (response.status === 200) {
        if (response.data.length === 1) {
          const user = response.data[0];
          if (user.email === email && user.senha === senha) {
            setSucessMessage("Usuário logado com sucesso!");
            localStorage.setItem("user", JSON.stringify(user));
            setTimeout(() => {
              history.push("/");
              reloadPage();
            }, 1500);

          } else {
            setSucessMessage("Nome de usuário ou a senha incorretos!");
          }
        } else {
          setSucessMessage("Nome de usuário ou a senha incorretos!");
        }
      } else {
        setSucessMessage("Erro ao logar usuário.");
      }
    } catch (error) {
      console.error("Erro ao fazer login: ", error);
      setSucessMessage("Erro ao logar usuário.");
    }
  }
  return (
    <>
      <fieldset className="box-form">
        <form onSubmit={handleSubmit}>
          <div className="box-form-top">
            <h1 className="box-form-login">Login</h1>
            <div className="box-form-border"></div>
          </div>

          <div className="box">
            <div className="box-form-input">
              <div className="box-form-input-one">
                <label className="box-form-label-email" htmlFor="">
                  Seu e-mail
                </label>
                <input
                  className="box-form-input-email"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="exemplo@email.com"
                  type="email"
                />
              </div>
              <div className="box-form-input-two">
                <label className="box-form-label-senha" htmlFor="">
                  Sua senha
                </label>
                <input
                  className="box-form-input-senha"
                  onChange={(e) => setSenha(e.target.value)}
                  required
                  placeholder="1234"
                  type="text"
                />
              </div>
            </div>

            <div className="box-form-checkbox">
              <input className="box-form-input-checkbox" type="checkbox" />
              <label
                className="box-form-label-checkbox"
                htmlFor="manter-logado"
              >
                Manter-me logado
              </label>
            </div>
            {sucessMessage && (
              <div className="sucess-message">{sucessMessage}</div>
            )}
            <input type="submit" className="box-form-button" value="Logar" />
          </div>
          <div className="box-form-cad">
            <p className="box-form-cad-text">Ainda não tem conta?</p>
            <Link className="box-form-cad-link" to="/cadastro">
              <p>Cadastre-se</p>
            </Link>
          </div>
        </form>
      </fieldset>
    </>
  );
}
