import React, { Component } from "react";
import { Header, Button, Icon, Form, Input } from "semantic-ui-react";
import { Link } from "react-router-dom";
import logo from "./logo.svg";
class Role extends React.Component {
  render() {
    return (
      <Form.Field>
        <Input placeholder="Enter name of role..." />
        <Input placeholder="Enter description of role..." />
      </Form.Field>
    );
  }
}
class RoleForm extends Component {
  constructor(props) {
    super(props);
    this.state = { roles: [<Role key={0} />], key: 0 };
  }
  addRole = () => {
    let newRoles = this.state.roles.slice();
    newRoles.push(<Role key={this.state.key + 1} />);
    this.setState({
      key: this.state.key + 1,
      roles: newRoles,
    });
    console.log(this.state.roles);
  };
  subtractRole = () => {
    let newRoles = this.state.roles.slice();
    newRoles.pop();
    this.setState({
      key: this.state.key + 1,
      roles: newRoles,
    });
  };
  render() {
    return (
      <Form>
        <Form.Field>
          <Button icon="plus" onClick={this.addRole} />
          <Button icon="minus" onClick={this.subtractRole} />
        </Form.Field>
        {this.state.roles}
        <Form.Field style={{ textAlign: "center" }}>
          <Link to="game">
            <Button basic color="black">
              Create
            </Button>
          </Link>
        </Form.Field>
      </Form>
    );
  }
}
class Home extends Component {
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
        <Link to="/">
          <Icon
            style={{ fontSize: "30px", marginTop: "20px" }}
            name="arrow alternate circle left outline"
          />
        </Link>
        <Header as="h1" dividing>
          {" "}
          Host Game
        </Header>
        <p>
          Press + to add more roles. Write one role for every player, then click
          Create.
        </p>
        <div style={{ textAlign: "left" }}>
          <RoleForm />
        </div>
      </div>
    );
  }
}

export default Home;
