import React, { useState, useEffect, Component } from "react";
import socketIOClient from "socket.io-client";
import "./style.css";
import "../../helper/chat";

class Chat extends Component {
  render() {
    return (
      <div className="chat-container">
        <header className="chat-header"></header>
        <main className="chat-main">
          <div className="chat-sidebar">
            Users
            <ul id="users"></ul>
          </div>
          <div className="chat-messages"></div>
        </main>
        <div className="chat-form-container">
          <form id="chat-form">
            <input
              id="msg"
              type="text"
              placeholder="Enter Message"
              required
              autocomplete="off"
            />
            <button className="waves-effect waves-light btn-large btn">
              Send
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Chat;
