import React from 'react';
import { Link } from 'react-router-dom';
import './Todos.css'; // Certifique-se de que o arquivo de estilos seja o mesmo usado nos outros componentes

const Home = () => {
  return (
    <div className='container'>
      <h1>Bem-vindo!</h1>
      <p>Escolha uma das opções abaixo:</p>
      <div className="button-group">
        <Link to="/login">
          <button>Acessar Login</button>
        </Link>
        <Link to="/imc">
          <button>Calculadora de IMC</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
