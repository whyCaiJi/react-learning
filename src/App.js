import React, { Component } from 'react';
import Intro from './components/Intro';
import './App.css';

// Customized components to be capitalized, differentiating from in-built tags
// Lesson 3: creating a new component


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">TV Series List</h1>
        </header>
        <Intro message="Here you can find all of your most loved series" />
      </div>
    );
  }
}

export default App;
