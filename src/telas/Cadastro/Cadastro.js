import React, { useState } from "react";
import Cabecalho from "../../componentes/Cabecalho/Cabecalho";

function Cadastro() {
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [sensor, setSensor] = useState("");

  const sensors = ["Sensor 1", "Sensor 2", "Sensor 3"]; // Substitua por sua lista de sensores

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(email, location, sensor);
    // Aqui você pode fazer o que precisar com os valores dos campos
  };

  return (
    <div>
      <Cabecalho img="/imagens/conta.svg" />

      <div className="container">
        <form onSubmit={handleSubmit} className="content">
          <div class="text-block">
          <label style={{ display: 'block' }}>
  Email:
  <input
    type="email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
  />
</label>
<label style={{ display: 'block' }}>
  Localização:
  <input
    placeholder="Digite a localização"
    type="text"
    value={location}
    onChange={(e) => setLocation(e.target.value)}
  />
</label>
<label style={{ display: 'block' }}>
  Escolha um sensor:
  <select
    value={sensor}
    onChange={(e) => setSensor(e.target.value)}
  >
    {sensors.map((sensor, index) => (
      <option key={index} value={sensor}>
        {sensor}
      </option>
    ))}
  </select>
</label>
          </div>
          <div className="login">
            <button
              className="botao-login"
              type="submit"
              onClick={handleSubmit}
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Cadastro;
