import React, { Component } from "react";
import "./app.css";
import Foundation from "react-foundation";
// import ReactImage from './react.png';
export default class App extends Component {
  componentDidMount() {
    fetch("/api/getUsername").then(res => res.json());
  }

  render() {
    return (
      <div>
        <h1>Club one</h1>

        {/* Tracks list */}
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

        {/* Make in to component */}
        <nav>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#search">Search</a>
            </li>
            <li>
              <a href="#profile-page">Profile page</a>
            </li>
            <li>
              <a href="#activity-feed">Activity feed</a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
