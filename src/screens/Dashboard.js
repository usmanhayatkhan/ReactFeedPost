import React, { Component } from "react";
import HeaderAppBar from "./../componenets/HeaderAppBar";
import Wallposts from "./../componenets/Wallpostslist";

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <HeaderAppBar />
        <Wallposts />
      </div>
    );
  }
}
