import React, { Component } from "react";
import './app.css';
import PartyEmoji from './party emoji.png'

export default class App extends Component {
  componentDidMount() {
    fetch('/api/getUsername').then(res => res.json());
  }

  render() {
    return (
      <div>
        <section className="header">
          <h1 className="header-text">Club one</h1>
        </section>

        <img src={PartyEmoji} alt="logo" id="logo" />

        <section className="songSearch">
          <input type="text" name="songSearch" placeholder="Search for a song..." />
        </section>

        Tracks list (dynamic pull in)
        <br />
        <ul>
          <li>Track one</li>
          <br />
          <li>Track two</li>
          <br />
          <li>Track three</li>
          <br />
          <li>Track four</li>
          <br />
        </ul>

        <div className="navbar">
          <a href="#home" className="active">Home</a>
          <a href="#news">Profile page</a>
          <a href="#contact">Activity feed</a>
        </div>

      </div>
    );
  }
}
