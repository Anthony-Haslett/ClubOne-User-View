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
        <h1>Club one - making your night out work for you!</h1>
        <nav>
          <a href="/html/">HTML</a> 
          <a href="/css/">CSS</a>
          <a href="/js/">JavaScript</a>
          <a href="/jquery/">jQuery</a>
        </nav>
      </div>
    );
  }
}
