import React from "react";
import Users from "./Users";
import UserClass from "./UsersClass";

class About extends React.Component {
  constructor(props) {
    super(props);
    // console.log("Parent Constructor");
  }
  componentDidMount() {
    // console.log("Parent component did mount");
  }
  render() {
    // console.log("Parent Render");
    return (
      <>
        <h1>About</h1>
        <UserClass name={"Sreenath Class based"} location={"Hyderabad"} />
      </>
    );
  }
}

export default About;
