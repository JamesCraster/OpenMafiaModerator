import React, { Component } from "react";
import { Header, Segment, List, Table } from "semantic-ui-react";
import { Link } from "react-router-dom";
import logo from "./logo.svg";

class Game extends Component {
  render() {
    return (
      <div
        style={{
          width: "70%",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <Header as="h1" dividing style={{ marginTop: "20px" }}>
          {" "}
          Game
        </Header>
        <table class="ui celled table">
          <thead>
            <tr>
              <th>Players:</th>
              <th>Roles:</th>
              <th>Nominations:</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-label="Name">James</td>
              <td data-label="Age">24</td>
              <td data-label="Job">Engineer</td>
            </tr>
            <tr>
              <td data-label="Name">Jill</td>
              <td data-label="Age">26</td>
              <td data-label="Job">Engineer</td>
            </tr>
            <tr>
              <td data-label="Name">Elyse</td>
              <td data-label="Age">24</td>
              <td data-label="Job">Designer</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Game;
