import React from 'react';
import './App.css';

function DataFormatada(props){
  return <h2>horario atual: {props.date.toLocaleTimeString()}</h2>
}

class Clock extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      //  Define o estado recebendo a data atual
      date : new Date()
    }
  } 

    //  É o ciclo de vida que ocorre quando o componente é inserido no DOM
    // Através da função set interval o relógico é criado com um timer id atrelado
    //  Ela chama a função thick á cada mil milissegundos
  componentDidMount(){
    this.timerId = setInterval(() => {
    this.thick()  
    }, 1000)

    console.log("Eu sou o relógio" + this.timerId)
  }

  //  Este ocorre quando o componente é removido do dom
  componentWillMount(){
    clearInterval(this.timerId)
  }

  // Define no state a data a cada vez que é chamada
  thick(){
    this.setState({date : new Date()
    })
  }

  // Renderiza na tela o título e o retorno da função dataformatada
  // Passando date para o valor atual do state
  render(){
    return (
    <div>
      <h1>Relogio</h1>
      <DataFormatada date={this.state.date}/>
    </div>
)
}

}

function App() {
  return (
    <div className="App">
      <header className="App-header">
       
      <Clock/>
      <Clock/>

      </header>
    </div>
  );
}

export default App;
