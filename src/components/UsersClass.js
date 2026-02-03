import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: {
        name: "Dummy",
        location: "Default",
      },
    };
  }
  async componentDidMount() {
    const userData = await fetch(
      "https://api.github.com/users/sreenathreddy-dev"
    );
    const json = await userData.json();
    this.setState({
      userData: json,
    });
  }
  render() {
    const { name, location } = this.state.userData;
    return (
      <>
        <h2>Name:{name}</h2>
        <div>Location: {location}</div>
        <div>ID: @SreenathClass</div>
      </>
    );
  }
}

export default UserClass;
