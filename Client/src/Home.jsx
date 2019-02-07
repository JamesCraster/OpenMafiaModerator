import React, { Component } from "react";
import { Header, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import logo from "./logo.svg";

class Home extends Component {
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
            Open Mafia Moderator
          </Header>
          <Link to="/host">
            <Button basic color="black">
              Host Game
            </Button>
          </Link>
          <Link to="/join">
            <Button basic color="black">
              Join Game
            </Button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Home;
