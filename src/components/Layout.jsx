import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";  // Ícone de menu hambúrguer
import './Todos.css'; // Importa o arquivo de estilos

const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Alterna o estado do menu
  };

  return (
    <>
      {/* Botão de menu hambúrguer */}
      <button onClick={toggleMenu} className="menu-button">
        <FaBars size={24} color="#00e676" />
      </button>

      {/* Menu de navegação que aparece ou desaparece */}
      {isMenuOpen && (
        <nav>
          <ul className="menu-list">
            <li>
              <Link to="/" onClick={toggleMenu}>Bem-vindo</Link> {/* Link para a nova página de boas-vindas */}
            </li>
            <li>
              <Link to="/login" onClick={toggleMenu}>Login</Link>
            </li>
            <li>
              <Link to="/imc" onClick={toggleMenu}>IMC</Link>
            </li>
          </ul>
        </nav>
      )}

      <Outlet /> {/* Renderiza o conteúdo baseado na rota */}
    </>
  );
};

export default Layout;
