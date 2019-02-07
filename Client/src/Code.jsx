import React, { Component } from "react";
import { Header, Button, Form, Input, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import logo from "./logo.svg";

class Game extends Component {
  render() {
    return (
      <div
        style={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            textAlign: "center",
            width: "70%",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <Header as="h1" dividing>
            {" "}
            The Code is
          </Header>
        </div>
      </div>
    );
  }
}

export default Game;
