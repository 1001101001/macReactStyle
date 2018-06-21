import React, { Component } from 'react';
import { Window, TitleBar } from 'react-desktop/';

export default class extends Component {
  render() {
    return (
      <Window
        chrome
        height="300px"
        padding="10px"
      >
        <TitleBar title="untitled text 5" controls/>
        <h1>macOS style window in react!</h1>


      </Window>
    );
  }
}
