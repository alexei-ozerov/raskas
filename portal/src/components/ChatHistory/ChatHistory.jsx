import React, { Component } from "react";
import "./ChatHistory.scss";

import Message from "../Message/Message"
import ChatInput from '../ChatInput/ChatInput';

import { sendMsg } from "../../api";

class ChatHistory extends Component {
  send(event) {
    if(event.keyCode === 13) {
      sendMsg(event.target.value);
      event.target.value = "";
    }
  }
  
  render() {
    console.log(this.props.chatHistory);
    const messages = this.props.chatHistory.map(msg => <Message message={msg.data} />);
  
    return (
      <div className='body'>
        <div className='cent'>
          <div className='container-l'>
            <h2>Online Chat</h2>
            <div id='scroller-1' className='content-chat'>
              {messages}
            </div>
            <ChatInput send={this.send} />
          </div>
          <div className='container-r'>
            <h2>Journal</h2>
          </div>
        </div>
      </div>
    );
  };
}

export default ChatHistory;