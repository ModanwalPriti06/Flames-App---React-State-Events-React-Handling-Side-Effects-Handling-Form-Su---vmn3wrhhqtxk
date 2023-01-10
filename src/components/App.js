import React, {Component, useState} from "react";
import '../styles/App.css';


class App extends Component {
  state = {
    name1: '',
    name2: '',
    result: '',
  };

  handleName1Change = (e) => {
    this.setState({ name1: e.target.value });
  };

  handleName2Change = (e) => {
    this.setState({ name2: e.target.value });
  };

  calculate = () => {
    const { name1, name2 } = this.state;
    if (!name1 || !name2) {
      this.setState({ result: 'Please Enter valid input' });
      return;
    }

    let remainingString1 = name1;
    let remainingString2 = name2;
    for (let i = 0; i < name1.length; i++) {
      for (let j = 0; j < name2.length; j++) {
        if (name1[i] === name2[j]) {
          remainingString1 = remainingString1.slice(0, i) + remainingString1.slice(i + 1);
          remainingString2 = remainingString2.slice(0, j) + remainingString2.slice(j + 1);
          i--;
          break;
        }
      }
    }

    const lengthSum = (remainingString1 + remainingString2).length;
    const resultIndex = lengthSum % 6;

    switch (resultIndex) {
      case 1:
        this.setState({ result: 'Friends' });
        break;
      case 2:
        this.setState({ result: 'Love' });
        break;
      case 3:
        this.setState({ result: 'Affection' });
        break;
      case 4:
        this.setState({ result: 'Marriage' });
        break;
      case 5:
        this.setState({ result: 'Enemy' });
        break;
      case 0:
        this.setState({ result: 'Siblings' });
        break;
    }
  };

  clear = () => {
    this.setState({ name1: '', name2: '', result: '' });
  };

  render() {
    const { name1, name2, result } = this.state;

    return (
      <div>
        <input
          type="text"
          data-testid="input1"
          value={name1}
          onChange={this.handleName1Change}
          placeholder="First name"
        />
        <input
          type="text"
          data-testid="input2"
          value={name2}
          onChange={this.handleName2Change}
          placeholder="Second name"
        />
        <button data-testid="calculate_relationship" onClick={this.calculate}>
          Calculate Relationship Future
        </button>
        <button data-testid="clear" onClick={this.clear}>
            
            </div>
          Clear
        </button>
        <h3 data-testid="answer">{result}</h3>
      </div>
);




    }
}


export default App;
