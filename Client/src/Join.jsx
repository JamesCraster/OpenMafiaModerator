import React, { Component } from "react";
import { Header, Button, Form, Input, Icon } from "semantic-ui-react";
import {Link} from "react-router-dom";
import logo from "./logo.svg";

class Join extends Component {
  render() {
    return (
        <div
          style={{
            textAlign: "center",
            width: "70%",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <Link to="/"><Icon style={{fontSize:"30px", marginTop:"20px"}} name="arrow alternate circle left outline"></Icon></Link>
          <Header as="h1" dividing>
            {" "}
            Join Game
          </Header>
          <Form>
            <Form.Field>
              <Input
                style={{maxWidth:"500px"}}
                icon="key"
                iconPosition="left"
                placeholder="Enter your game code"
                maxLength="6"
              />
            </Form.Field>
            <Form.Field>
              <Input
                style={{maxWidth:"500px"}}
                icon="user"
                iconPosition="left"
                placeholder="Enter your nickname"
                maxLength="20"
              />
            </Form.Field>
            <Form.Field>
              <Link to="player"><Button basic color="black">
                Join Game
              </Button></Link>
            </Form.Field>
          </Form>
        </div>
    );
  }
}

export default Join;
