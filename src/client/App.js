import React, { Component } from "react";
import "./app.css";
// import ReactImage from './react.png';
export default class App extends Component {
  componentDidMount() {
    fetch("/api/getUsername").then(res => res.json());
  }

  render() {
    return (
      <div>
        {/* Make in to component */}
        <nav>
          <h1>Club one - making your night out work for you!</h1>
          <ul>
            <li>
              <a href="#home">
                Home
              </a>
            </li>
            <li>
              <a href="#news">News</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
          </ul>
        </nav>

        {/* Tracks list */}
        <br />
        <ul>
          <li>Track one</li>
          <li>Track two</li>
          <li>Track three</li>
          <li>Track four</li>
        </ul>

      </div>
    );
  }
}
