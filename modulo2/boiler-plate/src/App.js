import React from "react";
import styled from "styled-components";
import "./styles.css";

const TarefaList = styled.ul`
  padding: 0;
  width: 300px;
  margin-right: 20px;
`;

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({ completa }) => (completa ? "line-through" : "none")};
  list-style: none;
`;

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
  .botaoRemoverTodos{
    margin-top: 20px;
  }
`;
const Flex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
`;
const QuadroTarefas = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-space-evenly;
`;

class App extends React.Component {
  state = {
    tarefas: [
      {
        id: 1,
        texto: "teste",
        completa: false,
      },
      {
        id: 2,
        texto: "teste2",
        completa: true,
      },
    ],
    inputValue: "",
    filtro: "",
  };

  componentDidUpdate() {
    localStorage.setItem("tarefas", JSON.stringify(this.state.tarefas));
  }

  componentDidMount() {
    let tarefasPersistidas = localStorage.getItem("tarefas");
    tarefasPersistidas = JSON.parse(tarefasPersistidas);

    this.setState({
      tarefas: tarefasPersistidas,
    });
  }

  onChangeInput = (e) => {
    this.setState(
      {
        inputValue: e.target.value,
      },
      () => console.log(this.state.inputValue)
    );
  };

  criaTarefa = () => {
    let tarefa = {
      id: Math.floor(Date.now() * Math.random()).toString(36),
      texto: this.state.inputValue,
      completa: false,
    };

    this.setState(
      {
        tarefas: [...this.state.tarefas, tarefa],
        inputValue: "",
      },
      () => console.log(this.state.tarefas)
    );
  };

  selectTarefa = (id, acao) => {
    let tarefasModificadas = this.state.tarefas.map((tarefa) => {
      if (tarefa.id === id) {
        tarefa.completa = !tarefa.completa;
      }
      return tarefa;
    });

    let tarefaFiltrada = this.state.tarefas.filter(
      (tarefas) => tarefas.id === id
    );
    console.log(tarefaFiltrada[0]);
    if (acao === "editar") {
      this.setState(
        {
          inputValue: tarefaFiltrada[0].texto,
        },
        () => this.removerTarefas(id)
      );
    } else {
      this.setState({
        tarefas: [...tarefasModificadas],
      });
    }
  };

  onChangeFilter = (event) => {
    this.setState({
      filtro: event.target.value,
    });
  };

  removerTarefas = (id) => {
    let tarefa = this.state.tarefas.filter((tarefa) => {
      return tarefa.id !== id;
    });
    this.setState({
      tarefas: tarefa,
    });
  };

  removerTodasAsTarefas= () => {
    this.setState({
      tarefas: []
    })
  }

  render() {
    const listaFiltrada = this.state.tarefas.filter((tarefa) => {
      switch (this.state.filtro) {
        case "pendentes":
          return !tarefa.completa;
        case "completas":
          return tarefa.completa;
        default:
          return true;
      }
    });

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput} />
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br />

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <InputsContainer>
          <button 
          onClick={() => this.removerTodasAsTarefas()}
          className="botaoRemoverTodos"
          >
            Limpar Tarefas
          </button>
        </InputsContainer>
        <QuadroTarefas>
          <TarefaList>
            {listaFiltrada.map((tarefa) => {
              if (tarefa.completa === true) {
                return (
                  <Flex>
                    <label htmlFor={tarefa.id}>
                      <Tarefa completa={tarefa.completa} key={tarefa.id}>
                        {tarefa.texto}
                      </Tarefa>
                    </label>
                    <input
                      type="checkbox"
                      id={tarefa.id}
                      name={tarefa.id}
                      defaultChecked={tarefa.completa === false ? "" : "cheked"}
                      onClick={() => this.selectTarefa(tarefa.id, "")}
                    />
                    <button onClick={() => this.removerTarefas(tarefa.id)}>
                      Remover
                    </button>
                    <button
                      onClick={() => this.selectTarefa(tarefa.id, "editar")}
                    >
                      Editar
                    </button>
                  </Flex>
                );
              }
            })}
          </TarefaList>
          <TarefaList>
            {listaFiltrada.map((tarefa) => {
              if (Boolean(tarefa.completa) === false) {
                return (
                  <Flex>
                    <label htmlFor={tarefa.id}>
                      <Tarefa completa={tarefa.completa} key={tarefa.id}>
                        {tarefa.texto}
                      </Tarefa>
                    </label>
                    <input
                      type="checkbox"
                      id={tarefa.id}
                      name={tarefa.id}
                      defaultChecked={tarefa.completa === false ? "" : "cheked"}
                      onClick={() => this.selectTarefa(tarefa.id, " ")}
                    />
                    <button onClick={() => this.removerTarefas(tarefa.id)}>
                      Remover
                    </button>
                    <button
                      onClick={() => this.selectTarefa(tarefa.id, "editar")}
                    >
                      Editar
                    </button>
                  </Flex>
                );
              }
            })}
          </TarefaList>
        </QuadroTarefas>
      </div>
    );
  }
}

export default App;
