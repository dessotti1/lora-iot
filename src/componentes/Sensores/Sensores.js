import React, { useState } from "react";
import "./Sensores.css";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

import Table from "react-bootstrap/Table";
import { IoWifiSharp } from "react-icons/io5";

const Sensores = ({ sensoresList }) => {
  const mockSensores = [
    { nome: "Sensor 1", localizacao: "Localização 1" },
    { nome: "Sensor 2", localizacao: "Localização 2" },
  ];
  const [data, setData] = useState(mockSensores);
  const [filterText, setFilterText] = useState("");

  const filterSensores = (sensoresList) => {
    return sensoresList.filter((item) =>
      item.nome.toLowerCase().includes(filterText.toLowerCase())
    );
  };

  const handleFilterChange = (event) => {
    setFilterText(event.target.value);
  };

  const handleFilterSubmit = (event) => {
    event.preventDefault();
    setData(filterSensores(mockSensores));
  };

  return (
    <div className="tableSensores">
      <Form>
        <Row >
          <Form.Group as={Col} controlId="sensor">
            <Form.Control type="text" placeholder="Sensor" />
          </Form.Group>

          <Col xs="auto">
            <Button type="submit" className="mb-2">
              Pesquisar
            </Button>
          </Col>
        </Row>
      </Form>
      <br />
      <Row>
      <div>

          <Table
            striped="columns"
            borderless
            hover
            variant="dark"
            size="dm"
            responsive="sm"
          >
            {/* <thead>
              <form onSubmit={handleFilterSubmit}>
              <label htmlFor="filter">Filtrar por nome:</label>
              <input
                type="text"
                id="filter"
                value={filterText}
                onChange={handleFilterChange}
              />
              <button type="submit">Filtrar</button>
            </form>
            </thead> */}

            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  {/* Use os valores do item para preencher as células da tabela */}
                  <td>{item.nome}</td>
                  <td>
                    <h5>
                      <IoWifiSharp />
                    </h5>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        
      </div>
      </Row>
    </div>
  );
};

export default Sensores;
