import "./cadastrar.css";
import { MailOutline } from "@mui/icons-material";
import portinho from "../../imgs/portinho.png";
import logo_porto from "../../imgs/logo-porto-azul.png";


export default function cadastrar() {
  return (
    <main>
      <img className="position-img-cadastrar" src={portinho} alt=" Boneco porto" />
      <div className="center-entrar">
        <img src={logo_porto} alt="Logo da porto" />

        <h1 className="title-entrar">Cadastrar Conta</h1>
        <h2>Preencha seus dados de acesso para continuar.</h2>
        <div className="inputs">
          <input
            className="edit-input-entrar"
            type="text"
            placeholder="CPF ou CNPJ"
          />
          <button className="edit-input-entrar-2" >Cadastrar</button>
        </div>
      </div>
    </main>
  );
}
