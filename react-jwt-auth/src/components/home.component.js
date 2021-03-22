import React, { Component } from "react";

import UserService from "../services/user.service";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: [{}]
    };
  }

  componentDidMount() {
    UserService.getPublicContent().then(
      response => {
        this.setState({
          content: response.data
        });
      },
      error => {
        this.setState({
          content:
            (error.response && error.response.data) ||
            error.message ||
            error.toString()
        });
      }
    );
  }

  render() {
    console.log(this.state.content);
    return (
      <div className="container">
        <header className="jumbotron"></header>
          <table className="table">
            <thead>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Position</th>
            <th>Departmant</th>
            <th>Job Title</th>
            <th>Additional Info</th>
            </thead>
            <tbody>
              {this.state.content.map(item => {
                return(
            <tr>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
              <td>{item.position}</td>
              <td>{item.department}</td>
              <td>{item.jobTitle}</td>
              <td>{item.additionalInfo}</td>
            </tr>
              )})}
            </tbody>
          </table>
        

      </div>
    );
  }
}