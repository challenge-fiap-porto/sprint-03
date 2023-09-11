import "./entrar.css";
import { Link } from "react-router-dom";
import logo_porto from "../../imgs/logo-porto-azul.png";
import portinho from "../../imgs/portinho.png";

export default function Entrar() {
  return (
    <main>
      <img className="position-img-entrar" src={portinho} alt=" Boneco porto" />
      <div className="center-entrar">
        <img src={logo_porto} alt="Logo da porto" />

        <h1 className="title-entrar">Acessar Conta</h1>
        <div className="inputs">
          <input
            className="edit-input-entrar"
            type="text"
            placeholder="CPF ou CNPJ"
          />
          <button className="edit-input-entrar-2">Entrar</button>
        </div>
        <h2>Ainda não tem uma conta?</h2>
        <Link className="link-sign-up" to="/cadastrar">Cadastre-se agora :)</Link>
      </div>
    </main>
  );
}
