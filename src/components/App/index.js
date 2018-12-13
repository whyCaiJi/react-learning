import React, { Component } from 'react';
import Intro from '../Intro';
import './App.css';

// Customized components to be capitalized, differentiating from in-built tags
// Lesson 3: creating a new component


class App extends Component {
  // The concept state is a bit similar to class static attribute
  state = {
    series: []
  }

  // Lifecycle tutorial: needs to understand callback function
  componentDidMount() {
    const series = ["Vikings", "Game of Thrones"];

    setTimeout(() => {
      this.setState({ series });
    }, 2000);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">TV Series List</h1>
        </header>
        <Intro message="Here you can find all of your most loved series" />
        The length of series array - {this.state.series.length}
      </div>
    );
  }
}

export default App;
