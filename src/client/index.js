import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

if (module.hot) {
  module.hot.accept('./App.js', function () {
    console.log("hot")
  })
}

ReactDOM.render(<App />, document.getElementById('root'));
