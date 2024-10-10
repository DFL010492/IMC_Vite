import React, { useState } from 'react';

function IMC() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [imc, setIMC] = useState(null);

  const calcularIMC = () => {
    const pesoNumerico = parseFloat(peso);
    const alturaNumerica = parseFloat(altura) / 100;

    if (pesoNumerico > 0 && alturaNumerica > 0) {
      const imcCalculado = pesoNumerico / (alturaNumerica **2 );
      setIMC(imcCalculado.toFixed(2));
    }
  };

  return (
    <>
      <div>
        <h1>Calculadora de IMC</h1>
      </div>
      <div>
        <p>Coloque o peso.</p>
        <input 
          type="number" 
          value={peso} 
          onChange={(e) => setPeso(e.target.value)} 
          placeholder="Insira o peso"
        />
      </div>
      <div>
        <p>Coloque a Altura em cm.</p>
        <input 
          type="number" 
          value={altura} 
          onChange={(e) => setAltura(e.target.value)} 
          placeholder="Insira a altura"
        />
      </div>
      <div>
        <button onClick={calcularIMC}>Calcular IMC</button>
        {imc && <h2>Seu IMC é: {imc}</h2>}
      </div>
    </>
  );
}

export default IMC;
