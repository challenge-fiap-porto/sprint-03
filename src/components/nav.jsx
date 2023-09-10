import React from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import "./nav.css";

function nav() {
  return (
    <>
      <header>
        <Link className="logo" to="/"></Link>
        <nav className="navbar">
          <Link to="/sobre"> Sobre Nós </Link>
          <Link to="/ajuda"> Ajuda </Link>
          <Link to="/duvidas"> Dúvidas </Link>
          <Link to="/rm"> RM </Link>
        </nav>
        <input
          className="search"
          type="text"
          name="pesquisar"
          id="idpesquisar"
          placeholder="Pesquisar"
        />
        <input className="button-search" type="button" />

        <SearchIcon className="search-icon" />
        <Link to="/entrar" className="sign-in">
          Entrar
        </Link>
      </header>
    </>
  );
}
export default nav;
