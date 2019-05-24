import React from 'react';
import logo from './logo.svg';
import './App.css';
import Square from './Square';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      bgcolor: 'red',
    };
  }

  handleChangeColor = () => {
    const currentColor = this.state.bgcolor;
    this.setState({
      bgcolor: currentColor === 'red' ? 'blue' : 'Green'
    });
  };

  render() {
    return (
      <div className="App" >
        {
          [1, 2, 3].map(v => (
            <Square
              name={v}
              times={v}
              bgcolor={this.state.bgcolor}
              onChangeColor={this.handleChangeColor} />))
        }
        <header className="App-header" >
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
        </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>
        </header>
      </div >
    );
  }
}

export default App;
