import { useState, useEffect } from "react";
import "./CadastroComponent.css";
import { api } from "../../api/api";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";

export function CadastroComponent() {
    const [username, setUsername] = useState("");
    const [senha, setSenha] = useState("");
    const [email, setEmail] = useState("");
    const [sucessMessage, setSucessMessage] = useState("");
    const history = useHistory();
    const [existingEmails, setExistingEmails] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
      const getAllEmails = async () => {
          try {
              const response = await api.get("/users");
              const emails = response.data.map(user => user.email);
              setExistingEmails(emails);
          } catch (error) {
              console.error("Erro ao obter os usuários:", error);
          }
      };

      getAllEmails();
  }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(existingEmails.includes(email)){
          setErrorMessage("Este e-mail já está cadastrado!");
          return;
        }

        const newUser = {username, email, senha}
    
        try {
          
            const response = await api.post("/users", newUser)
            setSucessMessage("Usuário cadastrado com sucesso!");
            setTimeout(() => {
              history.push("/login");
            }, 1000);
            setUsername("");
            setSenha("");
            setEmail("");
            setErrorMessage("");
        } catch (error) {
            console.error("Erro ao cadastrar usuário: ", error);
            setSucessMessage("Erro ao cadastrar usuário.");
        }
      }


    return (
        <>
        <fieldset className="box-form">
        <form onSubmit={handleSubmit}>
          <div className="box-form-top">
            <h1 className="box-form-login">Cadastre-se</h1>
            <div className="box-form-border"></div>
          </div>

        <div className="box">
          <div className="box-form-input">
          <div className="box-form-input-three">
              <label className="box-form-label-usuário" htmlFor="">Seu usuário</label>
              <input className="box-form-input-usuário" onChange={(e) => setUsername(e.target.value)} required placeholder="usuário" type="text" /> 
            </div>
            <div className="box-form-input-one">
              <label className="box-form-label-email" htmlFor="">Seu e-mail</label>
              <input className="box-form-input-email" onChange={(e) => setEmail(e.target.value)} required placeholder="exemplo@email.com" type="email" /> 
            </div>
            <div className="box-form-input-two">
              <label className="box-form-label-senha" htmlFor="">Sua senha</label>
              <input className="box-form-input-senha" onChange={(e) => setSenha(e.target.value)} required placeholder="1234" type="text" />
            </div>
          </div>
            {errorMessage}
            {sucessMessage}
          <input type="submit" className="box-form-button" value="Cadastrar-se" />
        </div>
        <div className="box-form-cad">
          <p className="box-form-cad-text">Já possui uma conta?</p>
          <Link className="box-form-cad-link" to="/login">
            <p>Login</p>
          </Link>
        </div>
        </form>
      </fieldset>
        </>
    )
}