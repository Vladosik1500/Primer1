import React, { Component } from "react";
import Greetings from "./Greetings";
import FirstNameField from "./FirstNameField";
import LastNameField from "./LastNameField";
import style from "./style";

class SimpleForm extends React.Component {
  state = {
    firstName: "",
    firstNameError: ""
  };
  validateName = (name) => {
    const regex = /[A-Za-z]{3,}/;

    return !regex.test(name)
      ? "The name contain at least three letters. Numbers and special characters are"
      : "";
  };

  onFirstNameBlur = () => {
    const { firstName } = this.state;
    const firstNameError = this.validateName(firstName);
    return this.setState({ firstNameError });
  };
  onFirstNameChange = (event) =>
    this.setState({
      firstName: event.target.value
    });

  render() {
    const { firstNameError, firstName, lastName, lastNameError } = this.state;

    return (
      <div style={style.form}>
        <FirstNameField
          onChange={this.onFirstNameChange}
          onBlur={this.onFirstNameBlur}
          error={firstNameError}
        />

        <LastNameField
          onChange={this.onLastNameChange}
          onBlur={this.onLastNameBlur}
          error={lastNameError}
        />

        <Greetings firstName={firstName} lastName={lastName} />
      </div>
    );
  }
}

const App = () => (
  <div>
    <SimpleForm />
  </div>
);
export default App;
