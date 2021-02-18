// App.js
import React, { Component } from "react";
import "./App.css";
import { connect } from "./api";

import Header from './components/Header/Header';
import ChatHistory from './components/ChatHistory/ChatHistory';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chatHistory: []
    }
  }

  componentDidMount() {
    connect((msg) => {
      console.log("New Message")
      this.setState(prevState => ({
        chatHistory: [...this.state.chatHistory, msg]
      }))
      console.log(this.state);
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <ChatHistory chatHistory={this.state.chatHistory} />
      </div>
    );
  }
}

export default App;