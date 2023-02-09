import React, { Component } from "react";
import Players from "./Player";
import PlayersPresentation from "./PlayersPresentation";
export class Main extends Component {
  constructor() {
    super();
    this.state = {
      players: Players,
    };
  }
  render() {
    // return <PlayersPresentation players={this.state.players} />;
    return <Players />
  }
}
export default Main;
