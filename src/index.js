import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends Component {

  constructor(props){
    super(props)

    this.state = {
      clock: 1000,
      copo: 'agua'
    }
  }

  componentDidMount() {
    window.setTimeout(() => {
      this.setState({
        copo: 'suco'
      })
    }, 3000)
  }

  alterarCopo = () => {
    this.setState({
      copo: "refrigerante"
    });
  }

  render() {
    //pegar o state e passar o valor para o clock
    const { clock, copo} = this.state
    return(
      <div>
        <h1>{clock}</h1> {/*\ pegar o valor do clock e colocar na page \*/}
        <button onClick={() => this.alterarCopo()}>{copo}</button>
      </div>
    )
  }
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)

